import "./NavBar.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav>
      <h4>ThoughtSpace</h4>
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
