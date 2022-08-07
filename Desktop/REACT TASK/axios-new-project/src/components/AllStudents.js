import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../App";

function AllStudents() {
  let [student, SetStudent] = useState([]);
  //proper way to use useEffect
  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    let res = await axios.get(url);
    console.log(res.data);
    SetStudent(res.data);
  };

  let handleDelete = async (id) => {
    await axios.delete(url + `/${id}`);
    getData(); //render again , // again update the state
  };

  // let [stu, setStu] = useState(props.data.students);

  let navigate = useNavigate();
  //   let handleDelete = (i) => {};
  return (
    <>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Batch</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {student.map((e) => {
              return (
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.batch}</td>
                  <td>{e.mobile}</td>
                  <td>{e.email}</td>
                  <td>
                    {e.status ? (
                      <p style={{ color: "green" }}>Active</p>
                    ) : (
                      <p style={{ color: "red" }}>Inactive</p>
                    )}
                  </td>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() => navigate("/edit-student/" + e.id)}
                    >
                      Edit
                    </Button>
                    &nbsp; &nbsp;
                    <Button variant="danger" onClick={() => handleDelete(e.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default AllStudents;
