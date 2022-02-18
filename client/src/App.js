import "./CSS/App.css";
import "./CSS/AllContent.css";
import NavBar from "./NavBar";
import MainLogin from "./Pages/MainLogin";
import CreateAccount from "./Pages/CreateAccount";
import { Routes, Route } from "react-router-dom";
import AllContent from "./Pages/AllContent";
import { useState, useEffect } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState([]);

  // PAGE LOAD LOOKS FOR USER SESSION

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);

  // SIGN IN & SIGN OUT

  function handleSetCurrentUser(newUser) {
    setCurrentUser(newUser);
  }

  function handleUserSignIn(person) {
    setCurrentUser(person);
  }

  function handleLogout() {
    setCurrentUser([]);
  }
  return (
    <div>
      <NavBar name={currentUser} onLogout={handleLogout} />

      <Routes>
        <Route
          path="/login"
          element={<MainLogin userInfo={handleUserSignIn} />}
        />
        <Route
          path="/create"
          element={<CreateAccount setUser={handleSetCurrentUser} />}
        />

        <Route path="/" element={<AllContent currentUser={currentUser} />} />
      </Routes>
    </div>
  );
}

export default App;
