import { useState } from "react";

function AddNewCommentField({ onCancelClick, liftUserThoughts, currentUser }) {
  const { username } = currentUser;

  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");
  const [errors, setErrors] = useState([]);

  function handleCancel(e) {
    onCancelClick(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const userInput = {
      title,
      thought,
      username,
    };
    fetch("/blogs", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userInput),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((input) => liftUserThoughts(input));
        setThought("");
        setTitle("");
        setErrors([]);
      } else {
        resp.json().then((errorMessage) => setErrors(errorMessage.errors));
      }
    });
  }

  return (
    <div className="input-field">
      <form className="input" onSubmit={handleSubmit}>
        Title:
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        Thoughts:
        <div>
          <textarea
            value={thought}
            onChange={(e) => setThought(e.target.value)}
          />
        </div>
        <button>Submit</button>
        <button onClick={handleCancel}>Cancel</button>
        {errors &&
          errors.map((error) => {
            return <p key={error}>{error}</p>;
          })}
      </form>
    </div>
  );
}

export default AddNewCommentField;
