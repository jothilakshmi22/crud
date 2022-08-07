import "./App.css";
// import SideBar from "./components/SideBar";
// import Dashboard from './components/Dashboard';
import AllStudents from "./components/AllStudents";
import AddStudent from "./components/AddStudent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import EditStudents from "./components/EditStudents";
import ColorSchemesExample from "./components/Nav";

function App() {
  //   let data = {
  //     earning:"40,000",
  //     annual:"2,40,000",
  //     task:20,
  //     pending:26

  //   }

  let [students, setStudents] = useState([
    {
      name: "jothi",
      email: "jothi@gmail.com",
      mobile: "123123123",
      batch: "B31",
      status: true,
    },
  ]);
  return (
    <>
      <Router>
        <div
          style={
            {
              // display: "grid",
              // gridTemplateColumns: "15% 85%",
            }
          }
        >
          <div>
            {/* <SideBar /> */}
            <ColorSchemesExample />
          </div>
          <div style={{ marginLeft: "20px" }}>
            <Routes>
              {/* <Route path = '/dashboard' element={<Dashboard data={data}/>}/> */}
              <Route
                path="/user"
                element={<AllStudents data={{ students, setStudents }} />}
              />
              <Route
                path="/create-user"
                element={<AddStudent data={{ students, setStudents }} />}
              />
              <Route
                path="/edit-user/:id"
                element={<EditStudents data={{ students, setStudents }} />}
              />
              {/* <Route path = '*' element={<Dashboard data={data}/>}/> */}
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
