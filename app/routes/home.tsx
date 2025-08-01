import EditorPane from "~/components/editor-pane";
import SideBar from "~/components/side-bar";
import Toolbar from "~/components/tool-bar";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="grid h-screen grid-cols-12 overflow-hidden">
      <div className="col-span-2">
        <SideBar />
      </div>
      <div className="col-span-2">
        <Toolbar />
      </div>
      <div className="col-span-8 overflow-y-auto p-4">
        <EditorPane />
      </div>
    </div>
  );
}
