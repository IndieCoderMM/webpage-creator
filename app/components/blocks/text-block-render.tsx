import { $generateHtmlFromNodes } from "@lexical/html";
import { createEditor } from "lexical";

const renderEditorStateToHTML = (jsonString: string) => {
  const editor = createEditor({ namespace: "Viewer" });

  const editorState = editor.parseEditorState(jsonString);

  let html = "";
  editor.setEditorState(editorState);
  editor.update(() => {
    html = $generateHtmlFromNodes(editor, null);
  });

  return html;
};

const TextBlockRender = ({ block }: { block: TextBlock }) => {
  const htmlContent = block.content
    ? renderEditorStateToHTML(block.content)
    : "";

  return (
    <div className="relative mb-4 flex gap-1">
      <h2 className="rounded bg-gray-200 px-2 py-1 text-xs">
        {block.type.charAt(0).toUpperCase() + block.type.slice(1)}
      </h2>
      <div className="text-gray-700">
        {htmlContent ? (
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        ) : (
          <p className="text-gray-500">No content available</p>
        )}
      </div>
    </div>
  );
};

export default TextBlockRender;
