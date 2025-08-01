import { useState } from "react";
import { usePageStore } from "~/lib/page.store";
import ParagraphEditor from "../text-editors/paragraph-editor";
import TextBlockRender from "./text-block-render";

type TextBlockType = {
  block: TextBlock;
};

const TextBlock = ({ block }: TextBlockType) => {
  const [isEditing, setIsEditing] = useState(false);
  const updateBlock = usePageStore((state) => state.updateBlock);

  const handleContentChange = (content: string) => {
    updateBlock(block.id, { ...block, content });
  };

  return (
    <div className="mb-4 rounded border border-gray-200 bg-white p-4 shadow-sm">
      {isEditing ? (
        <button
          onClick={() => setIsEditing(false)}
          className="mb-2 text-sm text-blue-500"
        >
          Save
        </button>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="mb-2 text-sm text-blue-500"
        >
          Edit
        </button>
      )}
      {isEditing ? (
        <ParagraphEditor
          onChange={(json) => {
            handleContentChange(JSON.stringify(json));
          }}
          initialJson={block.content ? JSON.parse(block.content) : undefined}
        />
      ) : (
        <div className="text-gray-700">
          {block.content ? (
            <TextBlockRender block={block} />
          ) : (
            <p className="text-gray-500">No content available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TextBlock;
