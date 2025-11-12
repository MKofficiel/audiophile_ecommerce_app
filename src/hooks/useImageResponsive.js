import { useMediaQuery } from "react-responsive";

const useImageResponsive = () => {
  // const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  let device = "desktop";
  if (isTablet) device = "tablet";
  if (isMobile) device = "mobile";

  return { device };
};

export default useImageResponsive;
