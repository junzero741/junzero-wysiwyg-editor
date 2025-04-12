import { MarkSpec } from 'prosemirror-model';

export const bold: MarkSpec = {
  parseDOM: [
    { tag: 'strong' },
    { tag: 'b', getAttrs: (node) => (node as HTMLElement).style.fontWeight !== 'normal' && null },
  ],
  toDOM: () => ['strong', 0],
};