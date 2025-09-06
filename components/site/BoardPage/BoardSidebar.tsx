"use client";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { DoorOpen, LayoutDashboardIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const BoardSidebar = () => {
  const { open } = useSidebar();
  const router = useRouter();
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarHeader>
          <SidebarMenuButton asChild>
            <Link href={"/board"}>
              <span className="font-bold md:text-2xl text-lg tracking-wide">
                trello
              </span>
            </Link>
          </SidebarMenuButton>
        </SidebarHeader>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <div className="flex font-lg items-center ml-2">
                  <LayoutDashboardIcon />
                  <span className="font-semibold ml-2">Board</span>
                </div>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button className="w-full" variant={open ? "outline" : "ghost"}>
          <DoorOpen />
          {open && "Sign out"}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default BoardSidebar;
