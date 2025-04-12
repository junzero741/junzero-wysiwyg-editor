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