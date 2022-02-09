import { useState } from "react";
import EditThought from "./EditThought";

function ContentBox({ title, thoughts, onDelete, onSubmitEdit }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <div className="container">
        <div className="topic">
          <h4>{title}</h4>
        </div>
        <div className="topic-content">
          {isEditing ? (
            <EditThought thoughts={thoughts} onSubmitEdit={onSubmitEdit} />
          ) : (
            <p className="topic-comment">{thoughts}</p>
          )}
        </div>
        <div className="footer">
          <button onClick={() => onDelete(title)}>Delete</button>
          <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContentBox;
