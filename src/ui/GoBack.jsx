import { useNavigate } from "react-router";

const GoBack = () => {
  const navigate = useNavigate();

  return (
    <button
      className="mb-6 cursor-pointer font-medium text-black/50 lg:mb-14"
      onClick={() => navigate(-1)}
    >
      Go Back
    </button>
  );
};

export default GoBack;
