import { Outlet } from "react-router";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}
      Header
      <main className="flex-1">
        <Outlet />
      </main>
      Footer
      {/* <Footer /> */}
    </div>
  );
}
