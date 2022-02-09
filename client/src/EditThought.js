import { useState } from "react";

function EditThought({ thoughts, onSubmitEdit }) {
  const [update, setUpdate] = useState(thoughts);

  function handleSubmit(e) {
    e.preventDefault();
    // onSubmitEdit(update);
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={update}></textarea>
      <button>Update</button>
    </form>
  );
}

export default EditThought;
