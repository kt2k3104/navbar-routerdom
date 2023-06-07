import React, { useState, useEffect } from "react";
import axios from "axios";
import showToastMessage from "../helpers/toastMessaage";

const AuthContext = React.createContext({
  isLoggined: false,
  userName: "",
  loginHandle: () => {},
  signupHandle: () => {},
  logoutHandle: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggined, setIsLoggined] = useState(false);
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const tokenLS = localStorage.getItem("token");
    const usernameLS = localStorage.getItem("username");

    if (tokenLS) {
      setIsLoggined(true);
      setUserName(usernameLS);
      setToken(tokenLS);
    }
  }, []);

  const signupHandle = async (name, email, password, cb) => {
    try {
      const response = await axios.put(
        "http://localhost:8080/api/v1/auth/signup",
        {
          name,
          email,
          password,
        }
      );
      cb();
    } catch (err) {
      showToastMessage(err.response.data.message, "error");
    }
  };
  const loginHandle = async (email, password, cb) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        {
          email,
          password,
        }
      );

      setUserName(response.data.userName);
      setToken(response.data.token);
      localStorage.setItem("username", response.data.userName);
      localStorage.setItem("token", response.data.token);

      setIsLoggined(true);
      cb();
    } catch (err) {
      showToastMessage(err.response.data.message, "error");
    }
  };

  const logoutHandle = async () => {
    setUserName("");
    setToken("");
    setIsLoggined(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggined, userName, loginHandle, logoutHandle, signupHandle }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
