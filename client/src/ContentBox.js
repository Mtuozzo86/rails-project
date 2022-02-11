import { useState } from "react";
import EditThought from "./EditThought";

function ContentBox({
  id,
  title,
  thoughts,
  onDelete,
  onSubmitEdit,
  currentUser,
}) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    setIsEditing(false);
  }

  function handleDelete() {
    fetch(`/blogs/${id}`, {
      method: "DELETE",
    }).then((resp) => {
      if (resp.ok) {
        onDelete(id);
      }
    });
  }

  return (
    <div>
      <div className="container">
        <div className="topic">
          <h4>{title}</h4>
        </div>
        <div className="topic-content">
          {isEditing ? (
            <EditThought
              id={id}
              thoughts={thoughts}
              onSubmitEdit={onSubmitEdit}
              setEdit={handleEdit}
            />
          ) : (
            <p className="topic-comment">{thoughts}</p>
          )}
        </div>
        <div className="footer">
          {currentUser ? (
            <>
              <button onClick={handleDelete}>Delete</button>
              <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
                Edit
              </button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ContentBox;
