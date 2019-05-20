import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
class NewUserForm extends Component {
  state = {
    firstName: "",
    lastName: ""
  };
  handelChangeText = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.handelSubmit({
      firstName: this.state.firstName,
      lastName: this.state.lastName
    });

    this.setState({
      firstName: "",
      lastName: ""
    });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>First Name</Label>
          <Input
            placeholder="First Name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handelChangeText}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input
            placeholder="Last Name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handelChangeText}
            required
          />
        </FormGroup>
        <FormGroup>
          <Button block outline type="submit" color="primary">
            Create
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default NewUserForm;
