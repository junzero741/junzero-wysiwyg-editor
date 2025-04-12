import { MarkSpec } from 'prosemirror-model';

export const italic: MarkSpec = {
  parseDOM: [
    { tag: 'em' },
    { tag: 'i', getAttrs: (node) => (node as HTMLElement).style.fontStyle !== 'normal' && null },
  ],
  toDOM: () => ['em', 0],
};