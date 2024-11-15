import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function RemoveCookie() {
  const navigate = useNavigate();

  useEffect(() => {
    Cookies.remove("token");
    navigate("/login");
  }, []);

  return <div>Loading...</div>;
}

export default RemoveCookie;
