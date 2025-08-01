import { usePageStore } from "~/lib/page.store";
import { useAppStore } from "~/lib/store";
import PlaylistPanel from "./tools/playlist-panel";
import TextPanel from "./tools/text-panel";
import VideoPanel from "./tools/video-panel";

const Toolbar = () => {
  const activeTool = useAppStore((state) => state.activeTool);
  const title = usePageStore((state) => state.title);
  const setTitle = usePageStore((state) => state.setTitle);

  return (
    <div className="flex h-full flex-col border-r border-neutral-300">
      <div className="mb-2 border-b border-gray-200 px-4 py-2">
        <input
          type="text"
          className="w-full p-2"
          placeholder="Enter page title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      {activeTool === "text" ? (
        <TextPanel />
      ) : activeTool === "video" ? (
        <VideoPanel />
      ) : activeTool === "playlist" ? (
        <PlaylistPanel />
      ) : (
        <div className="flex h-full items-center justify-center">
          <p className="text-gray-500">Select a tool to get started</p>
        </div>
      )}
    </div>
  );
};

export default Toolbar;
