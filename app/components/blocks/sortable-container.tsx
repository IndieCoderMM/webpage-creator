import {
  DndContext,
  DragOverlay,
  type DragEndEvent,
  type DragStartEvent,
  type UniqueIdentifier,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";
import PageBlock from "./page-block";
import SortableItem from "./sortable-item";

const SortableBlocks = ({
  blocks,
  handleSort,
  handleRemove,
}: {
  blocks: Block[];
  handleSort: (activeId: UniqueIdentifier, overId: UniqueIdentifier) => void;
  handleRemove: (id: string) => void;
}) => {
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id);
  };

  function handleDragEnd(event: DragEndEvent) {
    setActiveId(null);
    const { active, over } = event;
    if (!over) return;

    if (active.id !== over.id) {
      handleSort(active.id, over.id);
    }
  }

  const renderActiveItem = (active: UniqueIdentifier | null) => {
    if (!active) return null;
    const block = blocks.find((b) => b.id === active);
    if (!block) return null;
    return (
      <div className="flex w-full cursor-grabbing items-center gap-px rounded-md border border-gray-200 bg-gray-100">
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
        <PageBlock block={block} handleRemove={handleRemove} />
      </div>
    );
  };

  const ids = blocks.map((block) => block.id);

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <SortableContext items={ids} strategy={verticalListSortingStrategy}>
        <div className="flex w-full flex-col gap-2 p-2">
          {blocks.map((block) => (
            <SortableItem key={block.id} id={block.id}>
              <PageBlock block={block} handleRemove={handleRemove} />
            </SortableItem>
          ))}
        </div>
      </SortableContext>
      <DragOverlay>{renderActiveItem(activeId)}</DragOverlay>
    </DndContext>
  );
};

export default SortableBlocks;
