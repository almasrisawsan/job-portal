import Footer from "../Layouts/Footer";
import Nav from "../Layouts/Header";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
