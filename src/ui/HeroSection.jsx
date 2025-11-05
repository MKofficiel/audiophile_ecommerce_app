import Button from "../ui/Button";
const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#121212] px-6 max-lg:-mt-30 max-md:-mt-20 md:px-10 lg:-mt-30">
      <div className="container-custom">
        <div className="hero-image min-h-[886px] max-md:min-h-[632px]" />
        <div className="absolute top-1/2 flex h-full w-full max-w-7xl -translate-y-1/2 items-center text-white max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:justify-center max-lg:text-center">
          <div className="max-md:mt-10 lg:mt-20">
            <p className="overline-text mb-4 md:mb-6">new product</p>
            <h1 className="heading-primary mb-6">
              <span className="md:block">XX99 MARK II </span>HEADPHONES
            </h1>
            <p className="mb-7 text-white/75 max-lg:mx-auto md:mb-10 md:max-w-[349px]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button
              variant="primary"
              className="cursor-pointer"
              to="/product/xx99-mark-ii-headphones"
            >
              See Product
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
