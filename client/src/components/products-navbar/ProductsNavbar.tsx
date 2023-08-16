import { NavLink } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { CategoryLinkProps } from "../../lib/models";
import LinkSkeleton from "../ui/LinkSkeleton";

function ProductsNavbar() {
  const { isLoading, data: links } = useFetch<CategoryLinkProps[]>("product-categories");

  return (
    <nav className=" w-full flex items-center justify-center">
      <ul className=" flex md:gap-5 gap-2 flex-wrap">
        {isLoading
          ? [...Array(5).keys()].map((index: number) => <LinkSkeleton key={index} />)
          : links?.map((link, index: number) => (
              <li key={index} className=" flex grow">
                <NavLink
                  to={`/products${link?.path}`}
                  className={` w-full flex items-center justify-center  uppercase font-semibold md:border-none  border-2 px-4 py-1 rounded-full`}
                >
                  {link?.pathname}
                </NavLink>
              </li>
            ))}
      </ul>
    </nav>
  );
}

export default ProductsNavbar;
