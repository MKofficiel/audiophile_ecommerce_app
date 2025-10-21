import MobileItemCard from "../components/MobileItemCard";
import { MOBILE_ITEM_CARDS } from "../constants";

const MobileNavigation = () => {
  return (
    <div className='h-full  grid max-md:grid-rows-3 md:grid-cols-3 md pt-[84px] pb-[35px] md:pb-[67px] gap-[68px] md:gap-x-[10px]'>
      {MOBILE_ITEM_CARDS.map(({ img, label, path }) => (
        <MobileItemCard key={label} img={img} label={label} path={path} />
      ))}
    </div>
  );
};

export default MobileNavigation;
