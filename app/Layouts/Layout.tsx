import React from "react";
import Footer from "~/Layouts/Footer";
import Header from "~/Layouts/Header";


const Layout = ({ children }:any) => (
  <div className="flex flex-col min-h-screen bg-[#F4F5F7]">
    <Header />
    <main className="flex-grow container mx-auto p-6">{children}</main>
    <Footer />
  </div>
);

export default Layout;