import { Divider } from "@chakra-ui/react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import HeroSection from "../components/Sections/HeroSection";

export default function Home() {
  return (
    <Layout>
      <Header />
      <HeroSection />
    </Layout>
  );
}
