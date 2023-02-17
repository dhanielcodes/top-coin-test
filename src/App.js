import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes,
} from "react-router-dom";
import {
  Landing,
  About,
  Rules,
  FAQ,
  Contact,
  SignUp,
  Login,
  Dashboard,
  Deposit,
  Withdraw,
} from "./components/Pages";

function App() {
  console.log(window.innerWidth);
  return (
    <>
      <Router>
        <Routes>
          {window.innerWidth <= 810 ? (
            "me"
          ) : (
            <>
              <Route exact path="/" element={<Landing />} />{" "}
              <Route path="/home" element={<Landing />} />{" "}
              <Route path="/about" element={<About />} />{" "}
              <Route path="/rules" element={<Rules />} />{" "}
              <Route path="/faq" element={<FAQ />} />{" "}
              <Route path="/contact" element={<Contact />} />{" "}
              <Route path="/register" element={<SignUp />} />{" "}
              <Route path="/login" element={<Login />} />{" "}
              <Route path="/dashboard" element={<Dashboard />} />{" "}
              <Route path="/deposit" element={<Deposit />} />{" "}
              <Route path="/withdraw" element={<Withdraw />} />{" "}
            </>
          )}
        </Routes>{" "}
      </Router>{" "}
    </>
  );
}

export default App;
