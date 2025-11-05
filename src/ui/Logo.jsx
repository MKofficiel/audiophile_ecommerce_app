import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/">
      <img
        src="/assets/shared/desktop/logo.svg"
        alt="Logo"
        height={25}
        width={143}
      />
    </Link>
  );
};

export default Logo;
