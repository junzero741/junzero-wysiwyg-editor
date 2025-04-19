import { EditorState, Transaction } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { Schema } from 'prosemirror-model';

export class Editor {
  private editorView: EditorView;
  private onChangeCallback?: (content: string) => void;

  constructor(
    element: HTMLElement,
    schema: Schema,
    content: string,
    onChange?: (content: string) => void
  ) {
    this.onChangeCallback = onChange;

    const state = EditorState.create({
      schema,
      doc: schema.nodeFromJSON(JSON.parse(content)),
    });

    this.editorView = new EditorView(element, {
      state,
      dispatchTransaction: this.dispatchTransaction.bind(this),
    });
  }

  public setContent(content: string) {
    const newDoc = this.editorView.state.schema.nodeFromJSON(JSON.parse(content));
    const newState = EditorState.create({
      schema: this.editorView.state.schema,
      doc: newDoc,
    });
    this.editorView.updateState(newState);
  }

  private dispatchTransaction(transaction: Transaction) {
    const newState = this.editorView.state.apply(transaction);
    this.editorView.updateState(newState);

    if (this.onChangeCallback) {
      const updatedContent = JSON.stringify(newState.doc.toJSON());
      this.onChangeCallback(updatedContent);
    }
  }

  public getContent(): string {
    return JSON.stringify(this.editorView.state.doc.toJSON());
  }

  public destroy() {
    this.editorView.destroy();
  }
}