import { create } from "zustand";

type ToolType = "text" | "video" | "playlist" | "page";

interface AppStore {
  activeTool: ToolType;
  setActiveTool: (tool: ToolType) => void;
}

export const useAppStore = create<AppStore>()((set) => ({
  activeTool: "page",
  setActiveTool: (tool) => set({ activeTool: tool }),
}));
