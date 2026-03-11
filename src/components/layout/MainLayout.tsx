import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";
import Footer from "../footer/Footer";

const MainLayout: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="flex flex-col min-h-screen relative" ref={containerRef}>
      <Header containerRef={containerRef} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
