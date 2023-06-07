import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Nav.css";
import AuthContext from "../../contexts/authContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const navigation = useNavigate();
  const authCtx = useContext(AuthContext);
  return (
    <div className="nav-bar">
      <div className="nav-left">
        <div>
          <NavLink
            className={({ isActive, isPending }) => {
              if (isActive) return "isActive";
              if (isPending) return "isPending";

              return "td_none";
            }}
            to={"/"}
          >
            Home
          </NavLink>
        </div>
        {authCtx.isLoggined && (
          <div>
            <NavLink
              className={({ isActive, isPending }) => {
                if (isActive) return "isActive";
                if (isPending) return "isPending";

                return "td_none";
              }}
              to={"/restaurants"}
            >
              Restaurants
            </NavLink>
          </div>
        )}
        {authCtx.isLoggined && (
          <div>
            <NavLink
              className={({ isActive, isPending }) => {
                if (isActive) return "isActive";
                if (isPending) return "isPending";

                return "td_none";
              }}
              to={"/new"}
            >
              New
            </NavLink>
          </div>
        )}
        {authCtx.isLoggined && (
          <div>
            <NavLink
              className={({ isActive, isPending }) => {
                if (isActive) return "isActive";
                if (isPending) return "isPending";

                return "td_none";
              }}
              to={"/about"}
            >
              About
            </NavLink>
          </div>
        )}
      </div>
      <div className="nav-right">
        {authCtx.isLoggined && (
          <div className="user">
            <div className="avatar">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <h4>{authCtx.userName}</h4>
          </div>
        )}
        {authCtx.isLoggined && (
          <button
            className="log-out"
            onClick={() => {
              authCtx.logoutHandle("yelan@vnu.edu.vn", "12345");
              navigation("/");
            }}
          >
            Logout
          </button>
        )}
        {!authCtx.isLoggined && (
          <button
            className="log-out"
            onClick={() => {
              // authCtx.loginHandle("yae@vnu.edu.vn", "12345");
              navigation("/login");
            }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}
