"use client";

import { Button } from "@/components/ui/button";
import useAppStore, { ActiveSideBar } from "@/store";
import { ListCollapseIcon } from "lucide-react";

const HomeSidebar = () => {
  const {
    isSideBarOpen,
    toogleSideBar,
    activeSidebarTab,
    setActiveSidebartab,
  } = useAppStore();
  console.log(activeSidebarTab);
  return (
    <>
      {isSideBarOpen ? (
        <div className=" sm:w-[200px] h-full px-4 py-2 flex flex-col justify-between bg-gray-50">
          <div className="flex flex-col gap-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-extrabold">Trello</h1>
              <ListCollapseIcon
                className="cursor-pointer"
                onClick={toogleSideBar}
              />
            </div>
            <div className="w-full flex flex-col gap-y-1">
              <p
                onClick={() => setActiveSidebartab(ActiveSideBar.Home)}
                className={`${
                  activeSidebarTab === ActiveSideBar.Home
                    ? "bg-gray-200"
                    : "hover:bg-gray-100"
                } px-2 py-1 rounded-sm cursor-pointer `}
              >
                Home
              </p>
              <p
                onClick={() => setActiveSidebartab(ActiveSideBar.Organization)}
                className={`${
                  activeSidebarTab === ActiveSideBar.Organization
                    ? "bg-gray-200"
                    : "hover:bg-gray-100"
                } px-2 py-1 rounded-sm cursor-pointer `}
              >
                Organizations
              </p>
            </div>
          </div>
          <Button variant={"outline"} className="cursor-pointer">
            Signout
          </Button>
        </div>
      ) : (
        <div className="h-full px-4 py-5 bg-gray-50">
          <ListCollapseIcon
            className="cursor-pointer"
            onClick={toogleSideBar}
          />
        </div>
      )}
    </>
  );
};

export default HomeSidebar;
