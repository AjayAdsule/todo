import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setAxiosAuthHeader } from "./lib/axios/axiosConfig";

const BaseComponent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAxiosAuthHeader(token);
      navigate("/todo/home");
    }
  }, []);

  return <div>BaseComponent</div>;
};

export default BaseComponent;
