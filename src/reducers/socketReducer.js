import * as a from "../actionTypes";

const initialState = {
  apiId: null,
};

const socketReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.DB_INITIALIZED:
      return {
        ...state,
        apiId: action.apiId,
      };
    default:
      return state
  }
};

export default socketReducer;