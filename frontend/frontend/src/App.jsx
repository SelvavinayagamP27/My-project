import { useState } from "react";
import "./App.css";
// import Todoapp from "./Todoapp";
import { JobListPage } from "./JobListPage";
import { LoginPage } from "./LoginPage";
import { RegisterPage } from "./RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplyJobPage from "./ApplyJobpage";

function App() {
  return (
    <>
      {/* <h1>SELVAS</h1> */}

      <BrowserRouter>
        <Routes>


          <Route path="/" element={<LoginPage></LoginPage>}></Route>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/jobs" element={<JobListPage />} />
          <Route path='/apply/:jobId' element={<ApplyJobPage />} />

        </Routes>
      </BrowserRouter>
      {/* <Todoapp></Todoapp> */}
    </>
  );
}

export default App;