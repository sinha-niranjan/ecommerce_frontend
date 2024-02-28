import { useSelector } from "react-redux";

export const authenticated = () => {
  const { user } = useSelector((state) => state.userReducer);
  if (user === null) return false;
  return true;
};


