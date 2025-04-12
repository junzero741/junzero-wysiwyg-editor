import React, { useState } from 'react';
import { EditorComponent } from 'junzero-wysiwyg-editor';

const App: React.FC = () => {
  const [content, setContent] = useState('{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"Hello, world!"}]}]}');

  const handleChange = (newContent: string) => {
    setContent(newContent);
  };

 

  return (
    <div>
      <h1>WYSIWYG Editor Example</h1>
      <EditorComponent
        content={content}
        onChange={handleChange}
      />
      <section>
        <h2>Editor Content</h2>
        <pre>{JSON.stringify(JSON.parse(content), null, 2)}</pre>
      </section>
    </div>
  );
};

export default App;