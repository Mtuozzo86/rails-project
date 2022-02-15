import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MainLogin({ userInfo }) {
  const history = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((existingUser) => userInfo(existingUser));
        history("/");
      } else {
        resp.json().then((errors) => setErrors(errors));
      }
    });
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          Username:{" "}
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
          />
        </div>
        <div>
          Password:{" "}
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
          />
        </div>
        <button type="submit">Enter</button>
      </form>
      {errors ? <p>{errors.error}</p> : null}
    </div>
  );
}

export default MainLogin;
