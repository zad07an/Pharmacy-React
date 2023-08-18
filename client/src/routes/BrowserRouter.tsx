import { lazy } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Layout = lazy(() => import("../layout/Layout"));
const ProductsLayout = lazy(() => import("../layout/ProductsLayout"));
const About = lazy(() => import("../pages/About"));
const Products = lazy(() => import("../pages/Products"));
const Services = lazy(() => import("../pages/Services"));
const Partners = lazy(() => import("../pages/Partners"));
const Feedback = lazy(() => import("../pages/Feedback"));
const SingleProduct = lazy(() => import("../pages/SingleProduct"));
const NotFound = lazy(() => import("../pages/NotFound"));

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
        <Route path="/services" element={<Services />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={browserRouter} />;
}

export default BrowserRouter;
