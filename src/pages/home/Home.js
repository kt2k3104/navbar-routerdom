import React, { useContext } from "react";
import "./Home.css";
import Restaurant from "../../components/Restaurant/Restaurant";
import RestaurantContext from "../../contexts/restaurantContext";
import AuthContext from "../../contexts/authContext";

export default function Home() {
  const restCtx = useContext(RestaurantContext);
  const authCtx = useContext(AuthContext);

  return (
    <div className="homeContainer">
      <div className="listRes">
        {restCtx.restaurants.map((val) => {
          return (
            <div key={val.id} className="ress">
              <Restaurant rest={val} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
