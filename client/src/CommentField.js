import { useState } from "react";

function CommentField({ onCancelClick, liftUserThoughts }) {
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");

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
    const userThoughts = { title: title, thought: thought };
    liftUserThoughts(userThoughts);
    setTitle("");
    setThought("");
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
      </form>
    </div>
  );
}

export default CommentField;
