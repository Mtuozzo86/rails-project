import "./NavBar.css";
import { Link } from "react-router-dom";
function NavBar({ name, onLogout }) {
  const { username } = name;
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <nav>
      <h4>ThoughtSpace</h4>
      {username ? <p style={{ color: "blue" }}>Welcome, {username}!</p> : null}
      <div className="user">
        {username ? (
          <Link to="/login">
            <p onClick={handleLogout}>Logout</p>
          </Link>
        ) : null}

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
