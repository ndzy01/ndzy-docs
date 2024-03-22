import DocLayout from 'dumi/theme-default/layouts/DocLayout';
import React, { useEffect, useState } from 'react';
import { login } from 'ndzy-utils';

const GlobalLayout = () => {
  const [s, setS] = useState(false);

  useEffect(() => {
    login().then((res: boolean) => {
      setS(res);
    });
  }, []);

  return s && <DocLayout />;
};

export default GlobalLayout;
