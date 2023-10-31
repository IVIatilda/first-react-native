import { ACTIONS } from "./actions";

const initialState = {
  isAdmin: false,
  name: '',
  age: '',
  email: '',
};

const appReducer = (state = initialState, action: {type: ACTIONS; value?: string}) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return {
        ...state,
        isAdmin: true,
      };
    case ACTIONS.LOGOUT:
      return {
        ...state,
        isAdmin: false,
      };
    case ACTIONS.SET_NAME:
      return {
        ...state,
        name: action.value,
      };
    case ACTIONS.SET_AGE:
      return {
        ...state,
        age: action.value,
      };
    case ACTIONS.SET_EMAIL:
      return {
        ...state,
        email: action.value,
      };
    default:
      return state;
  }
};

export default appReducer;
