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
      .post("/teacher", data)
      .then(response => console.log(response));
  };

  render() {
    return (
      <div className="container">
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              value={this.state.email}
              onChange={event => this.setState({ email: event.target.value })}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>FirstName</label>
            <input
              type="text"
              className="form-control"
              value={this.state.firstname}
              onChange={event =>
                this.setState({ firstname: event.target.value })
              }
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label>LastName</label>
            <input
              type="text"
              className="form-control"
              value={this.state.lastname}
              onChange={event =>
                this.setState({ lastname: event.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              class="form-control"
              value={this.state.city}
              onChange={event => this.setState({ city: event.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={event =>
                this.setState({ description: event.target.value })
              }
            />
          </div>
          <button className="btn btn-primary" onClick={this.postDataHandler}>
            Submit
          </button>
        
      </div>
    );
  }
}

export default NewTeacher;
