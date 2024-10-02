import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

export default function Home() {
  return (
    <div className="bg-bg h-[100vh] w-[100vw] flex flex-row">
        <Sidebar />
        <Topbar />
      </div>
  );
}
