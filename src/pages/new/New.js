import React, { useContext } from "react";
import styles from "./New.module.css";
import classNames from "classnames/bind";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import RestaurantContext from "../../contexts/restaurantContext";
import showToastMessage from "../../helpers/toastMessaage";

function New() {
  const navigation = useNavigate();
  const cx = classNames.bind(styles);

  const restCtx = useContext(RestaurantContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // restCtx.saveDataFirebase(data);
    try {
      const response = await restCtx.savedARestaurant(data);

      if (response) {
        console.log(response.data);
        reset();
        restCtx.fetchAllRest();
        showToastMessage("them thanh cong", "success");
        navigation("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log(watch("name"));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>New Restaurant</h1>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Your Name"
        {...register("name", { required: true })}
      />
      {errors.name?.type === "required" && <li>Vui lòng nhập tên</li>}

      <label htmlFor="address">Address</label>
      <input
        type="text"
        name="address"
        id="address"
        placeholder="Your Address"
        {...register("address", { required: true, onBlur: () => {} })}
      />
      {errors.address?.type === "required" && <li>Vui lòng nhập address</li>}

      <label htmlFor="introduction">introduction</label>
      <textarea
        name="introduction"
        id="introduction"
        {...register("introduction", {
          required: true,
        })}
      />
      {errors.introduction?.type === "required" && (
        <li>Vui lòng nhập restaurantInfo</li>
      )}
      <input
        type="file"
        name="image"
        id="image"
        {...register("image", {
          required: true,
          validate: (value) => {
            if (
              value[0].type === "image/jpeg" ||
              value[0].type === "image/jpg" ||
              value[0].type === "image/png"
            )
              return true;
            return false;
          },
        })}
      />
      {errors.image?.type === "required" && <li>Vui lòng chọn ảnh</li>}
      {errors.image?.type === "validate" && (
        <li>Vui lòng chọn đúng file ảnh</li>
      )}
      <button className={cx("button-submit")} type="submit">
        Add Restaurant
      </button>
    </form>
  );
}

export default New;
