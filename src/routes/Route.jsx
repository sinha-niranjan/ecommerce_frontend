import { Route, Routes, BrowserRouter } from "react-router-dom";

import Loader from "../components/Loader/Loader";
import { Suspense, lazy } from "react";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/sign-in/Login";
import SignUp from "../Pages/sign-up/SignUp";
import { authenticated } from "../utils/authentication";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};

const Profile = Loadable(lazy(() => import("../Pages/profile/Profile")));
const Dashboard = Loadable(
  lazy(() => import("../Pages/admin/Dashboard/Dashboard"))
);
const Home = Loadable(lazy(() => import("../Pages/Home/Home")));
const Layout = Loadable(lazy(() => import("../Layout/Layout")));
const AdminLayout = Loadable(lazy(() => import("../Layout/AdminLayout")));

const ProductDetails = Loadable(
  lazy(() => import("../Pages/ProductDetails/ProductDetails"))
);
const FilterProducts = Loadable(
  lazy(() => import("../Pages/FilterProducts/FilterProducts"))
);
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="filter-products" element={<FilterProducts />} />
          <Route
            path="products-details"
            element={
              authenticated() ? <ProductDetails /> : <>Not authorized .... </>
            }
          />
          <Route path="my-profile" element={<Profile />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="sign-in" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

// export const router = createBrowserRouter(
//   createRoutesFromElements([
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Home />} />
//       <Route path="filter-products" element={<FilterProducts />} />
//       <Route path="products-details" element={<ProductDetails />} />
//     </Route>,
//     <Route path="/auth" element={<AuthLayout />}>
//       <Route path="sign-in" element={<Login />} />
//       <Route path="sign-up" element={<SignUp />} />
//     </Route>,
//   ])
// );
