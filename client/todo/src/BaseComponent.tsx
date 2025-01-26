import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setAxiosAuthHeader } from "./lib/axios/axiosConfig";

const BaseComponent = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log("render basecomponent");
  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }

    if (token) {
      setAxiosAuthHeader(token);
      navigate("/todo/overview");
    }
  }, [token]);

  return <></>;
};

export default BaseComponent;
