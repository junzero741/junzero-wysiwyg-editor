import React, { useEffect, useRef } from 'react';
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { schema } from '../utils/schema'; // Adjust the import path as needed



export interface EditorProps {
  onChange?: (content: string) => void;
}

const Editor = (props: EditorProps): React.ReactNode => {
  const editorRef = useRef(null);
  const editorViewRef = useRef<EditorView | null>(null);

  useEffect(() => {
    const state = EditorState.create({
      schema,
    });

    editorViewRef.current = new EditorView(editorRef.current, {
      state,
      // Add any additional options or event handlers here
    });

    return () => {
      if (editorViewRef.current) {
        editorViewRef.current.destroy();
      }
    };
  }, []);

  return <div ref={editorRef} className="editor" />;
};

export default Editor;