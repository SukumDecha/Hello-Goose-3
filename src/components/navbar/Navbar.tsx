import { Link } from "react-router-dom";
import "./Navbar.css";
type Props = {
  setOpen: (b: boolean) => void;
  setLogin: (b: boolean) => void;
};

const Navbar = (props: Props) => {
  return (
    <nav className={`flex w-full items-center justify-between p-4 `}>
      <div className="left flex justify-between items-center gap-6">
        <button onClick={() => props.setOpen(true)} className="hover">
          <img src="/assets/navbars/hamburger.png" alt="Hamburger" width={50} />
        </button>
        <Link to="/favourites" className="hover">
          <img src="/assets/navbars/heart.png" alt="Heart" width={45} />
        </Link>
      </div>

      <Link to="/">
        <div className="flex hover">
          <img
            src="/assets/navbars/stuket.png"
            alt="Stuket"
            width={190}
            height={190}
          />
        </div>
      </Link>

      <div className="right flex justify-between items-center gap-6">
        <Link to="/cart" className="hover">
          <img src="/assets/navbars/cart.png" alt="Cart" width={60} />
        </Link>

        <button onClick={() => props.setLogin(true)} className="hover">
          <img
            className="mt-6 hover"
            src="/assets/navbars/icon-profile.png"
            alt="Profile"
            width={70}
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
