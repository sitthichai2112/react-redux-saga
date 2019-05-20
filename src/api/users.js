import axios from "axios";

export const getUsers = () => {
  return axios.get("/users", {
    params: {
      limit: 1000
    }
  });
};

export const createUser = params => {
  return axios.post("/users", {
    ...params
  });
};

export const deleteUser = uerId => {
  return axios.delete("/users/" + uerId);
};
