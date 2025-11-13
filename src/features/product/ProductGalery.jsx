import React from "react";
import useImageResponsive from "../../hooks/useImageResponsive";

const ProductGalery = ({ gallery }) => {
  const { device } = useImageResponsive();

  const { first, second, third } = gallery;

  //   const firstSrc = first[device].replace("." / "");
  const firstSrc = first[device].replace(/^\.\//, "/");
  const secondSrc = second[device].replace(/^\.\//, "/");
  const thirdSrc = third[device].replace(/^\.\//, "/");

  console.log(firstSrc, secondSrc, thirdSrc);

  return (
    <div className="grid gap-y-5 md:grid-cols-[45fr_55fr] md:gap-x-[18px] lg:gap-x-[30px]">
      <div className="flex flex-col gap-5">
        <div className="">
          <img src={firstSrc} className="w-full rounded-lg object-cover" />
        </div>

        <div>
          <img src={secondSrc} className="w-full rounded-lg object-cover" />
        </div>
      </div>

      <div>
        <img src={thirdSrc} className="h-full rounded-lg" />
      </div>
    </div>
  );
};

export default ProductGalery;
