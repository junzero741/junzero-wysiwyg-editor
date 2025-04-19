import 'prosemirror-view/style/prosemirror.css'; // ProseMirror 기본 스타일
import React, { useEffect, useRef } from 'react';
import { Editor } from '../core/Editor';
import { schema } from '../core/schema';
import '../styles/editor.css';


interface EditorComponentProps {
  content: string;
  onChange?: (content: string) => void;
}

const EditorComponent = ({ content, onChange }: EditorComponentProps) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const editorInstance = useRef<Editor | null>(null);

  useEffect(() => {
    if (editorRef.current && !editorInstance.current) {
      // 에디터를 처음 한 번만 생성
      editorInstance.current = new Editor(editorRef.current, schema, content, onChange);
    }
  }, [onChange]); // onChange가 변경될 때만 새로 설정

  useEffect(() => {
    if (editorInstance.current) {
      // content가 변경될 때 기존 에디터의 상태만 업데이트
      editorInstance.current.setContent(content);
    }
  }, [content]);

  return <div ref={editorRef} className="editor" />;
};

export default EditorComponent;