import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ProductShowCase from "./ProductShowCase";
import Products from "./Products";

const Home = () => {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <ProductShowCase />
      <Products />
    </main>
  );
};

export default Home;
