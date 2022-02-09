import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MainLogin({ userInfo }) {
  const history = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ username }),
    })
      .then((resp) => resp.json())
      .then((user) => userInfo(user.username));
    history("/content");
  }

  function handleUser(e) {
    setUsername(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          Username: <input onChange={handleUser} value={username} type="text" />
        </div>
        <div>
          Password:{" "}
          {/* <input onChange={handlePassword} value={password} type="password" /> */}
        </div>
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}

export default MainLogin;
