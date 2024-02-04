import { Scrollspy as ScrollSpy } from '@makotot/ghostui/src/Scrollspy';
import { Link, useLocation, useRouteMeta, useSiteData, useTabMeta } from 'dumi';
import React, { useEffect, useRef, useState, type FC, type RefObject } from 'react';
import './index.less';

const Toc: FC = () => {
  const { pathname, search } = useLocation();
  const meta = useRouteMeta();
  const tabMeta = useTabMeta();
  const { loading } = useSiteData();
  const prevIndexRef = useRef(0);
  const [sectionRefs, setSectionRefs] = useState<RefObject<HTMLElement>[]>([]);

  const memoToc = React.useMemo(() => {
    let toc = meta.toc;
    if (tabMeta) {
      toc = tabMeta.toc;
    }

    return toc.filter(({ depth }) => depth > 1);
  }, [meta, tabMeta]);

  useEffect(() => {
    // 页面挂载完全
    if (!loading) {
      // 获取所有 toc id
      const refs = memoToc.map(({ id }) => ({
        current: document.getElementById(id),
      }));

      setSectionRefs(refs);
    }
  }, [pathname, search, loading]);

  return sectionRefs.length ? (
    <div className="dumi-default-doc-layout-toc-wrapper">
      <ScrollSpy sectionRefs={sectionRefs}>
        {({ currentElementIndexInViewport }) => {
          if (currentElementIndexInViewport > -1) prevIndexRef.current = currentElementIndexInViewport;

          return (
            <ul className="dumi-default-toc">
              {memoToc
                .filter(({ depth }) => depth > 1)
                .map((item, i) => {
                  const link = `${search}#${encodeURIComponent(item.id)}`;
                  const activeIndex =
                    currentElementIndexInViewport > -1 ? currentElementIndexInViewport : prevIndexRef.current;

                  return (
                    <li key={item.id} data-depth={item.depth}>
                      <Link to={link} title={item.title} {...(activeIndex === i ? { className: 'toc-active' } : {})}>
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          );
        }}
      </ScrollSpy>
    </div>
  ) : null;
};

export default Toc;
