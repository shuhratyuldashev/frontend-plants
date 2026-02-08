import { Sidebar } from "@/widgets/sidebar/ui";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="container mx-auto h-screen flex">
      <Sidebar />
      <main className="flex-1 px-4">
        <Outlet />
      </main>
    </div>
  );
}
