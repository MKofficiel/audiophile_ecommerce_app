import React from "react";
import { MOBILE_ITEM_CARDS } from "../constants";
import MobileItemCard from "../components/MobileItemCard";

const ProductShowCase = () => {
  return (
    <section className="border px-6 pt-[92px] pb-[120px] md:px-10 md:pt-[148px] md:pb-24 lg:pt-[200px] lg:pb-[168px]">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-y-[68px] md:grid-cols-3 md:gap-x-[30px]">
          {MOBILE_ITEM_CARDS.map(({ img, label, path }) => (
            <MobileItemCard key={label} img={img} label={label} path={path} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowCase;
