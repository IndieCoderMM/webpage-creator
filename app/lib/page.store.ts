import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface PageInterface {
  title: string;
  blocks: Block[]; // represent page nodes
  setTitle: (title: string) => void;
  setBlocks: (blocks: Block[]) => void;
  addBlock: (block: Omit<Block, "order">) => void;
  removeBlock: (id: string) => void;
  updateBlock: (id: string, updatedBlock: Block) => void;
}

export const usePageStore = create<PageInterface>()(
  persist(
    (set) => ({
      title: "",
      blocks: [],
      setTitle: (title) => set({ title }),
      setBlocks: (blocks) => set({ blocks }),
      addBlock: (block) =>
        set((state) => ({
          blocks: [
            ...state.blocks,
            { ...block, order: state.blocks.length } as Block,
          ],
        })),
      removeBlock: (id) =>
        set((state) => ({
          blocks: state.blocks.filter((block) => block.id !== id),
        })),
      updateBlock: (id, updatedBlock) =>
        set((state) => ({
          blocks: state.blocks.map((block) =>
            block.id === id ? { ...block, ...updatedBlock } : block,
          ),
        })),
    }),
    {
      name: "page-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
