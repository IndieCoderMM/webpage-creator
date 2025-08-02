import type { UniqueIdentifier } from "@dnd-kit/core";
import { useCallback, useMemo } from "react";
import { usePageStore } from "~/lib/page.store";

export const useSortedBlocks = () => {
  const blocks = usePageStore((state) => state.blocks);
  const setBlocks = usePageStore((state) => state.setBlocks);

  const sortedBlocks = useMemo(() => {
    return blocks.slice().sort((a, b) => {
      if (a.order === undefined || b.order === undefined) {
        return 0;
      }
      return a.order - b.order;
    });
  }, [blocks]);

  const handleSort = useCallback(
    (activeId: UniqueIdentifier, overId: UniqueIdentifier) => {
      if (!sortedBlocks.length) return;

      const blocks = [...sortedBlocks];
      const activeIndex = blocks.findIndex((block) => block.id === activeId);
      const overIndex = blocks.findIndex((block) => block.id === overId);
      if (activeIndex === -1 || overIndex === -1) return;

      const [movedBlock] = blocks.splice(activeIndex, 1);
      blocks.splice(overIndex, 0, movedBlock);
      // Update the order of the blocks after sorting
      for (let i = overIndex; i < blocks.length; i++) {
        blocks[i].order = i;
      }
      setBlocks(blocks);
    },
    [sortedBlocks, setBlocks],
  );

  return {
    blocks: sortedBlocks,
    handleSort,
  };
};
