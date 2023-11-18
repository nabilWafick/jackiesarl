import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-[33vh] w-full h-[12vh] bg-gray-500 text-white flex items-center justify-between px-4 z-10"></nav>
  );
};

export const Sidebar: React.FC = () => {
  return (
    <aside
      className="fixed top-0 left-0 h-full w-[33vh] bg-slate-400 z-10"
      onResize={(e) => {
        console.log(e);
      }}
    ></aside>
  );
};

export const MainContent: React.FC = () => {
  return (
    <main className="ml-[33vh] mt-[12vh] h-[88vh] overflow-y-auto bg-lime-300 border-2 border-secondary flex justify-center items-center">
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
