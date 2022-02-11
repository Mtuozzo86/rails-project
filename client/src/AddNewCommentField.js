import { useState } from "react";

function AddNewCommentField({ onCancelClick, liftUserThoughts, currentUser }) {
  const { username } = currentUser;

  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");
  const [errors, setErrors] = useState([]);

  function handleCancel(e) {
    onCancelClick(e);
  }

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleThoughts(e) {
    setThought(e.target.value);
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
      } else {
        resp.json().then((errorMessage) => setErrors(errorMessage.error));
      }
    });
  }

  return (
    <div className="input-field">
      <form className="input" onSubmit={handleSubmit}>
        Title:
        <input value={title} onChange={handleTitle} />
        <br />
        Thoughts:
        <div>
          <textarea value={thought} onChange={handleThoughts} />
        </div>
        <button>Submit</button>
        <button onClick={handleCancel}>Cancel</button>
        {errors && <p>{errors}</p>}
      </form>
    </div>
  );
}

export default AddNewCommentField;
