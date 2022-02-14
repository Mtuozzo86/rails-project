import "./CSS/NavBar.css";
import { Link } from "react-router-dom";
function NavBar({ name, onLogout }) {
  const { username } = name;

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  const linkStyles = {
    textDecoration: "none",
  };

  return (
    <nav>
      <Link to="/content" style={linkStyles}>
        <h4 style={{ color: "crimson" }}>ThoughtSpace</h4>
      </Link>

      {username ? <p className="user-logged-in">Welcome, {username}!</p> : null}
      <div className="user">
        {username ? (
          <Link to="/login" style={linkStyles}>
            <p onClick={handleLogout}>Logout</p>
          </Link>
        ) : null}

        <Link to="/login" style={linkStyles}>
          <p>Login</p>
        </Link>

        <Link to="/create" style={linkStyles}>
          <p>Create Account</p>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
