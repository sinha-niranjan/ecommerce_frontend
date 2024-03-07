import { useEffect } from "react";
import "./App.css";
import Router from "./routes/Route";
import { useTokenExistMutation } from "./redux/api/userAPI";
import { useDispatch } from "react-redux";
import { userdata } from "./redux/reducer/userReducer";

function App() {
  const [tokenExist] = useTokenExistMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    const userExist = async () => {
      const accessToken = localStorage.getItem("AccessToken");
 
      // const cookie = document.cookie?.split("Refreshtoken=");
      // const accessToken = cookie[0]?.split("=")[1]?.replace(";", "");
      const res = await tokenExist(accessToken || "");
      const data = res?.data;
      dispatch(
        data?.statusCode === 200 ? userdata(data?.data) : userdata(null)
      );
    };
    userExist();
  }, []);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
