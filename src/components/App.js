import React from "react";
import { connect } from "react-redux";
import {
  getUsersRequest,
  createUserrequest,
  deleteUserRequest,
  userError
} from "../actions/users";
import "./App.css";
import UsersList from "./UsersList";
import NewUserForm from "./NewUserForm";
import { Alert } from "reactstrap";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getUsersRequest();
  }

  handelSubmit = ({ firstName, lastName }) => {
    this.props.createUserrequest({
      firstName,
      lastName
    });
  };

  onDeleteUserClick = userId => {
    this.props.deleteUserRequest(userId);
  };

  handelCloseAlert = () => {
    this.props.userError({
      error: ""
    });
  };

  render() {
    const { users } = this.props;
    return (
      <div className="contanner">
        <Alert
          color="danger"
          isOpen={!!users.error}
          toggle={this.handelCloseAlert}
        >
          {users.error}
        </Alert>
        <NewUserForm handelSubmit={this.handelSubmit} />
        <UsersList users={users.items} onDeleteUser={this.onDeleteUserClick} />
      </div>
    );
  }
}

export default connect(
  ({ users }) => ({ users }),
  { getUsersRequest, createUserrequest, deleteUserRequest, userError }
)(App);
