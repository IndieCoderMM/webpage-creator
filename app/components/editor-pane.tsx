import { useSortedBlocks } from "~/hooks/use-sorted-blocks";
import TextBlock from "./blocks/text-block";

const EditorPane = () => {
  const { blocks } = useSortedBlocks();

  if (blocks.length === 0) {
    return (
      <div className="text-gray-500">
        <p>Empty Page!</p>
        <p className="mt-2">Use the sidebar to add new blocks.</p>
      </div>
    );
  }

  return (
    <div className="w-full p-4">
      {blocks.map((block) => (
        <div key={block.id}>
          {["heading", "subheading", "paragraph"].includes(block.type) ? (
            <TextBlock block={block as TextBlock} />
          ) : block.type === "video" ? (
            <div className="w-full p-4">
              {block.videoUrl ? (
                <video controls>
                  <source src={block.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <p className="text-gray-500">Invalid Url</p>
              )}
            </div>
          ) : block.type === "playlist" ? (
            <div>
              <h3>Playlist Block</h3>
              <p>Playlist ID: {block.playlistId}</p>
            </div>
          ) : (
            <p>Unknown Block Type</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default EditorPane;
