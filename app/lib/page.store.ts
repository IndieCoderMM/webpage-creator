import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface PageInterface {
  title: string;
  content: Block[]; // represent page nodes
  setTitle: (title: string) => void;
  addBlock: (block: Omit<Block, "order">) => void;
  removeBlock: (id: string) => void;
  updateBlock: (id: string, updatedBlock: Block) => void;
}

export const usePageStore = create<PageInterface>()(
  persist(
    (set) => ({
      title: "",
      content: [],
      setTitle: (title) => set({ title }),
      addBlock: (block) =>
        set((state) => ({
          content: [
            ...state.content,
            { ...block, order: state.content.length } as Block,
          ],
        })),
      removeBlock: (id) =>
        set((state) => ({
          content: state.content.filter((block) => block.id !== id),
        })),
      updateBlock: (id, updatedBlock) =>
        set((state) => ({
          content: state.content.map((block) =>
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
