import {
  BriefcaseBusiness,
  CalendarClock,
  CalendarFold,
  ChevronDown,
  Eye,
  GraduationCap,
  NotebookText,
  Zap,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
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
    title: "Overview",
    url: "/todo/overview",
    icon: Eye,
  },
  {
    title: "Today",
    url: "/todo/main/today",
    icon: Eye,
  },
  {
    title: "Tomorrow",
    url: "/todo/main/tomorrow",
    icon: CalendarFold,
  },
  {
    title: "Next 7 days",
    url: "/todo/main/next-sevenday",
    icon: CalendarClock,
  },
];

const listItems = [
  {
    title: "Work",
    url: "/todo/list/work",
    icon: <BriefcaseBusiness className="text-blue-400" />,
  },
  {
    title: "Workout",
    url: "/todo/list/workout",
    icon: <Zap className="text-red-400" />,
  },
  {
    title: "Learning",
    url: "/todo/list/learning",
    icon: <GraduationCap className="text-green-500" />,
  },
  {
    title: "Reading",
    url: "/todo/list/reading",
    icon: <NotebookText className="text-amber-500" />,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="shadow-xl">
      <SidebarHeader>
        <TasklystLogo height="60" width="150" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
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
        <Collapsible className="group/collapsible" defaultOpen>
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                List
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {listItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <NavLink to={item.url}>
                          {item.icon}
                          <span>{item.title}</span>
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
      <SidebarFooter>Footer</SidebarFooter>
    </Sidebar>
  );
}
