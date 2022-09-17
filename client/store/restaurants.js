import axios from "axios";

const restaurants = (state = [], action) => {
  if (action.type === "SET_RESTAURANTS") {
    return action.restaurants;
  }
  return state;
};

//GET all tasks
export const fetchRestaurants = () => {
  return async (dispatch) => {
    const restaurants = (
      await axios.get("/api/restaurants", {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      })
    ).data;
    dispatch({ type: "SET_RESTAURANTS", restaurants });
  };
};

export default restaurants;
