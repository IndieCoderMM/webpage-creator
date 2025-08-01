import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  SELECTION_CHANGE_COMMAND,
} from "lexical";
import { useEffect, useState } from "react";

const ToolbarPlugin = () => {
  const [editor] = useLexicalComposerContext();
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  useEffect(() => {
    return editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      () => {
        editor.getEditorState().read(() => {
          const selection = $getSelection();
          if ($isRangeSelection(selection)) {
            setIsBold(selection.hasFormat("bold"));
            setIsItalic(selection.hasFormat("italic"));
            setIsUnderline(selection.hasFormat("underline"));
          }
        });
        return false;
      },
      1,
    );
  }, [editor]);

  const format = (type: "bold" | "italic" | "underline") => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, type);
  };

  const baseBtn =
    "flex-1 px-1 py-1 text-sm font-medium hover:bg-gray-200 w-8 h-8 transition";
  const active = "bg-gray-300 text-black";
  const inactive = "bg-white text-gray-700";

  return (
    <div className="mb-2 flex w-fit items-center overflow-hidden rounded border border-gray-500">
      <button
        onClick={() => format("bold")}
        className={`${baseBtn} ${isBold ? active : inactive}`}
      >
        B
      </button>
      <div className="mx-1 h-6 w-px bg-gray-900" />
      <button
        onClick={() => format("italic")}
        className={`${baseBtn} ${isItalic ? active : inactive}`}
      >
        I
      </button>
      <div className="mx-1 h-6 w-px bg-gray-900" />
      <button
        onClick={() => format("underline")}
        className={`${baseBtn} ${isUnderline ? active : inactive}`}
      >
        U
      </button>
    </div>
  );
};

export default ToolbarPlugin;
