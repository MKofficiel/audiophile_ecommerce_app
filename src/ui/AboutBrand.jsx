import useImageResponsive from "../hooks/useResponsive";

const AboutBrand = () => {
  const { device } = useImageResponsive();
  const imageGuest = {
    mobile: "/assets/shared/mobile/image-best-gear.jpg",
    tablet: "/assets/shared/tablet/image-best-gear.jpg",
    desktop: "/assets/shared/desktop/image-best-gear.jpg",
  }[device];

  return (
    <section className="px-6 py-[120px] md:px-10">
      <div className="container-custom">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-[125px]">
          <div className="lg:order-2">
            <img src={imageGuest} alt="image guest" className="rounded-lg" />
          </div>

          <div>
            <h2 className="mb-8 text-[28px] font-bold tracking-[1px] uppercase max-lg:text-center md:text-[40px] md:leading-10 lg:leading-11 lg:tracking-[1.43px]">
              <span className="md:block">Bringing you the </span>
              <span className="text-primary-500">best</span>
              <span> audio gear</span>
            </h2>

            <p className="text-black/50 max-lg:mx-auto max-lg:text-center md:max-w-[537px] lg:max-w-[445px]">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrand;
