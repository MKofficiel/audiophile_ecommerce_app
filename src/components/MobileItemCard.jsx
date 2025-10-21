import { Link } from "react-router";

const MobileItemCard = ({ img, label, path }) => {
  return (
    <div className=' relative min-h-[165px] p-[22px] flex justify-center bg-neutral-200 rounded-[8px]'>
      <img
        src={img}
        className='w-[103px] absolute top-0 -translate-y-[42%]  left-1/2 -translate-x-1/2  h-[104px] object-cover'
      />

      <div className='flex-1 flex justify-center  items-end'>
        <div className='flex flex-col items-center'>
          <h2 className='text-[15px] mb-[17px]  uppercase tracking-[1.07px] font-bold'>
            {label}
          </h2>
          <Link to={path} className='flex items-center gap-[13.2px]'>
            <span className='text-neutral-800/50 uppercase tracking-[1px'>
              Shop
            </span>
            <img
              src='/assets/shared/desktop/icon-arrow-right.svg'
              alt='Arrow Right'
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileItemCard;
