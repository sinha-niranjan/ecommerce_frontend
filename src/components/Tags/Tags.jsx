import React from "react";
import Org from "../../assets/images/logo/organic.png";
import Cold from "../../assets/images/logo/cold.png";
import Marked from "../../assets/images/logo/markedStar.png";
import Unmarkded from "../../assets/images/logo/UnmarkedStar.png";

const Organic = () => {
  return <img src={Org} alt="" style={{ width: "80px", height: "auto" }} />;
};

const ColdSale = () => {
  return <img src={Cold} alt="" style={{ width: "80px", height: "auto" }} />;
};

const arr = [1, 2, 3, 4, 5];

const Rating = ({rating}) => {
  return arr.map((item, indx) => (
    <img src={rating > indx ? Marked : Unmarkded} />
  ));
};

export { Organic, ColdSale ,Rating};
