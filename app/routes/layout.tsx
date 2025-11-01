import { Outlet } from "react-router";
import Footer from "src/components/common/footer";
import Header from "src/components/common/header";
import FetchCategories from "src/components/common/store/fetch-categories";
import FetchJobs from "src/components/common/store/fetch-jobs";

export default function Layout() {
  return (
    <>
      {/* store categories */}
      <FetchCategories />
      {/* store jobs */}
      <FetchJobs />

      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
