import ProductItem from "./ProductItem";

const Products = ({ product }) => {
  return (
    <section className="px-6 pt-16 md:pt-[120px]">
      <div className="container-custom space-y-[120px]">
        {product.map((item, i) => (
          <ProductItem key={item.id} index={i} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Products;
