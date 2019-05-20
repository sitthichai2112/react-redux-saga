export const Type = {
  GET_USERS_REQUEST: "users/get_users_request",
  GET_USERS_SUCCESS: "users/get_users_success",
  CREATE_USERS_REQUEST: "users/create_users_request",
  DELETE_USERS_REQUEST: "users/delete_users_request",
  USER_ERROR: "users/user_error"
};

export const getUsersRequest = () => ({
  type: Type.GET_USERS_REQUEST
});

export const getUsersSuccess = ({ items }) => ({
  type: Type.GET_USERS_SUCCESS,
  payload: {
    items: items
  }
});

export const createUserrequest = ({ firstName, lastName }) => ({
  type: Type.CREATE_USERS_REQUEST,
  payload: {
    firstName,
    lastName
  }
});

export const deleteUserRequest = userId => ({
  type: Type.DELETE_USERS_REQUEST,
  payload: {
    userId
  }
});

export const userError = ({error}) => ({
  type: Type.USER_ERROR,
  payload: {
    error
  }
});
