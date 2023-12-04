import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav
      className={`flex w-full items-center justify-between p-4 `}
    >
      <div className="left flex justify-between items-center gap-4">
        <img src="/assets/navbars/cart.png" alt="Cart" width={80} />
        <img src="/assets/navbars/heart.png" alt="Heart" width={60} />
      </div>
      <div className="medium flex">
        <img
          src="/assets/navbars/stuket.png"
          alt="Stuket"
          width={190}
          height={190}
        />
      </div>
      <div className="right flex justify-between gap-4">
        <Link to="/checkout">
          <img src="/assets/navbars/cart.png" alt="Cart" width={80} />
        </Link>
        
        <img src="/assets/navbars/icon-profile.png" alt="Profile" width={90} />
      </div>
    </nav>

  );
};

export default Navbar;
