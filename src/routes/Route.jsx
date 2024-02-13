import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Loader from "../components/Loader/Loader";
import { Suspense, lazy } from "react"; 
const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};

const Home = Loadable(lazy(() => import("../Pages/Home/Home")));
const Layout = Loadable(lazy(() => import("../Layout/Layout")));
const ProductDetails = Loadable(
  lazy(() => import("../Pages/ProductDetails/ProductDetails"))
);
const FilterProducts = Loadable(
  lazy(() => import("../Pages/FilterProducts/FilterProducts"))
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="filter-products" element={<FilterProducts />} />
      <Route path="products-details" element={<ProductDetails />} />
    </Route>
  )
);
