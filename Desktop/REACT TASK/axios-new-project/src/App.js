import "./App.css";
import SideBar from "./components/SideBar";
// import Dashboard from './components/Dashboard';
import AllStudents from "./components/AllStudents";
import AddStudent from "./components/AddStudent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import EditStudents from "./components/EditStudents";
import Formik from "./Formik/Formik";

export let url = "https://62eb70eead295463259dd84b.mockapi.io/user";
function App() {
  //   let data = {
  //     earning:"40,000",
  //     annual:"2,40,000",
  //     task:20,
  //     pending:26

  //   }
  return (
    <>
      <Router>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "15% 85%",
          }}
        >
          <div>
            <SideBar />
          </div>
          <div style={{ marginLeft: "20px" }}>
            <Routes>
              {/* <Route path = '/dashboard' element={<Dashboard data={data}/>}/> */}
              <Route path="/all-students" element={<AllStudents />} />
              <Route path="/add-student" element={<AddStudent />} />
              <Route path="/edit-student/:id" element={<EditStudents />} />
              <Route path="/formik" element={<Formik />} />
              {/* <Route path = '*' element={<Dashboard data={data}/>}/> */}
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
