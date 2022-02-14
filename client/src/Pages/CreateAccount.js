import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateAccount({ setUser }) {
  const [successfulLogin, setSuccessfulLogin] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: confirmPassword,
      }),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((newUser) => setUser(newUser));
        setSuccessfulLogin("Success!  Please use login screen to continue...");
      } else {
        resp.json().then((errors) => setErrors(errors.error));
      }
    });
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          Create Your Login:{" "}
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div>
          Create Your Password:{" "}
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          Confirm Password:{" "}
          <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <button type="submit">Enter</button>
      </form>
      {successfulLogin}
      {errors.length > 0 && (
        <ul>
          {errors.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CreateAccount;
