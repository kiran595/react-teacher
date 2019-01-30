import React, { Component } from "react";
// import teacher from "../teacher.json";
import axios from "axios";
import {Link} from "react-router-dom";

class Teacher extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios
      .get("https://7ygleisqmg.execute-api.us-east-2.amazonaws.com/dev")
      .then(response => this.setState({data: response.data}))
      .catch(err => console.log(err))
  }

  removeTeacherHandler = (id) => {
    console.log(id)
    axios.delete("https://7ygleisqmg.execute-api.us-east-2.amazonaws.com/dev", id)
      .then(res => {
        this.setState({data: this.state.data.filter(item => item.id !== id)});
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
      <Link to="/new-teacher">
        <button type="button" class="btn btn-primary">Add Teacher</button>
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
              <tr>
                <td>{index +1}</td>
                <td>{teacher.email}</td>
                <td>{teacher.firstname}</td>
                <td>{teacher.lastname}</td>
                <td>{teacher.gender}</td>
                <td>{teacher.description}</td>
                <td>{teacher.dob}</td>
                <td>{teacher.city}</td>
                <td>{teacher.roleteacher ? "Yes" : "No"}</td>
                <td>
                <button type="button" class="btn btn-danger" onClick={() => this.removeTeacherHandler(teacher.id)}>Remove Teacher</button>
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
