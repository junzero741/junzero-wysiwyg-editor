import { Schema } from "prosemirror-model";
import { nodes as basicNodes, marks as basicMarks } from "prosemirror-schema-basic";

export const schema = new Schema({
  nodes: {
    ...basicNodes,
    // Define custom nodes here if needed
  },
  marks: {
    ...basicMarks,
    // Define custom marks here if needed
  }
});