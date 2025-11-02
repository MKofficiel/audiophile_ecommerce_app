import { Link } from "react-router";

const MobileItemCard = ({ img, label, path }) => {
  return (
    <div className="relative flex min-h-[165px] justify-center rounded-lg bg-neutral-200 p-[22px]">
      <img
        src={img}
        className="absolute top-0 left-1/2 h-[104px] w-[103px] -translate-x-1/2 -translate-y-[42%] object-cover"
      />

      <div className="flex flex-1 items-end justify-center">
        <div className="flex flex-col items-center">
          <h2 className="mb-[17px] text-[15px] font-bold tracking-[1.07px] uppercase">
            {label}
          </h2>
          <Link to={path} className="flex items-center gap-[13.2px]">
            <span className="tracking-[1px text-neutral-800/50 uppercase">
              Shop
            </span>
            <img
              src="/assets/shared/desktop/icon-arrow-right.svg"
              alt="Arrow Right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileItemCard;
