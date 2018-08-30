import socket from "./socket";
import protocol from "./protocol";
import * as a from "./actionTypes";
import store from "./store";


export const initiateLogin = () => {
   socket.send(JSON.stringify(protocol[1].data));
   return { type: a.INITIATE_LOGIN }
};

export const finishLogin = () => {
  store.dispatch(protocol[2].action());
  return { type: a.LOGIN_SUCCESS }
};

export const initiateDB = () => {
  socket.send(JSON.stringify(protocol[2].data));
  return { type: a.INITIATE_DB };
};

export const DBInitialized = (message) => {
  return {
    type: a.DB_INITIALIZED,
    apiId: message.result
  }
};

export const fetchAccounts = () => {
  socket.send(JSON.stringify(protocol[3].data));
  return { type: a.FETCH_ACCOUNTS }
};

export const accountList = ({result}) => {
  return {
    type: a.ACCOUNTS_LIST,
    list: result,
  }
};

export const pickAccount = (id) => {
  store.dispatch(protocol[4].action(id));
  return {
    type: a.ACCOUNT_PICKED,
    id: id
  }
};

export const fetchHistory = (id) => {
  const oldData = protocol[4].data;
  const newData = {
    ...(oldData),
    params: [
      oldData.params[0],
      oldData.params[1],
      [
        id,
        oldData.params[2][1],
        oldData.params[2][2],
        oldData.params[2][3]
      ]
    ]
  };
  socket.send(JSON.stringify(newData));
  return {
    type: a.FETCH_HISTORY
  }
};

export const historyList = ({result}) => {
  return {
    type: a.HISTORY_LIST,
    list: result,
  }
};