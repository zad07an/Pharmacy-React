import { Link, useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { CategoryLinkProps } from "../../lib/models";
import LinkSkeleton from "../ui/LinkSkeleton";

function ProductsNavbar() {
  const { isLoading, data: links } = useFetch<CategoryLinkProps[]>(
    "http://localhost:8080/product-categories"
  );
  const { pathname } = useLocation();

  return (
    <nav className=" w-full flex items-center justify-center">
      <ul className=" flex md:gap-5 gap-2 flex-wrap">
        {isLoading
          ? [...Array(5).keys()].map((index: number) => <LinkSkeleton key={index} />)
          : links?.map((link, index: number) => (
              <li key={index} className=" flex grow">
                <Link
                  to={`/products${link?.path}`}
                  className={` w-full flex items-center justify-center ${
                    (pathname.includes(link?.path) && link?.path.length > 1) ||
                    pathname === link?.path
                      ? "md:text-green-1 text-white border-green-1 bg-green-1"
                      : "text-black border-black"
                  } uppercase font-semibold md:border-none md:bg-transparent border-2 px-4 py-1 rounded-full`}
                >
                  {link?.pathname}
                </Link>
              </li>
            ))}
      </ul>
    </nav>
  );
}

export default ProductsNavbar;
