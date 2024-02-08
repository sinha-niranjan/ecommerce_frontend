import ProductSection from "./ProductSection";
import { fastFoods, newProducts } from "../../data/bannerProducts";
const products = {
  heading: "NEW PRODUCTS",
  details: "Some of the new products arriving this week",
  products: newProducts,
};

const fastFoodProducts = {
  heading: "FAST FOOD",
  details: "Some of best fast food arriving this week",
  products: fastFoods
}

const Products = () => {
  return (
    <>
      <ProductSection products={products} />
      <ProductSection products={fastFoodProducts} />{" "}
    </>
  );
};

export default Products;
