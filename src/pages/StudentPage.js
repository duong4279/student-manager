import React, { Component } from "react";
import Student from "./../components/Student";
import ListStudent from "./../components/ListStudent";
import { connect } from "react-redux";
import callApi from "./../utils/apiCaller";

class StudentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }
  componentDidMount() {
    callApi("students", "GET", null).then(res => {
      this.setState({
        students: res.data
      });
    });
  }

  onDelete = id =>{
    var {students} = this.state;
    callApi(`students/${id}`, "DELETE", null).then(res => {
      if (res.status === 200){//OK
      var index = this.findIndex(students, id);
      if(index !== -1 ){
        students.splice(index, 1);
        this.setState({
          students : students
        })
      }
    }
    });
  }

  findIndex = (students, id) => {
    var result = -1;
    students.forEach((students, index) => {
      if (students.id === id) {
        result = index;
      }
    });
  };

  render() {
    // var {students} = this.props ;
    var { students } = this.state;

    return (
      <div>
        <Student>{this.showStudents(students)}</Student>
      </div>
    );
  }
  showStudents(students) {
    var result = null;
    if (students.length > 0) {
      result = students.map((student, index) => {
        return <ListStudent key={index} student={student} index={index} onDelete={this.onDelete} />;
      });
    }
    return result;
  }
}
const mapStateToProps = state => {
  return {
    students: state.students
  };
};

export default connect(mapStateToProps, null)(StudentPage);
