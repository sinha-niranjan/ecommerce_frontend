import { useSelector } from "react-redux";
import { useTokenExistMutation } from "../redux/api/userAPI";

export const authenticated = () => {
  const { user } = useSelector((state) => state.userReducer);
  if (user === null) return false;

  return true;
};

