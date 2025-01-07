// import Image from "next/image";
// import styles from "./page.module.css";
import Footer from "@/common/ui/footer";
import Navbar from "@/common/ui/navbar";
import About from "@/features/about";
import Featured from "@/features/featured";
import FeaturedPlugins from "@/features/featured/components/featuredPlugins";

export default function Home() {
  return (
    <>
      <Navbar />
      <Featured />
      <FeaturedPlugins />
      <About />
      <Footer />
    </>
  );
}
