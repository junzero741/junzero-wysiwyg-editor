# WYSIWYG Editor Library

## Overview
This project is a WYSIWYG editor library built using Prosemirror, designed for integration with React or Next.js applications. It provides a customizable and extensible editor component that can be easily integrated into your projects.

## Features
- Rich text editing capabilities
- Customizable schema for document structure
- React component for easy integration
- Lightweight and performant

## Installation
To install the WYSIWYG editor library, run the following command:

```bash
npm install @repo/editor
```

## Usage
To use the editor in your React or Next.js application, import the `Editor` component and include it in your JSX:

```jsx
import { Editor } from '@repo/editor';

function App() {
  return (
    <div>
      <h1>My WYSIWYG Editor</h1>
      <Editor />
    </div>
  );
}

export default App;
```

## API
### Editor Component
The `Editor` component manages the Prosemirror editor instance and provides methods for content manipulation and user interaction.

#### Props
- `initialContent`: (optional) The initial content to load into the editor.
- `onChange`: (optional) Callback function that is called when the content changes.

## Development
To run the development server, use the following command:

```bash
npm run dev
```

To build the library for production, use:

```bash
npm run build
```

## License
This project is licensed under the MIT License. See the LICENSE file for more details.