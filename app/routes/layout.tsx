import { Outlet } from "react-router";
import Footer from "src/components/common/Footer";
import Header from "src/components/common/header";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
