import MobileItemCard from "../components/MobileItemCard";
import { MOBILE_ITEM_CARDS } from "../constants";

const MobileNavigation = () => {
  return (
    <div className="md grid h-full gap-[68px] pt-[84px] pb-[35px] max-md:grid-rows-3 md:grid-cols-3 md:gap-x-2.5 md:pb-[67px]">
      {MOBILE_ITEM_CARDS.map(({ img, label, path }) => (
        <MobileItemCard key={label} img={img} label={label} path={path} />
      ))}
    </div>
  );
};

export default MobileNavigation;
