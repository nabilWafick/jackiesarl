import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-[33vh] h-[12vh] right-[6.8px] flex items-center justify-between px-4 z-10 shadow-sm bg-slate-300 opacity-100"></nav>
  );
};

export const Sidebar: React.FC = () => {
  return (
    <aside
      className="fixed top-0 left-0 h-full w-[33vh] md:w-[20vh]' z-10 shadow-md bg-slate-500 opacity-100"
      onResize={(e) => {
        console.log(e);
      }}
    ></aside>
  );
};

export const MainContent: React.FC = () => {
  return (
    <main className="ml-[33vh] h-full pt-[14vh] overflow-auto flex justify-center items-center sidebar relative px-2.5 bg-lime-500">
      <p className="lg:block md:hidden sm:hidden xs:hidden text-[100px]">lg</p>
      <p className="lg:hidden md:block sm:hidden xs:hidden text-[100px]">md</p>
      <p className="lg:hidden md:hidden sm:block xs:hidden text-[100px]">sm</p>
      <p className="lg:hidden md:hidden sm:hidden xs:block text-[100px]">xs</p>
    </main>
  );
};

const DashTest: React.FC = () => {
  return (
    <div className="flex flex-row w-screen">
      <Sidebar />
      <div className="flex flex-col w-full flex-1'">
        <Navbar />
        <MainContent />
      </div>
    </div>
  );
};

export default DashTest;
