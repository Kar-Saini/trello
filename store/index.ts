import { create } from "zustand";

export enum ActiveSideBar {
  Organization,
  Home,
}
const appStore = (set, get) => ({
  activeSidebarTab: ActiveSideBar.Home,
  setActiveSidebartab: (tab: ActiveSideBar) =>
    set((state) => ({ ...state, activeSidebarTab: tab })),
  isSideBarOpen: true,
  toogleSideBar: () =>
    set((state) => ({ ...state, isSideBarOpen: !state.isSideBarOpen })),
});

const useAppStore = create(appStore);

export default useAppStore;
