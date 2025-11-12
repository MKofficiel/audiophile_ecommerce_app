const ProductFeature = ({ features }) => {
  console.log(features);
  const paragraphs = features.split("\n\n");

  console.log(paragraphs);
  return (
    <div>
      <h2 className="mb-6 text-[24px] font-bold uppercase">features</h2>
      <div className="space-y-4">
        {paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default ProductFeature;
