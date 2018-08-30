import * as a from "../actionTypes";

const initialState = {
  active: null,
  list: null,
  history: null,
};

const accountsReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.ACCOUNTS_LIST:
      return {
        ...state,
        list: Object.assign(
          {},
          ...(action.list.map(item => ({
            [item[1]]:{
              id: item[1],
              name: item[0]
            }
        }))))
      };

    case a.ACCOUNT_PICKED:
      return {
        ...state,
        active: action.id,
      };

    case a.HISTORY_LIST:
      return {
        ...state,
        history: action.list,
      };

    case a.FETCH_HISTORY:
      return {
        ...state,
        history: initialState.history,
      };

    default:
      return state
  }
};

export default accountsReducer;