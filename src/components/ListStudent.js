import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Student extends Component {
  onDelete = (id) => {
    if(confirm("Are you sure to delete?")){// eslint-disable-line
      this.props.onDelete(id);
    }
  }
  render() {
    var { student, index} = this.props;
    return (

<tr>
    <td>{index + 1}</td>
    <td>{student.id} </td>
    <td>{student.name}</td>
    <td>{student.email}</td>
    <td>{student.address}</td>
  <td>
    <Link to={`/student/${student.id}/edit`} 
    className="btn btn-info">
      Edit
    </Link>
    &nbsp;
    <button type="button" className="btn btn-warning" onClick={() => this.onDelete(student.id)} >
      Delete
    </button>
  </td>
</tr>

    );
}
}

export default Student;