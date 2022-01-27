import "./App.css";
import NavBar from "./NavBar";
import MainLogin from "./MainLogin";
import CreateAccount from "./CreateAccount";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/login" element={<MainLogin />} />
        <Route path="/create" element={<CreateAccount />} />
      </Routes>
    </div>
  );
}

export default App;
