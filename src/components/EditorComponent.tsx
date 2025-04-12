import 'prosemirror-view/style/prosemirror.css'; // ProseMirror 기본 스타일
import React, { useEffect, useRef } from 'react';
import { Editor } from '../core/Editor';
import { schema } from '../core/schema';
import '../styles/editor.css';


interface EditorComponentProps {
  content: string;
  onChange?: (content: string) => void;
}

const EditorComponent: React.FC<EditorComponentProps> = ({ content, onChange }) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const editorInstance = useRef<Editor | null>(null);

  useEffect(() => {
    if (editorRef.current) {
      editorInstance.current = new Editor(editorRef.current, schema, content, onChange);
    }

    return () => {
      editorInstance.current?.destroy();
    };
  }, [content, onChange]);

  return <div ref={editorRef} className="editor" />;
};

export default EditorComponent;