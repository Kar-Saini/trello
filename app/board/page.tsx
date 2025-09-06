import Banner from "@/components/site/BoardPage/banner";
import BoardSidebar from "@/components/site/BoardPage/BoardSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const BoardPage = () => {
  return (
    <div className="flex size-full">
      <SidebarProvider>
        <BoardSidebar />
        <main className="p-2 size-full">
          <Banner />
        </main>
      </SidebarProvider>
    </div>
  );
};

export default BoardPage;
