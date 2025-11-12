import { ProductsItem } from "../../constants";
import ProductShowCase from "../../ui/ProductShowCase";
import ProductHeader from "./ProductHeader";

import Products from "./Products";
import { useParams } from "react-router";

const ProductCategory = () => {
  const params = useParams();
  const category = params.type;

  const items = ProductsItem.filter((p) => p.category === category);

  return (
    <>
      <ProductHeader title={category} />

      <Products product={items} />

      <ProductShowCase />
    </>
  );
};

export default ProductCategory;
