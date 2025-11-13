import Button from "../../ui/Button";

const ProductOtherItems = ({ item: { image, name, slug } }) => {
  return (
    <div className="text-center">
      {/* <div className="flex justify-center rounded-lg bg-neutral-200 md:py-[62px]"> */}
      <div className="mb-8 flex h-[120px] items-center justify-center rounded-lg bg-neutral-200 md:mb-10 md:h-[318px]">
        <img
          src={image}
          className="h-[95px] w-[73px] object-cover md:h-[194px] md:w-[175px]"
        />
      </div>
      <h2 className="mb-8 text-[24px] font-bold tracking-[1.71px] uppercase">
        {name}
      </h2>
      <Button to={`${slug}`}>SEE product</Button>
    </div>
  );
};

export default ProductOtherItems;
