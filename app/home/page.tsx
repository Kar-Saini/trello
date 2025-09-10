import Banner from "@/components/site/BoardPage/banner";
import BoardCard from "@/components/site/BoardPage/board-card";
import BoardPageNavabar from "@/components/site/BoardPage/BoardPageNavabar";
import MainBoardPage from "@/components/site/BoardPage/MainBoardPage";
import HomeSidebar from "@/components/site/HomeSidebar";
import Navbar from "@/components/site/Landingpage/navbar";
import React from "react";

const BoardPage = () => {
  return (
    <div className="flex h-screen w-full">
      <HomeSidebar />
      <main className="flex flex-col flex-grow p-2">
        <BoardPageNavabar />
        <MainBoardPage />
      </main>
    </div>
  );
};

export default BoardPage;
