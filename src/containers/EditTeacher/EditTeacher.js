import React, { Component } from "react";
import axios from "../../axios";

class EditTeacher extends Component {
  state = {
    loadedTeacher: null,
    updatedTeacher: {
      email: "",
      firstname: "",
      lastname: "",
      city: "",
      description: ""
    }
  };

  componentDidMount() {
    console.log(this.props);
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  loadData() {
    if (this.props.match.params.id) {
      if (
        !this.state.loadedTeacher ||
        (this.state.loadedTeacher &&
          this.state.loadedTeacher.id !== +this.props.match.params.id) //since match.params.id is string , we add + to parse to equal
      ) {
        axios
          .get("/teacher?id=" + this.props.match.params.id)
          .then(response => {
            this.setState({ loadedTeacher: response.data });
          });
      }
    }
  }

  updateDataHandler = () => {
    const data = this.state.loadedTeacher;

    axios.put("/teacher", data).then(response => console.log(response));
  };

  render() {
    let post = null;

    if (this.props.match.params.id) {
      post = <p style={{ textAlign: "center" }}>Loading...</p>;
    }
    if (this.state.loadedTeacher) {
      post = (
        <div className="container">
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              value={this.state.loadedTeacher.email}
              onChange={event => {
                const updatedTeacher = { ...this.state.updatedTeacher };
                updatedTeacher.email = event.target.value;
                this.setState({ updatedTeacher });
              }}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>FirstName</label>
            <input
              type="text"
              className="form-control"
              value={this.state.loadedTeacher.firstname}
              onChange={event => {
                const updatedTeacher = { ...this.state.updatedTeacher };
                updatedTeacher.firstname = event.target.value;
                this.setState({ updatedTeacher });
              }}
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label>LastName</label>
            <input
              type="text"
              className="form-control"
              value={this.state.loadedTeacher.lastname}
              onChange={event => {
                const updatedTeacher = { ...this.state.updatedTeacher };
                updatedTeacher.lastname = event.target.value;
                this.setState({ updatedTeacher });
              }}
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              className="form-control"
              value={this.state.loadedTeacher.city}
              onChange={event => {
                const updatedTeacher = { ...this.state.updatedTeacher };
                updatedTeacher.city = event.target.value;
                this.setState({ updatedTeacher });
              }}
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              value={this.state.loadedTeacher.description}
              onChange={event => {
                const updatedTeacher = { ...this.state.updatedTeacher };
                updatedTeacher.description = event.target.value;
                this.setState({ updatedTeacher });
              }}
            />
          </div>
          <button className="btn btn-primary" onClick={this.updateDataHandler}>
            Submit
          </button>
        </div>
      );
    }

    return post;
  }
}

export default EditTeacher;
