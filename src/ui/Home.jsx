import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ProductShowCase from "./ProductShowCase";
import Products from "./Products";
import AboutBrand from "./AboutBrand";

const Home = () => {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <ProductShowCase />
      <Products />
      <AboutBrand />
    </main>
  );
};

export default Home;
