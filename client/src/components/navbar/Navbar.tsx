import { useRef } from "react";
import Image from "../ui/Image";
import { NavLink } from "react-router-dom";
import LinkSkeleton from "../ui/LinkSkeleton";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import Overlay from "../ui/Overlay";
import { NavbarLinkProps } from "../../lib/models";
import useFetch from "../../hooks/useFetch";
import useHideScrollBar from "../../hooks/useHideScrollBar";

function Navbar() {
  const { isLoading, data: links } = useFetch<NavbarLinkProps[]>("navbar");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement | null>(null);

  const handleOpenMenu = () => setIsMenuOpen(true);
  const handleCloseMenu = () => setIsMenuOpen(false);

  useClickOutside(menuRef, handleCloseMenu);
  useHideScrollBar(isMenuOpen);

  return (
    <nav className=" fixed left-0 w-full h-20 flex items-center justify-between lg:px-20 md:px-10 px-5 bg-white shadow-md z-50">
      <NavLink to="/" className=" w-24 aspect-video">
        <Image src="/assets/logo.svg" />
      </NavLink>
      <div className=" lg:hidden">{isMenuOpen ? <Overlay /> : null}</div>
      <ul
        ref={menuRef}
        className={` ${
          isMenuOpen ? "right-0" : "right-[-100%]"
        } lg:w-fit lg:h-fit h-screen lg:flex-row lg:static absolute right-0 top-0 md:w-1/3 sm:w-1/2 w-3/4 flex flex-col lg:items-center items-start gap-5 lg:p-0 p-4 pt-0 bg-inherit lg:border-none border-l border-gray-500 transition-all duration-300`}
      >
        <li className=" w-full lg:hidden flex items-center justify-between h-20">
          <div className=" w-16 aspect-video">
            <Image src="/assets/logo.svg" />
          </div>
          <button className=" flex items-center justify-center text-3xl" onClick={handleCloseMenu}>
            <IoClose />
          </button>
        </li>
        {isLoading
          ? [...Array(7).keys()].map((index: number) => <LinkSkeleton key={index} />)
          : links?.map((link, index: number) => (
              <li key={index}>
                <NavLink
                  to={link?.path === "/products" ? link?.path + "/all" : link?.path}
                  className={` xs:text-base text-sm font-semibold`}
                  onClick={handleCloseMenu}
                >
                  {link.pathname}
                </NavLink>
              </li>
            ))}
        <li>
          <div className=" w-6 aspect-video">
            <img src="/assets/flag.svg" />
          </div>
        </li>
      </ul>
      <button
        className=" lg:hidden flex items-center justify-center cursor-pointer text-3xl"
        onClick={handleOpenMenu}
      >
        <CgMenuRight />
      </button>
    </nav>
  );
}

export default Navbar;
