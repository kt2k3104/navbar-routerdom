import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
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
      </div>
      <div className="nav-right">
        <div className="user">User</div>
        <button className="log-out">Logout</button>
      </div>
    </div>
  );
}
