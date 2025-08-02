import { useSortedBlocks } from "~/hooks/use-sorted-blocks";
import { usePageStore } from "~/lib/page.store";
import SortableBlocks from "../blocks/sortable-container";

const PagePanel = () => {
  const { blocks, handleSort } = useSortedBlocks();
  const removeBlock = usePageStore((state) => state.removeBlock);

  const handleRemove = (id: string) => {
    removeBlock(id);
    console.log(`Block with id ${id} removed`);
  };

  if (blocks.length >= 0) {
    return (
      <div className="p-2">
        <div className="w-full rounded-md border border-dashed p-2 text-gray-400">
          <p className="">Use the sidebar to add new blocks.</p>
        </div>
      </div>
    );
  }

  return (
    <SortableBlocks
      blocks={blocks}
      handleSort={handleSort}
      handleRemove={handleRemove}
    />
  );
};

export default PagePanel;
