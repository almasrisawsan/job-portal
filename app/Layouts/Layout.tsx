import React from "react";
import Footer from "~/Layouts/Footer";
import Header from "~/Layouts/Header";


const Layout = ({ children }:any) => (
  <div className="flex flex-col min-h-screen ">
    <Header />
    <main className="flex-grow container mx-auto">{children}</main>
    <Footer />
  </div>
);

export default Layout;