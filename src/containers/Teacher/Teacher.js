import React, { Component } from "react";
import axios from "../../axios";
import { Link } from "react-router-dom";
import {Table, Button} from 'reactstrap'

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
          <Button color="primary">Add Teacher</Button>
        </Link>
        <Table>
          <thead>
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
          </thead>
          <tbody>
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
                  <Button color="danger"
                    onClick={() => this.removeTeacherHandler(teacher.id)}
                  >
                    Remove Teacher
                  </Button>
                  <Link
                    to={{
                      pathname: "/edit-teacher/"+ teacher.id
                    }}
                  >
                    <Button color="warning">
                      Update Teacher
                    </Button>
                  </Link>
                </td>
              </tr>
            );
          })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Teacher;
