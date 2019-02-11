import React, { Component } from "react";
import { Container, Form, Button, FormGroup, Input } from "reactstrap";

import axios from "axios";

class NewTeacher extends Component {
  state = {
    email: "",
    firstname: "",
    lastname: "",
    city: "",
    description: ""
  };

  componentDidMount() {
    console.log(this.props);
  }

  postDataHandler = e => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      city: this.state.city,
      description: this.state.description
    };

    console.log(data);

    axios.post("https://test-boocamp-123.firebaseio.com/teacher.json", data).then(response => console.log(response));
  };

  render() {
    return (
      <div>
        <Container>
          <Form onSubmit={this.postDataHandler}>
            <FormGroup>
              <label>Email address</label>
              <Input
                type="email"
                value={this.state.email}
                onChange={event => this.setState({ email: event.target.value })}
                placeholder="Enter email"
              />
            </FormGroup>
            <FormGroup>
              <label>FirstName</label>
              <Input
                type="text"
                value={this.state.firstname}
                onChange={event =>
                  this.setState({ firstname: event.target.value })
                }
                placeholder="Enter First Name"
              />
            </FormGroup>
            <FormGroup>
              <label>LastName</label>
              <Input
                type="text"
                value={this.state.lastname}
                onChange={event =>
                  this.setState({ lastname: event.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <label>City</label>
              <Input
                type="text"
                value={this.state.city}
                onChange={event => this.setState({ city: event.target.value })}
              />
            </FormGroup>

            <FormGroup>
              <label>Description</label>
              <Input
                type="text"
                value={this.state.description}
                onChange={event =>
                  this.setState({ description: event.target.value })
                }
              />
            </FormGroup>
            <Button color="primary">Submit</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default NewTeacher;
