import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const getToken = async () => {
      if (email) {
        const { data } = await axios.post(
          "https://stark-springs-77558.herokuapp.com/loginWithWebToken",
          { email }
        );
        setToken(data.accessToken);
        localStorage.setItem("ACCESS_TOKEN", data.accessJwtToken);
      }
    };
    getToken();
  }, [email]);
  return [token];
};

export default useToken;
