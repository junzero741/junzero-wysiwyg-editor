import { Schema } from 'prosemirror-model';
import { extensions } from './extensions';

export const schema = new Schema({
  nodes: {
    doc: { content: 'block+' }, // 문서는 하나 이상의 블록을 포함
    paragraph: {
      content: 'inline*', // 문단은 여러 인라인 요소를 포함
      group: 'block', // 블록 그룹에 속함
      parseDOM: [{ tag: 'p' }], // HTML <p> 태그로 파싱
      toDOM: () => ['p', 0], // DOM으로 변환 시 <p> 태그 사용
    },
    text: {
      group: 'inline', // 인라인 그룹에 속함
    },
  },
  marks: extensions.marks, // 마크 확장 사용
});