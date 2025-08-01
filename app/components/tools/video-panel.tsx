import { usePageStore } from "~/lib/page.store";
import { videos } from "~/lib/utils";

const VideoPanel = () => {
  const addBlock = usePageStore((state) => state.addBlock);
  const handleAddBlock = (videoUrl: string) => {
    const newBlock = {
      id: crypto.randomUUID(),
      type: "video" as const,
      videoUrl,
    };

    addBlock(newBlock);
  };

  return (
    <div className="flex w-full flex-col">
      <div className="mb-4 w-full px-2">
        <input
          type="text"
          placeholder="Search videos..."
          className="w-full rounded border border-gray-300 p-2"
        />
      </div>
      <div className="flex flex-col items-center space-y-2 px-2">
        {videos.map((video) => (
          <button
            className="w-full cursor-pointer"
            onClick={() => handleAddBlock(video.videoUrl)}
          >
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className="aspect-video h-auto w-full rounded-lg border border-gray-300 object-cover shadow-sm"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default VideoPanel;
