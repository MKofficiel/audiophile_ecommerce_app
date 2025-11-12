import { useParams } from "react-router";

import GoBack from "../../ui/GoBack";
import ProductItem from "./ProductItem";
import { ProductsItem } from "../../constants";
import ProductFeature from "./ProductFeature";
import ProductInBox from "./ProductInBox";
import ProductGalery from "./ProductGalery";
import ProductOthers from "./ProductOthers";

const ProductDetail = () => {
  const { slug } = useParams();

  console.log(slug);

  const product = ProductsItem.find((p) => p.slug === slug);

  console.log(product.gallery);

  // console.log(product);

  // console.log(slug);
  return (
    <section className="px-6 pt-4">
      <div className="container-custom">
        <GoBack />
        <ProductItem item={product} isCart={true} />

        <div className="grid w-full grid-cols-1 gap-y-[88px] py-[88px] md:gap-y-[120px] md:py-[120px] lg:grid-cols-2 lg:gap-x-[125px]">
          <ProductFeature features={product.features} />
          <ProductInBox includes={product.includes} />
        </div>
        <ProductGalery gallery={product.gallery} />

        <ProductOthers others={product.others} />
      </div>
    </section>
  );
};

export default ProductDetail;
