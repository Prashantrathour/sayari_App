import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actiontype";

const initialstate = {
  userdata: { name: "", email: "", password: "" },
  isLoading:false,
  isError:false,
};

export const reducer = (state = initialstate, {type,payload}) => {
  switch (type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        isLoading:true
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading:false,
        userdata:payload
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isError:true
      };

    default:
      return state;
  }
};
