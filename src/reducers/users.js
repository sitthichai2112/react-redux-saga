import { Type } from "../actions/users";

const INITIAL_STATE = {
  items: [],
  error: ""
};

export default function users(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case Type.GET_USERS_SUCCESS: {
      return {
        ...state,
        items: actions.payload.items
      };
    }
    case Type.USER_ERROR: {
      return {
        ...state,
        error: actions.payload.error
      };
    }
    default:
      return { ...state };
  }
}
