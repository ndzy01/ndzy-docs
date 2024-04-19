import { MdEditor, MdPreview, MdCatalog } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const scrollElement = document.documentElement;
export const EditorMd = ({ value, onChange, type = 'edit' }: any) => {
  const id = 'id_' + uuidv4();
  return (
    <>
      {type === 'edit' ? (
        <MdEditor
          editorId={id}
          modelValue={value}
          onChange={onChange}
          toolbars={[
            'preview',
            '-',
            'bold',
            'underline',
            'italic',
            '-',
            'strikeThrough',
            'title',
            'sub',
            'sup',
            'quote',
            'unorderedList',
            'orderedList',
            'task', // ^2.4.0
            '-',
            'codeRow',
            'code',
            'link',
            'image',
            'table',
            'mermaid',
            'katex',
            '-',
            'revoke',
            'next',
            'save',
            '=',
            'pageFullscreen',
            'fullscreen',
            'htmlPreview',
            'catalog',
          ]}
        />
      ) : (
        <div style={{ display: 'flex' }}>
          <MdPreview editorId={id} modelValue={value} />
          <MdCatalog editorId={id} scrollElement={scrollElement} />
        </div>
      )}
    </>
  );
};
