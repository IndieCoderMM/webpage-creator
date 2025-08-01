import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect } from "react";

type LoadEditorStatePluginProps = {
  jsonString: string | null;
};

const LoadEditorStatePlugin = ({ jsonString }: LoadEditorStatePluginProps) => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (!jsonString) return;

    try {
      const parsedState = JSON.parse(jsonString);

      editor.update(() => {
        const editorState = editor.parseEditorState(parsedState);
        editor.setEditorState(editorState);
      });
    } catch (err) {
      console.error("Failed to load editor state:", err);
    }
  }, [editor, jsonString]);

  return null;
};

export default LoadEditorStatePlugin;
