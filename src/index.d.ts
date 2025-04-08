// Export the Editor component's props
export interface EditorProps {
  onChange?: (content: string) => void;
}

// Export the Editor component
export declare const Editor: React.FC<EditorProps>;