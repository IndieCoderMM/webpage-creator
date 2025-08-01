import React from "react";
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
            className={`p-2 w-full bg-neutral-300 text-black rounded hover:bg-neutral-600 hover:text-white ${
              activeTool === "text" ? "bg-sky-300 text-black" : ""
            }`}
          >
            Texts
          </button>
        </li>
        <li className="">
          <button
            type="button"
            onClick={() => setActiveTool("video")}
            className={`p-2 w-full bg-neutral-300 text-black rounded hover:bg-neutral-600 hover:text-white ${
              activeTool === "video" ? "bg-sky-300 text-black" : ""
            }`}
          >
            Videos
          </button>
        </li>
        <li className="">
          <button
            type="button"
            onClick={() => setActiveTool("playlist")}
            className={`p-2 w-full bg-neutral-300 text-black rounded hover:bg-neutral-600 hover:text-white ${
              activeTool === "playlist" ? "bg-sky-300 text-black" : ""
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
