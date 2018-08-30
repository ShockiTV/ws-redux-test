import { Layout } from "antd";
import React, { Component } from 'react';
import { Provider } from "react-redux";
import './App.css';
import AccountsList from "./components/AccountsList";
import HistoryView from "./components/HistoryView";
import store from "./store";

const { Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout className="page">
          <Sider>
            <AccountsList />
          </Sider>
          <Content>
            <HistoryView />
          </Content>
        </Layout>
      </Provider>
    );
  }
}

export default App;
