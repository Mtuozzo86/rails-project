import "./App.css";
import NavBar from "./NavBar";
import MainLogin from "./MainLogin";
import CreateAccount from "./CreateAccount";
import { Routes, Route } from "react-router-dom";
import AllContent from "./AllContent";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");

  function handleUserSignIn(person) {
    setUser(person);
  }

  return (
    <div>
      test
      <NavBar name={user} />
      <Routes>
        <Route
          path="/login"
          element={<MainLogin userInfo={handleUserSignIn} />}
        />
        <Route path="/create" element={<CreateAccount />} />
        <Route path="/content" element={<AllContent user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
