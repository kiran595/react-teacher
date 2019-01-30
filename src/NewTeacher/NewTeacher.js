import React, { Component } from "react";

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

  postDataHandler = () => {
    const data = {
      email: this.state.email,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      city: this.state.city,
      description: this.state.description
    };

    axios
      .post("https://7ygleisqmg.execute-api.us-east-2.amazonaws.com/dev", data)
      .then(response => console.log(response));
  };

  render() {
    return (
      <div>
        
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={event => this.setState({ email: event.target.value })}
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">FirstName</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              value={this.state.firstname}
              onChange={event =>
                this.setState({ firstname: event.target.value })
              }
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">LastName</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={this.state.lastname}
              onChange={event =>
                this.setState({ lastname: event.target.value })
              }
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">City</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={this.state.city}
              onChange={event => this.setState({ city: event.target.value })}
            />
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Description</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={this.state.description}
              onChange={event =>
                this.setState({ description: event.target.value })
              }
            />
          </div>
          <button class="btn btn-primary" onClick={this.postDataHandler}>
            Submit
          </button>
        
      </div>
    );
  }
}

export default NewTeacher;
