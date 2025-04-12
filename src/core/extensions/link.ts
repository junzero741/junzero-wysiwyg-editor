import { MarkSpec } from 'prosemirror-model';

export const link: MarkSpec = {
  attrs: {
    href: {},
    title: { default: null },
  },
  inclusive: false,
  parseDOM: [
    {
      tag: 'a[href]',
      getAttrs: (node) => ({
        href: (node as HTMLElement).getAttribute('href'),
        title: (node as HTMLElement).getAttribute('title'),
      }),
    },
  ],
  toDOM: (node) => ['a', { href: node.attrs.href, title: node.attrs.title }, 0],
};