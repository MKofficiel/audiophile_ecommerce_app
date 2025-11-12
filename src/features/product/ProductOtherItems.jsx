import Button from "../../ui/Button";

const ProductOtherItems = ({ item: { slug, image, name } }) => {
  console.log(slug, "PP");
  return (
    <div className="border text-center">
      {/* <div className="flex justify-center rounded-lg bg-neutral-200 md:py-[62px]"> */}
      <div className="grid rounded-lg bg-neutral-200 md:grid-cols-3 md:py-[62px]">
        <img src={image} className="h-[199px] w-[200px] object-cover py-4" />
      </div>
      <h2 className="text-[24px] font-bold tracking-[1.71px] uppercase">
        {name}
      </h2>
      <Button to={`${slug}`}>SEE product</Button>
    </div>
  );
};

export default ProductOtherItems;
