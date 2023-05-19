import React from "react";
import { useNavigate } from "react-router-dom";
import "./Restaurants.css";

export default function Restaurants() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Restaurants</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        home
      </button>
    </div>
  );
}
