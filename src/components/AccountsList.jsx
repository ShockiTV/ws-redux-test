import React from "react";
import { connect } from "react-redux";
import { List } from "antd";
import { branch, compose, lifecycle, renderNothing, withProps, withPropsOnChange } from "recompose";
import { fetchAccounts, pickAccount } from "../actions";

const AccountsList = ({list, loading, pickAccount}) => (
  <List
    className="account-list"
    loading={loading}
    dataSource={list}
    renderItem={item => (
      <List.Item
        className="list-item"
        onClick={() => pickAccount(item.id)}
      >
        <span>{item.name}</span>
        <span>{item.id}</span>
      </List.Item>
    )}
  />
);

const mapStateToProps = ({
  socket: { apiId },
  accounts: { list }
}) => ({
  apiId,
  list
});

export default compose(
  connect(
    mapStateToProps,
    {
      fetchAccounts,
      pickAccount
    }
  ),
  branch(
    ({ apiId }) => !apiId,
    renderNothing,
  ),
  lifecycle({
    componentDidMount(){
      this.props.fetchAccounts();
    },
  }),
  branch(
    ({ list }) => !list,
    withProps({ loading: true, list: [] }),
    withPropsOnChange(
      ["list"],
      ({list}) => ({ loading: false, list: Object.values(list)})
    )
  )
)(AccountsList);
