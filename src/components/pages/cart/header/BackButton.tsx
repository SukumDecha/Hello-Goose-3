import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link to={"/category"}>
      <div className="flex items-center justify-center text-2xl border-4 border-white rounded-xl px-3 py-1 hover-small">
        <svg
          className="mr-3 fill-white"
          height="22"
          width="20"
          viewBox="0 0 448 512"
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
        <span>Continue Shopping</span>
      </div>
    </Link>
  );
};

export default BackButton;
