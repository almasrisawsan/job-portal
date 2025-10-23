import Footer from "components/common/Footer";
import Nav from "components/common/Nav";
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
