import { useState } from "react";

function EditThought({ id, thoughts, onSubmitEdit, setEdit }) {
  const [update, setUpdate] = useState(thoughts);
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const updatedThought = {
      thought: update,
    };
    fetch(`/updateparagraph/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedThought),
    }).then((resp) => {
      if (resp.ok) {
        resp
          .json()
          .then((edit) => onSubmitEdit(edit))
          .then(() => setErrors([]))
          .then(setEdit(false));
      } else {
        resp.json().then((errors) => setErrors(errors.errors));
      }
    });

    // .then((resp) => resp.json())
    // .then((edit) => onSubmitEdit(edit))
    // .then(() => setEdit(false));
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder={errors && errors[0]}
        value={update}
        onChange={(e) => setUpdate(e.target.value)}
      ></textarea>
      <button>Update</button>
    </form>
  );
}

export default EditThought;
