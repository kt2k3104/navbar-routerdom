import React, { useState, useEffect } from "react";
import axios from "axios";
import { firebase } from "../firebase";

const RestaurantContext = React.createContext({
  restaurants: [],
  savedARestaurant: () => {},
  fetchAllRest: () => {},
  saveDataFirebase: () => {},
  getDataFirebase: () => {},
});

export const RestaurantContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);

  const saveDataFirebase = (restaurant) => {
    const res = {
      address: restaurant.address,
      introduction: restaurant.introduction,
      name: restaurant.name,
    };

    firebase
      .database()
      .ref("/listRes")
      .push()
      .set(res, (err) => {
        if (err) console.log(err);
      });
  };

  const getDataFirebase = async () => {
    const list = [];
    try {
      const snapshot = await firebase.database().ref("/listRes").get();
      if (snapshot) {
        snapshot.forEach((item) => {
          list.push({
            ...item.val(),
            image:
              "https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg",
          });
        });
      }

      console.log(list);
    } catch (err) {
      console.log(err);
    }

    setRestaurants(list);
  };

  const uploadFile = async (imageFile) => {};

  const savedARestaurant = (restaurant) => {
    restaurant.image = restaurant.image[0];

    const token = localStorage.getItem("token");
    try {
      return axios.post(
        "http://localhost:8080/api/v1/restaurants",
        restaurant,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  async function fetchAllRest() {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/restaurants?page=1"
      );

      if (response) {
        setRestaurants(response.data.result);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    // getDataFirebase();
    fetchAllRest();
  }, []);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        savedARestaurant,
        fetchAllRest,
        saveDataFirebase,
        getDataFirebase,
      }}
    >
      {props.children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantContext;
