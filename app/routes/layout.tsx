import Footer from "src/components/common/Footer";
import Nav from "src/components/common/Nav";
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
