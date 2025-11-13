import ProductOtherItems from "./ProductOtherItems";

const ProductOthers = ({ others }) => {
  return (
    <section className="pt-[120px]">
      <h2 className="mb-10 text-center text-[24px] font-bold uppercase md:mb-14 md:text-[32px] md:leading-9 md:tracking-[1.14px]">
        you may also like
      </h2>
      <div className="grid grid-cols-1 gap-y-14 md:grid-cols-3 md:gap-x-3.5 lg:gap-x-[30px]">
        {others.map((other, i) => (
          <ProductOtherItems key={i} item={other} />
        ))}
      </div>
    </section>
  );
};

export default ProductOthers;
