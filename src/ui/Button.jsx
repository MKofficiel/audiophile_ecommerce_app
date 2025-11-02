import { Link } from "react-router";

const Button = ({ children, variant = "primary", className, to }) => {
  const styleBase =
    " min-h-[48px] transition-all duration-200 px-[30px] py-[15px] uppercase ease-in-out text-[13px] font-bold tracking-[1px] ";

  const styleVariants = {
    primary:
      " bg-primary-500 text-white hover:bg-primary-300 active:bg-primary-700 ",
    secondary:
      " bg-black border border-black text-white hover:bg-black hover:text-white active:bg-neutral-800 ",
  };
  return (
    <Link
      className={`${styleBase} ${styleVariants[variant]} ${className}`}
      to={to}
    >
      {children}
    </Link>
  );
};

export default Button;
