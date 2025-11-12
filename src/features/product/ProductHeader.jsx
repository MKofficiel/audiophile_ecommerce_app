const ProductHeader = ({ title }) => {
  return (
    <section className="bg-neutral-900 text-white">
      <div className="container-custom">
        <h1 className="py-8 text-center text-[28px] font-bold tracking-[2px] uppercase md:pt-[105px] md:pb-[97px] md:text-[40px] md:leading-11 md:tracking-[1.43px]">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default ProductHeader;
