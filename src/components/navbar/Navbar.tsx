import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav
      className={`flex w-full items-center justify-between p-4 `}
    >
      <div className="left flex justify-between items-center gap-4">
        <img src="/assets/navbars/cart.png" alt="Cart" width={80} />
        <img src="/assets/navbars/cart.png" alt="Cart" width={80} />
      </div>
      <div className="medium flex ">
        <img
          src="/assets/navbars/stuket.png"
          alt="Stuket"
          width={200}
          height={200}
        />
      </div>
      <div className="right flex justify-between gap-4">

        <Link to="/checkout">
          <img src="/assets/navbars/cart.png" alt="Cart" width={80} />
        </Link>
        
        <img src="/assets/navbars/cart.png" alt="Cart" width={80} />
      </div>
    </nav>

  );
};

export default Navbar;
