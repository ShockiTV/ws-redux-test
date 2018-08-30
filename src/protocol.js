import * as actions from "./actions";

const protocol = {
  1: {
    action: actions.initiateLogin,
    data: {
      id: 1,
      method: "call",
      params: [1, "login", ["", ""]]
    },
    reaction: actions.finishLogin,
  },
  2: {
    action: actions.initiateDB,
    data: {
      id: 2,
      method: "call",
      params: [1,"history",[]]
    },
    reaction: actions.DBInitialized,
  },
  3: {
    action: actions.fetchAccounts,
    data: {
      id: 3,
      method: "call",
      params: [0,"lookup_accounts",["",100]]
    },
    reaction: actions.accountList,
  },
  4: {
    action: actions.fetchHistory,
    data: {
      id: 4,
      method: "call",
      params: [2,"get_relative_account_history",["1.2.69",1,100,8000]]
    },
    reaction: actions.historyList,
  },
};


export default protocol;