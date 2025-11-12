import ProductOtherItems from "./ProductOtherItems";

const ProductOthers = ({ others }) => {
  console.log(others, "ok");
  return (
    <section className="py-[120px]">
      <h2 className="mb-10 text-center text-[24px] font-bold uppercase md:mb-14 md:text-[32px] md:leading-9 md:tracking-[1.14px]">
        you may also like
      </h2>
      <div className="max-md:space-y-14 md:flex md:justify-between md:gap-[11px]">
        {/* <div className="max-md:space-y-14 md:grid md:grid-cols-3 md:items-center md:justify-center md:gap-[11px]"> */}
        {others.map((other, i) => (
          <ProductOtherItems key={i} item={other} />
        ))}
      </div>
    </section>
  );
};

export default ProductOthers;
