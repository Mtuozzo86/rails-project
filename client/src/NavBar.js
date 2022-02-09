import "./NavBar.css";
import { Link } from "react-router-dom";
function NavBar({ name }) {
  console.log(name);

  return (
    <nav>
      <h4>ThoughtSpace</h4>
      {name ? <p style={{ color: "blue" }}>Welcome, {name}!</p> : null}
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
