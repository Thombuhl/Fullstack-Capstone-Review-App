import axios from "axios";

const ratings = (state = [], action) => {
  if (action.type === "SET_RATINGS") {
    return action.ratings;
  }
  return state;
};

//GET all tasks
export const fetchRatings = () => {
  return async (dispatch) => {
    const ratings = (
      await axios.get("/api/ratings", {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      })
    ).data;
    dispatch({ type: "SET_RATINGS", ratings });
  };
};

export default ratings;
