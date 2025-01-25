import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "./SideBar/AppSideBar";
import TaskModel from "./Task/TaskModel";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className=" w-full bg-[#fff]">
        <SidebarTrigger />
        <Outlet />
        <TaskModel />
      </main>
    </SidebarProvider>
  );
}
