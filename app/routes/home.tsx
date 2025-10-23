import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Header from "~/_components/header/Header";
import Footer from "~/_components/footer/Footer";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jobs Portal" },
    { name: "description", content: "Find your dream job easily." },
  ];
}

export default function Home() {
  return (    
    <>
        <Welcome />
    </>

      );
}
