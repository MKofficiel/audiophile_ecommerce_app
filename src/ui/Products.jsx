import useImageResponsive from "../hooks/useResponsive";
import Button from "./Button";

const Products = () => {
  const { device } = useImageResponsive();
  //
  const imageZx9 = {
    mobile: "/assets/home/mobile/image-speaker-zx9.png",
    tablet: "/assets/home/tablet/image-speaker-zx9.png",
    desktop: "/assets/home/desktop/image-speaker-zx9.png",
  }[device];

  const imageZx7 = {
    mobile: "/assets/home/mobile/image-speaker-zx7.jpg",
    tablet: "/assets/home/tablet/image-speaker-zx7.jpg",
    desktop: "/assets/home/desktop/image-speaker-zx7.jpg",
  }[device];

  const imageYx1 = {
    mobile: "/assets/home/mobile/image-earphones-yx1.jpg",
    tablet: "/assets/home/tablet/image-earphones-yx1.jpg",
    desktop: "/assets/home/desktop/image-earphones-yx1.jpg",
  }[device];
  return (
    <section className="px-6 md:px-10">
      <div className="container-custom space-y-6 md:space-y-8">
        {/* Zx9 speaker */}
        <div className="bg-primary-500 overflow-hidden rounded-lg">
          <div className="relative flex flex-col items-center gap-8 px-6 py-[55px] pb-16 md:pt-[52px] md:pb-16 lg:mt-[-100px] lg:translate-y-[100px] lg:flex-row lg:items-start lg:gap-[138px] lg:pt-24 lg:pr-[95px] lg:pl-[117px]">
            <div className="relative z-10 flex-1">
              <img
                src={imageZx9}
                alt="speaker zx9 image"
                className="object-fit h-[207px] w-[172px] md:h-[237px] md:w-[197px] lg:h-[493px] lg:w-[410px]"
              />
            </div>
            <div className="relative z-10 flex-1 max-lg:text-center">
              <h1 className="heading-primary mb-6 text-white">
                <span className="block">ZX9</span>{" "}
                <span className="block">SPEAKER</span>
              </h1>
              <p className="mb-6 text-white/75 md:mb-10 md:max-w-[349px]">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Button variant="secondary" to="">
                see product
              </Button>
            </div>

            <div className="absolute max-md:-top-30 md:-top-25 md:-right-64 lg:top-0 lg:left-[-170px]">
              <img
                src="/assets/home/desktop/pattern-circles.svg"
                className="object-cover max-md:size-[558px] md:size-[944px]"
              />
            </div>
          </div>
        </div>
        {/* ZX7 SPEAKER */}
        <div className="relative flex h-80 items-center">
          <div className="relative z-10 pl-6">
            <h2 className="heading-quaternary mb-8">ZX7 SPEAKER</h2>

            <Button variant="tertiary">see product</Button>
          </div>

          <img src={imageZx7} className="absolute" />
        </div>

        {/* YX1 EARPHONE  */}

        <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-[11px] lg:gap-x-[30px]">
          <img src={imageYx1} className="rounded-lg object-cover md:h-80" />

          <div className="flex items-center rounded-lg bg-neutral-200 py-[41px] pl-6 lg:pl-[95px]">
            <div>
              <h2 className="heading-quaternary mb-8">YX1 EARPHONES</h2>

              <Button variant="tertiary">see product</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
