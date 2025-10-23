import Footer from "components/Footer";
import Nav from "components/Nav";

export default function Layout({ children }: any) {
  return (
    <>
      <Nav />
      <div>{children}</div>
      <Footer />
    </>
  );
}
