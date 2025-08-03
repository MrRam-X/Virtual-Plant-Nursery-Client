import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../header/Header';
import Footer from '../footer/Footer';

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* Use the Header component */}
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;