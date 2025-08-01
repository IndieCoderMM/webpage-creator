import { useAppStore } from "~/lib/store";

const SideBar = () => {
  const activeTool = useAppStore((state) => state.activeTool);
  const setActiveTool = useAppStore((state) => state.setActiveTool);

  return (
    <div className="sidebar h-full bg-gray-100 px-4 py-2">
      <h2 className="text-lg font-bold">Sidebar</h2>
      <ul className="mt-2 flex flex-col space-y-2">
        <li className="">
          <button
            type="button"
            onClick={() => setActiveTool("text")}
            className={`w-full rounded p-2 text-black ${
              activeTool === "text"
                ? "bg-blue-100 text-blue-600"
                : "bg-neutral-300 hover:bg-neutral-600 hover:text-white"
            }`}
          >
            Texts
          </button>
        </li>
        <li className="">
          <button
            type="button"
            onClick={() => setActiveTool("video")}
            className={`w-full rounded p-2 text-black ${
              activeTool === "video"
                ? "bg-blue-100 text-blue-600"
                : "bg-neutral-300 hover:bg-neutral-600 hover:text-white"
            }`}
          >
            Videos
          </button>
        </li>
        <li className="">
          <button
            type="button"
            onClick={() => setActiveTool("playlist")}
            className={`w-full rounded p-2 text-black ${
              activeTool === "playlist"
                ? "bg-blue-100 text-blue-600"
                : "bg-neutral-300 hover:bg-neutral-600 hover:text-white"
            }`}
          >
            Playlists
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
