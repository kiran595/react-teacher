import React, { Component } from "react";
import axios from "../../axios";
import { Link } from "react-router-dom";

class Teacher extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios
      .get("/teacher")
      .then(response => this.setState({ data: response.data }))
      .catch(err => console.log(err));
  }

  removeTeacherHandler = id => {
    console.log(id);
    axios
      .delete("/teacher", id)
      .then(res => {
        this.setState({ data: this.state.data.filter(item => item.id !== id) });
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div>
        <Link to="/new-teacher">
          <button type="button" className="btn btn-primary">
            Add Teacher
          </button>
        </Link>
        <table className="table table-bordered">
          <tr>
            <th>SN</th>
            <th>Email</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Gender</th>
            <th>Description</th>
            <th>DOB</th>
            <th>City</th>
            <th>RoleTeacher</th>
            <th>Actions</th>
          </tr>

          {this.state.data.map((teacher, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{teacher.email}</td>
                <td>{teacher.firstname}</td>
                <td>{teacher.lastname}</td>
                <td>{teacher.gender}</td>
                <td>{teacher.description}</td>
                <td>{teacher.dob}</td>
                <td>{teacher.city}</td>
                <td>{teacher.roleteacher ? "Yes" : "No"}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => this.removeTeacherHandler(teacher.id)}
                  >
                    Remove Teacher
                  </button>
                  <Link
                    to={{
                      pathname: "/edit-teacher/"+ teacher.id
                    }}
                  >
                    <button type="button" className="btn btn-secondary">
                      Update Teacher
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default Teacher;
