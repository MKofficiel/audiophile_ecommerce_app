import clsx from "clsx";
import Button from "../../ui/Button";
import UpdateItem from "../../ui/UpdateItem";
import { formatPrice } from "../../utils/helpers";

const CATEGORY_WORDS = ["headphones", "speakers", "earphones"];
function splitNameByCategory(name = "") {
  const regex = new RegExp(`\\b(${CATEGORY_WORDS.join("|")})\\b`, "i");

  const match = name.match(regex);

  if (!match) return [name.trim(), null];

  const category = match[1].toLowerCase();

  const title = name.slice(0, match.index).trim();

  return [title, category];
}

const ProductItem = ({ item, index = 0, isCart = "" }) => {
  const { image, slug, name, new: isNew, description, price } = item;

  const [title, category] = splitNameByCategory(name);

  return (
    <div
      className={clsx(
        "grid h-full grid-cols-1 gap-y-8 md:items-center md:gap-x-[69px] md:gap-y-[52px] lg:grid-cols-2 lg:gap-x-[124px]",
        isCart && "md:grid-cols-2",
      )}
    >
      <div
        className={clsx(
          "flex justify-center rounded-lg bg-neutral-200 py-[41px]",
          isCart && "py-[133px]",

          index % 2 === 0 ? "" : "lg:order-2",
        )}
      >
        <img
          src={image}
          className={clsx("h-[243px] object-cover")}
          alt={name}
        />
      </div>

      {/* TEXT BOX */}
      <div
        className={clsx("max-md:space-y-6", !isCart && "max-lg:text-center")}
      >
        {isNew && (
          <span className="text-primary-500 block text-sm tracking-[10px] uppercase md:mb-4">
            New product
          </span>
        )}
        <h2
          className={clsx(
            'md:tracking-[1.43px]" text-[28px] font-bold tracking-[1px] uppercase md:mb-8 md:text-[40px] md:leading-11',
          )}
        >
          <span className="block">{title}</span>
          <span className="block">{category}</span>
        </h2>

        <p className="text-neutral-900/50 md:mx-auto md:mb-6 md:max-w-[572px] lg:mb-10">
          {description}
        </p>

        {isCart && (
          <p className="mb-8 text-[18px] font-bold tracking-[1.29px]">
            {formatPrice(price)}
          </p>
        )}
        <div className={clsx("flex gap-4", !isCart && "max-lg:justify-center")}>
          {isCart && <UpdateItem />}
          <Button className="" to={slug}>
            {isCart ? "add to cart" : "see product"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
