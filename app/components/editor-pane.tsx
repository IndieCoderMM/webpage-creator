import { usePageStore } from "~/lib/page.store";
import TextBlock from "./blocks/text-block";

const EditorPane = () => {
  const content = usePageStore((state) => state.content);

  return (
    <div className="w-full p-4">
      {content.map((block) => (
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
