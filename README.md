# Rich Text Editor with TipTap

This is a *React-based Rich Text Editor* built using *TipTap. The editor supports **custom variables, formatting options, and interactive features* like fallback values for variables.

![Editor Preview](https://github.com/Priyankanegi28/Text-Editor/blob/main/public/editor-main.png)


## 🚀 Features

- *Text Formatting*: Bold, Italic, Underline, Strikethrough
- *Headings*: H1, H2, H3 support
- *Block Elements*: Blockquotes, Code Blocks
- *Lists*: Bullet List, Ordered List
- *Text Alignment*: Left, Center, Right, Justify
- *Undo & Redo*: History support
- *Custom Variables*: Insert variables with {{ variable }} syntax
- *Variable Fallback Values*: Set fallback text for variables
- *Popover UI*: Suggests variable options when typing {{
- *Live Formatting Toolbar*: Apply styles dynamically

## 🛠 Tech Stack

- *React* 
- *TipTap* (Rich text editor)
- *TypeScript* (for type safety)
- *CSS Modules* (for styling)

## 📚 Installation

1. *Clone the repository*:
   sh
   git clone https://github.com/yourusername/tiptap-editor.git
   cd tiptap-editor
   

2. *Install dependencies*:
   sh
   npm install
   

3. *Start the development server*:
   sh
   npm run dev
   

## 📄 Project Structure


/src
  ├── /components
  │   ├── Editor.tsx          # Main editor component
  │   ├── VariablePopover.tsx # Popover for variable selection
  ├── /extensions
  │   ├── Variable.ts         # Custom TipTap extension for variables
  ├── /styles
  │   ├── editor.module.css   # Editor styling
  ├── /utils
  │   ├── variables.ts
  ├── App.tsx                 # Root component
  ├── main.tsx                # Entry point
  ├── index.html               # Base HTML file


## 🛠 Usage

### 📝 Basic Editing
- Start typing in the editor to enter content.
- Use the *toolbar buttons* to format text.

### 💠 Insert Variables
- Type {{ to open the *variable popover*.
- Select a variable to insert it into the editor.

### 🔄 Undo & Redo
- Click *↩ Undo* to revert the last change.
- Click *↪ Redo* to redo an undone change.

## 📀 Keyboard Shortcuts

| Action        | Shortcut |
|--------------|---------|
| *Bold*       | Ctrl + B |
| *Italic*     | Ctrl + I |
| *Underline*  | Ctrl + U |
| *Strikethrough* | Ctrl + Shift + S |
| *Heading 1*  | Ctrl + Alt + 1 |
| *Heading 2*  | Ctrl + Alt + 2 |
| *Heading 3*  | Ctrl + Alt + 3 |
| *Blockquote* | Ctrl + Shift + Q |
| *Code Block* | Ctrl + Shift + C |
| *Bullet List* | Ctrl + Shift + 8 |
| *Ordered List* | Ctrl + Shift + 7 |
| *Align Left*  | Ctrl + L |
| *Align Center* | Ctrl + E |
| *Align Right* | Ctrl + R |
| *Justify*     | Ctrl + J |
| *Undo*       | Ctrl + Z |
| *Redo*       | Ctrl + Y |

## 🛠 Customization

You can modify the *editor extensions* inside Editor.tsx.  
For example, to enable *custom colors*, install the [Color Extension](https://tiptap.dev/docs/extensions/color):

sh
npm install @tiptap/extension-color


Then, import and add it to the editor extensions:

tsx
import Color from "@tiptap/extension-color";

const editor = useEditor({
  extensions: [
    StarterKit,
    Color.configure({ types: ["textStyle"] }), 
  ],
});


## 🤝 Contributing

1. Fork the repository
2. Create a new branch (git checkout -b feature-branch)
3. Commit your changes (git commit -m "Add new feature")
4. Push to the branch (git push origin feature-branch)
5. Open a *Pull Request*

## 🐝 License

---

🔗 *Made with ❤ using TipTap & React*
