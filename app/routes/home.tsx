import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import  Header  from "../_components/Header";
import { Link } from "react-router-dom";
import Footer from "../_components/Footer";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jobs Portal" },
    { name: "description", content: "Find your dream job easily." },
  ];
}

export default function Home() {
  return (    
  <>
    <Header />
    <Footer />
  </>

      );
}
