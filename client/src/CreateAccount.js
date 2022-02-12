import { useState } from "react";

function CreateAccount() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
    })
      .then((resp) => resp.json())
      .then((newUser) => console.log(newUser));
    setUsername("");
    setPassword("");
    setConfirmPassword("");
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
    </div>
  );
}

export default CreateAccount;
