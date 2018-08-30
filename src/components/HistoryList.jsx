import { Table } from "antd";
import React from "react";
import { connect } from "react-redux";
import { compose, branch, renderNothing, withPropsOnChange } from "recompose";
import { has } from "lodash";

const columns = [{
  title: 'From',
  dataIndex: 'op.1.from',
  key: 'from',
  sorter: (a, b) => a.op[1].from.localeCompare(b.op[1].from),
}, {
  title: 'To',
  dataIndex: 'op.1.to',
  key: 'to',
  sorter: (a, b) => a.op[1].to.localeCompare(b.op[1].to),
}, {
  title: 'Amount',
  dataIndex: 'op.1.amount.amount',
  key: 'amount',
  sorter: (a, b) => a.op[1].amount.amount - b.op[1].amount.amount,
}];

const HistoryList = ({ list }) => (
  <Table
    dataSource={list}
    columns={columns}
    rowKey="id"
  />
);

const mapStateToProps = ({
  socket: { apiId },
  accounts: { history }
}) => ({
  apiId,
  history,
});

export default compose(
  connect(
    mapStateToProps,
  ),
  branch(
    ({ apiId, history }) => !(apiId && history),
    renderNothing,
  ),
  withPropsOnChange(
    ["history"],
    ({history}) => ({ list: history ? history.filter(
      item => has(item, 'op.1.from') && has(item, 'op.1.to') && has(item, 'op.1.amount.amount') && has(item, 'id'),
      ): null})
  )
)(HistoryList);
