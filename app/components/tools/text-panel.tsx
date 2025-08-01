import { usePageStore } from "~/lib/page.store";

const TextPanel = () => {
  const addBlock = usePageStore((state) => state.addBlock);

  const handleAddBlock = (type: TextBlock["type"]) => {
    const newBlock = {
      id: crypto.randomUUID(),
      type,
      content: "",
    };

    addBlock(newBlock);
  };

  return (
    <div className="flex flex-col space-y-2 p-4 text-sm">
      <button
        type="button"
        className="rounded bg-gray-400 p-2 text-white hover:bg-blue-600"
        onClick={() => handleAddBlock("heading")}
      >
        Add Heading
      </button>
      <button
        type="button"
        className="rounded bg-gray-400 p-2 text-white hover:bg-green-600"
        onClick={() => handleAddBlock("subheading")}
      >
        Add Sub Heading
      </button>
      <button
        type="button"
        className="rounded bg-gray-400 p-2 text-white hover:bg-red-600"
        onClick={() => handleAddBlock("paragraph")}
      >
        Add Paragraph
      </button>
    </div>
  );
};

export default TextPanel;
