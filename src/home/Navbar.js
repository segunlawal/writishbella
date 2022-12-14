import "../App.css";
import { useState, useEffect } from "react";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export default function Example() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-14">
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 nav-items font-normal"
      >
        <NavLink
          reloadDocument
          to="/about"
          className={({ isActive }) =>
            isActive
              ? " flex items-center text-blue-400 font-bold"
              : "r-black hover:text-blue-400 flex items-center"
          }
        >
          ABOUT
        </NavLink>
        {/* <a href="/about">ABOUT</a> */}
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 nav-items font-normal"
      >
        <NavLink
          reloadDocument
          to="/services"
          className={({ isActive }) =>
            isActive
              ? " flex items-center text-blue-400 font-bold"
              : "r-black hover:text-blue-400 flex items-center"
          }
        >
          SERVICES
        </NavLink>
        {/* <a href="/services">SERVICES</a> */}
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 nav-items font-normal"
      >
        <NavLink
          reloadDocument
          to="/portfolio"
          className={({ isActive }) =>
            isActive
              ? " flex items-center text-blue-400 font-bold"
              : "r-black hover:text-blue-400 flex items-center"
          }
        >
          PORTFOLIO
        </NavLink>
        {/* <a href="/portfolio">PORTFOLIO</a> */}
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 nav-items font-normal"
      >
        {/* <NavLink
          reloadDocument
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? " flex items-center text-blue-400 font-bold"
              : "r-black hover:text-blue-400 flex items-center"
          }
        >
          CONTACT
        </NavLink> */}
        {/* <a href="/contact">CONTACT</a> */}
      </Typography>
    </ul>
  );
  const handleClickAway = () => {
    setOpenNav(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Navbar className="navbar max-w-none  py-2 px-4 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            variant="small"
            className="mr-4 flex cursor-pointer py-1.5 font-normal"
          >
            <span>
              <img
                className="logo"
                src={require("../assets/logo2.png")}
                alt="WB"
              />
            </span>
            <span className="logo-name font-bold text-3xl pt-2">
              WritishBella
            </span>
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <NavLink to="/contact">
            <Button color="blue" size="lg" className=" hidden xl:inline-block">
              <span className="contact-btn text-white">CONTACT ME</span>
            </Button>
          </NavLink>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent xl:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-7 w-7"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <a href="/contact">
            <Button color="blue" size="md" fullWidth className="mb-2">
              <span className="contact-btn text-white">CONTACT ME</span>
            </Button>
          </a>
        </MobileNav>
      </Navbar>
    </ClickAwayListener>
  );
}
