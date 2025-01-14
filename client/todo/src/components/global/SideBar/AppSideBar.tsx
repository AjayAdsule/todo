import { Eye, Home } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavLink } from "react-router-dom";
import TasklystLogo from "../TaskListLogo";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/todo/home",
    icon: Home,
  },
  {
    title: "Overview",
    url: "/todo/overview",
    icon: Eye,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="shadow-xl">
      <SidebarHeader>
        <TasklystLogo height="40" width="140" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>Footer</SidebarFooter>
    </Sidebar>
  );
}
