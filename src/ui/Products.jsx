import useImageResponsive from "../hooks/useResponsive";
import Button from "./Button";

const Products = () => {
  const { device } = useImageResponsive();
  //
  const imageSrc = {
    mobile: "/assets/home/mobile/image-speaker-zx9.png",
    tablet: "/assets/home/tablet/image-speaker-zx9.png",
    desktop: "/assets/home/desktop/image-speaker-zx9.png",
  }[device];
  // C:\Users\DELL\Desktop\audiophile_ecommerce_app\public\assets\home\desktop\pattern-circles.svg
  return (
    <section className="px-6 md:px-10">
      <div className="container-custom">
        <div className="bg-primary-500 overflow-hidden">
          <div className="relative flex flex-col items-center gap-8 rounded-lg border px-6 py-[55px] pb-16 md:pt-[52px] md:pb-16 lg:mt-[-100px] lg:translate-y-[100px] lg:flex-row lg:items-start lg:gap-[138px] lg:pt-24 lg:pr-[95px] lg:pl-[117px]">
            <div className="relative z-10">
              <img
                src={imageSrc}
                className="object-fit h-[207px] w-[172px] md:h-[237px] md:w-[197px] lg:h-[493px] lg:w-[410px]"
              />
            </div>
            <div className="relative z-10 max-lg:text-center">
              <h1 className="heading-primary mb-6 text-white">
                <span className="block">ZX9</span>{" "}
                <span className="block">SPEAKER</span>
              </h1>
              <p className="mb-6 text-white/75 md:mb-10 md:max-w-[349px]">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Button variant="secondary">see product</Button>
            </div>

            <div className="absolute max-md:-top-30 md:-top-25 md:-right-64 lg:top-0 lg:left-[-170px]">
              <img
                src="/assets/home/desktop/pattern-circles.svg"
                className="object-cover max-md:size-[558px] md:size-[944px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
