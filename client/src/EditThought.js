import { useState } from "react";

function EditThought({ id, thoughts, onSubmitEdit, setEdit }) {
  const [update, setUpdate] = useState(thoughts);

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
    })
      .then((resp) => resp.json())
      .then((edit) => onSubmitEdit(edit))
      .then(() => setEdit(false));
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={update}
        onChange={(e) => setUpdate(e.target.value)}
      ></textarea>
      <button>Update</button>
    </form>
  );
}

export default EditThought;
