import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

 
import Loader from "../components/Loader/Loader";
import { Suspense, lazy } from "react";
import FilterProducts from "../Pages/FilterProducts/FilterProducts";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};

const Home = Loadable(lazy(() => import("../Pages/Home/Home")));
const Layout = Loadable(lazy(() => import("../Layout/Layout")));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="filter-products" element={<FilterProducts />} />
    </Route>
  )
);


