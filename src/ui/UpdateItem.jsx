import clsx from "clsx";

const UpdateItem = ({ id }) => {
  return (
    <div
      className={clsx(
        "flex min-w-[120px] items-center gap-5 bg-neutral-200 px-[15px]",
      )}
    >
      <button className="flex-1 cursor-pointer">&#45;</button>
      <span className="block flex-1">1</span>
      <button className="flex-1 cursor-pointer">&#43;</button>
    </div>
  );
};

export default UpdateItem;
