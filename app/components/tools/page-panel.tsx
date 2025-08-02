import { useSortedBlocks } from "~/hooks/use-sorted-blocks";
import SortableContainer from "../blocks/sortable-container";
import SortableItem from "../blocks/sortable-item";

const PagePanel = () => {
  const { blocks, handleSort } = useSortedBlocks();

  const ids = blocks.map((block) => block.id);

  if (blocks.length === 0) {
    return (
      <div className="text-gray-500">
        <p>Empty Page!</p>
        <p className="mt-2">Use the sidebar to add new blocks.</p>
      </div>
    );
  }

  return (
    <SortableContainer items={ids} handleSort={handleSort}>
      <div className="flex w-full flex-col gap-2 p-2">
        {blocks.map((block) => (
          <SortableItem key={block.id} id={block.id}>
            <div
              key={block.id}
              className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-2 py-2"
            >
              <div className="text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                </svg>
              </div>
              <h3 className="font-medium capitalize">{block.type}</h3>
            </div>
          </SortableItem>
        ))}
      </div>
    </SortableContainer>
  );
};

export default PagePanel;
