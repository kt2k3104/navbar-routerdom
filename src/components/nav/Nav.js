import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Nav.css";
import AuthContext from "../../contexts/authContext";

export default function Nav() {
  const navigation = useNavigate();
  const authCtx = useContext(AuthContext);
  console.log(authCtx);
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
              <img
                alt="avt"
                src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/323887630_3454673894768857_3681784209111605314_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NyZXnsbcavkAX9Lxji-&_nc_oc=AQlkONkjJ3lJ7lx-9wwM4A_8tEY13ea0TTVupXMzABuszJjoC8sq_2TNtSdhMhtravs&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCziui8O1YFb1f4rUjZcsBqKp5ZudHTlWRnKvveQuvrPA&oe=6471E12B"
              />
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
              authCtx.loginHandle("khai@vnu.edu.vn", "12345");
            }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}
