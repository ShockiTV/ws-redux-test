import React from "react";
import { connect } from "react-redux";
import { compose, branch, renderNothing } from "recompose";
import HistoryList from "./HistoryList";

const HistoryView = ({ name, id }) => (
  <React.Fragment>
    <h1>{name} ({id})</h1>
    <h2>Transaction history</h2>
    <HistoryList />
  </React.Fragment>
);

const mapStateToProps = ({
  socket: { apiId },
  accounts: { list, active }
}) => ({
  apiId,
  id: active,
  name: active ? list[active].name : null,
});

export default compose(
  connect(
    mapStateToProps,
  ),
  branch(
    ({ apiId, id }) => !(apiId && id),
    renderNothing,
  ),
)(HistoryView);
