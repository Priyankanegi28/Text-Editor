import History from "@tiptap/extension-history";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";
import { Variable } from "../extensions/Variable";
import styles from "../styles/editor.module.css";
import VariablePopover from "./VariablePopover";

import Blockquote from "@tiptap/extension-blockquote";
import Bold from "@tiptap/extension-bold";
import BulletList from "@tiptap/extension-bullet-list";
import CodeBlock from "@tiptap/extension-code-block";
import Italic from "@tiptap/extension-italic";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Strike from "@tiptap/extension-strike";

const Editor = () => {
  const [popoverPosition, setPopoverPosition] = useState<{ x: number; y: number } | null>(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: false,
        bold: false,
        italic: false,
        bulletList: false,
        orderedList: false,
        listItem: false,
      }),

      Bold,
      Italic,
      Strike,
      BulletList,
      OrderedList,
      ListItem,
      Blockquote,
      CodeBlock,

      Underline, 
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      History, 
      Variable,
    ],
    content: "<p>Type {{ to insert a variable...</p>",
    onUpdate: ({ editor }) => {
      const text = editor.getText();
      const lastTwoChars = text.slice(-2);

      if (lastTwoChars === "{{") {
        const { from } = editor.state.selection;
        const coords = editor.view.coordsAtPos(from);
        setPopoverPosition({ x: coords.left, y: coords.bottom - 30 });
      }
    },
  });

  const handleVariableInsert = (variable: string, fallback?: string) => {
    if (!editor) return;

    const variableWithFallback = fallback ? `${variable} | ${fallback}` : variable;
    editor.commands.insertContent(variableWithFallback);
    setPopoverPosition(null);
  };

  if (!editor) {
    return <div>Loading Editor...</div>;
  }

  return (
    <div className={styles.editorContainer}>
      {/* Toolbar */}
      <div className={styles.toolbar}>
        <button onClick={() => editor.chain().focus().toggleBold().run()}><b>B</b></button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()}><i>I</i></button>
        <button onClick={() => editor.chain().focus().toggleUnderline().run()}><u>U</u></button>
        <button onClick={() => editor.chain().focus().toggleStrike().run()}><s>S</s></button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>H1</button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>H3</button>
        <button onClick={() => editor.chain().focus().toggleBlockquote().run()}>❝ Blockquote</button>
        <button onClick={() => editor.chain().focus().toggleCodeBlock().run()}>⌨ Code</button>
        <button onClick={() => editor.chain().focus().toggleBulletList().run()}>• Bullet List</button>
        <button onClick={() => editor.chain().focus().toggleOrderedList().run()}>1. Numbered List</button>
        <button onClick={() => editor.chain().focus().setTextAlign("left").run()}>⬅ Left</button>
        <button onClick={() => editor.chain().focus().setTextAlign("center").run()}>↔ Center</button>
        <button onClick={() => editor.chain().focus().setTextAlign("right").run()}>➡ Right</button>
        <button onClick={() => editor.chain().focus().setTextAlign("justify").run()}>🔳 Justify</button>
        <button onClick={() => editor.chain().focus().undo().run()}>↩ Undo</button>
        <button onClick={() => editor.chain().focus().redo().run()}>↪ Redo</button>
      </div>

      {/* Editor Content */}
      <EditorContent editor={editor} />

      {/* Variable Popover */}
      {popoverPosition && (
        <VariablePopover
          onSelect={handleVariableInsert}
          position={popoverPosition}
          onClose={() => setPopoverPosition(null)}
        />
      )}
    </div>
  );
};

export default Editor;