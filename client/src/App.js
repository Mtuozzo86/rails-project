import "./App.css";
import NavBar from "./NavBar";
import MainLogin from "./MainLogin";
import CreateAccount from "./CreateAccount";
import { Routes, Route } from "react-router-dom";
import AllContent from "./AllContent";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/login" element={<MainLogin />} />
        <Route path="/create" element={<CreateAccount />} />
        <Route path="/content" element={<AllContent />} />
      </Routes>
    </div>
  );
}

export default App;
