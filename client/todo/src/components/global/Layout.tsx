import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AppSidebar } from "./SideBar/AppSideBar";
import TaskModel from "./Task/TaskModel";

export default function Layout() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signIn");
    }
  }, []);

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
