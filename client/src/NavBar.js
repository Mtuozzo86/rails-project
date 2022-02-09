import "./NavBar.css";
import { Link } from "react-router-dom";
function NavBar({ user }) {
  return (
    <nav>
      <h4>ThoughtSpace</h4>
      {user ? <p style={{ color: "blue" }}>Welcome, {user}!</p> : null}
      <div className="user">
        <Link to="/login">
          <p>Welcome</p>
        </Link>

        <Link to="/create">
          <p>Create Account</p>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
