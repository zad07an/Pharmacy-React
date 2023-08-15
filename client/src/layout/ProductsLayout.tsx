import { Outlet } from "react-router-dom";
import ProductsNavbar from "../components/products-navbar/ProductsNavbar";

function ProductsLayout() {
  return (
    <section className=" w-full flex items-center flex-col pt-32 lg:px-20 md:px10 px-5">
      <ProductsNavbar />
      <Outlet />
    </section>
  );
}

export default ProductsLayout;
