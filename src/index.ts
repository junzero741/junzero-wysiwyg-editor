import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { schema } from "./utils/schema";

export class WysiwygEditor {
  private editorView: EditorView;

  constructor(element: HTMLElement) {
    const state = EditorState.create({
      schema,
    });

    this.editorView = new EditorView(element, {
      state,
      // Additional options can be added here
    });
  }

  public updateContent(content: string) {
    const transaction = this.editorView.state.tr.replaceWith(0, this.editorView.state.doc.content.size, this.editorView.state.schema.text(content));
    this.editorView.dispatch(transaction);
  }

  public getContent(): string {
    return this.editorView.state.doc.textContent;
  }
}

export { default as Editor } from "./components/Editor";