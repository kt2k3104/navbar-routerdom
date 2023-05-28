import React from "react";
import styles from "./Restaurants.module.css";
import classNames from "classnames/bind";
import Restaurant from "../../components/Restaurant/Restaurant";
import { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RestaurantContext from "../../contexts/restaurantContext";

export default function Restaurants() {
  const cx = classNames.bind(styles);

  const restCtx = useContext(RestaurantContext);

  const setting = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    // draggable: true,
  };

  return (
    <div className={cx("restaurants-container")}>
      <Slider {...setting}>
        {restCtx.restaurants.map((val) => {
          return (
            <div key={val.id} className={cx("res")}>
              <Restaurant
                resName={val.name}
                resImage={val.imageUrl}
                resUser={val.userName}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
