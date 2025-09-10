"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <SidebarProvider className="">{children}</SidebarProvider>;
};

export default Provider;
