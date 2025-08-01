import { create } from "zustand";

type ToolType = "text" | "video" | "playlist";

interface AppStore {
  activeTool: ToolType;
  setActiveTool: (tool: ToolType) => void;
}

export const useAppStore = create<AppStore>()((set) => ({
  activeTool: "text",
  setActiveTool: (tool) => set({ activeTool: tool }),
}));
