import { lazy } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import NotFound from "../pages/NotFound";

const Home = lazy(() => import("../pages/Home"));
const Layout = lazy(() => import("../layout/Layout"));
const ProductsLayout = lazy(() => import("../layout/ProductsLayout"));
const About = lazy(() => import("../pages/About"));
const Products = lazy(() => import("../pages/Products"));
const SingleProduct = lazy(() => import("../pages/SingleProduct"));

function BrowserRouter() {
  const browserRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/products" element={<ProductsLayout />}>
          <Route path={`:categoryId` || "all"} element={<Products />} />
          <Route path=":categoryId/:product/:id" element={<SingleProduct />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={browserRouter} />;
}

export default BrowserRouter;
