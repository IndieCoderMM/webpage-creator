import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import LoadEditorStatePlugin from "./plugins/load-editor-state";
import ToolbarPlugin from "./plugins/toolbar";

type ParagraphEditorProps = {
  onChange?: (json: any) => void;
  initialJson?: any;
};

const ParagraphEditor = ({ onChange, initialJson }: ParagraphEditorProps) => {
  const initialConfig = {
    namespace: "MinimalEditor",
    onError(error: Error) {
      console.error("Lexical error:", error);
    },
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <ToolbarPlugin />
      <RichTextPlugin
        contentEditable={
          <ContentEditable className="rounded-md border border-gray-100 bg-gray-50 p-2" />
        }
        ErrorBoundary={() => <div className="">An error occurred</div>}
      />
      {onChange && (
        <OnChangePlugin
          onChange={(editorState) => {
            const json = editorState.toJSON();
            onChange(json);
          }}
        />
      )}
      <LoadEditorStatePlugin jsonString={initialJson} />
    </LexicalComposer>
  );
};

export default ParagraphEditor;
