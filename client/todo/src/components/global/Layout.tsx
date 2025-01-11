import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "./SideBar/AppSideBar";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className=" w-full">
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
