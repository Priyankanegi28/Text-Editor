import { Extension, Node, RawCommands } from "@tiptap/core";

interface VariableNode extends Node {
  attrs: {
    value: string;
  };
}

export const Variable = Extension.create({
  name: "variable",
  group: "inline",
  inline: true,
  selectable: false,
  atom: true,

  addAttributes() {
    return {
      value: {
        default: "",
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "span[data-variable]",
      },
    ];
  },

  renderHTML({ node }: { node: VariableNode }) {
    return [
      "span",
      { "data-variable": node.attrs.value, class: "variable-token" },
      node.attrs.value,
    ];
  },

  addCommands() {
    return {
      insertVariable:
        (variable: string) =>
        ({ chain }: { chain: any }) => {
          return chain().insertContent(variable).run();
        },
    } as Partial<RawCommands>;
  },
});