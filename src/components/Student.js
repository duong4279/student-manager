import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./Components.css";

class Student extends Component {
  render() {
    return (
      <Route>
        <div className="row">
          
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 margin-search">
            {/* student */}
            {/* Search */}
            <div className="input-group margin-table">
              <input
                type="text"
                className="form-control"
                name="keyword"
                placeholder="Search"
              />

              <span className="input-group-btn">
                <button type="button" className="btn btn-primary">
                  <span className="fa fa-search"></span>
                  Search
                </button>
              </span>
            </div>
          </div>
          <br/>
          <br/>




          {/* New Student Button*/}


     <div className="row">
         <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
         <Link to="/student/new" type="button" className="btn btn-success">
            New Student
          </Link>
         </div>
     </div>
     

          <table className="table table-hover">
            <thead>
              <tr className="text-style">
                <td>#</td>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Addess</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>{this.props.children}</tbody>
          </table>
        </div>
      </Route>
    );
  } 
}

export default Student;
