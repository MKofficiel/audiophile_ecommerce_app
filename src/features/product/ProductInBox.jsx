const ProductInBox = ({ includes }) => {
  return (
    <div className="max-w-[549px] max-lg:justify-between md:flex lg:flex-col">
      <h2 className="mb-6 text-[24px] font-bold tracking-[0.86px] uppercase">
        in the box
      </h2>

      <ul className="space-y-2">
        {includes.map(({ quantity, item }, i) => (
          <li key={i} className="flex gap-6">
            <span className="text-primary-500 font-bold">{quantity}x</span>
            <span className="text-black/50">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductInBox;
