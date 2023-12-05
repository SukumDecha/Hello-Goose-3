import { Link } from "react-router-dom";

type Props = {
  setOpen: (b: boolean) => void;
};

const Navbar = (props: Props) => {
  return (
    <nav className={`flex w-full items-center justify-between p-4 `}>
      <div className="left flex justify-between items-center gap-6">
        <button onClick={() => props.setOpen(true)}>
          <img src="/assets/navbars/cart.png" alt="Cart" width={80} />
        </button>
        <img src="/assets/navbars/heart.png" alt="Heart" width={45} />
      </div>

      <Link to="/">
        <div className="medium flex">
          <img
            src="/assets/navbars/stuket.png"
            alt="Stuket"
            width={190}
            height={190}
          />
        </div>
      </Link>

      <div className="right flex justify-between items-center gap-6">
        <Link to="/checkout">
          <img src="/assets/navbars/cart.png" alt="Cart" width={60} />
        </Link>

        <img
          className="mt-6"
          src="/assets/navbars/icon-profile.png"
          alt="Profile"
          width={70}
        />
      </div>
    </nav>
  );
};

export default Navbar;
