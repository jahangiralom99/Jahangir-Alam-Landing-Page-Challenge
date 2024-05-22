import { NavLink } from "react-router-dom";

const NavbarLink = () => {
  return (
    <>
      <li role="none" className="flex items-stretch">
        <NavLink to="/"
          role="menuitem"
          aria-haspopup="false"
          className="flex items-center py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none "
        >
          <span>Home</span>
        </NavLink>
      </li>
      <li role="none" className="flex items-stretch">
        <NavLink to="/"
          role="menuitem"
          aria-current="page"
          aria-haspopup="false"
          className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-600 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4"

        >
          <span>About Us</span>
        </NavLink>
      </li>
      <li role="none" className="flex items-stretch">
        <NavLink to="/"
          role="menuitem"
          aria-haspopup="false"
          className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4"
        
        >
          <span>Products</span>
        </NavLink>
      </li>
      <li role="none" className="flex items-stretch">
        <NavLink to="/"
          role="menuitem"
          aria-haspopup="false"
          className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4"
        >
          <span>Features</span>
        </NavLink>
      </li>
      <li role="none" className="flex">
        <NavLink to="/"
          role="menuitem"
          aria-haspopup="false"
          className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4"
        >
          <span>Reviews</span>
        </NavLink>
      </li>
      <li role="none" className="flex items-stretch">
        <NavLink to="/"
          role="menuitem"
          aria-haspopup="false"
          className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4"
        >
          <span>Contact Us</span>
        </NavLink>
      </li>
    </>
  );
};

export default NavbarLink;
