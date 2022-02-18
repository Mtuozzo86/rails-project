import "./CSS/AllContent.css";
import AddNewCommentField from "./AddNewCommentField";
import { useState } from "react";

function NewComment({ handleUserThoughts, currentUser }) {
  const [isCommenting, setIsCommenting] = useState(false);

  return (
    <div className="new-comment-container">
      <h4 onClick={() => setIsCommenting(true)}>Add New Thought</h4>
      {isCommenting ? (
        <AddNewCommentField
          onCancelClick={() => setIsCommenting(false)}
          liftUserThoughts={handleUserThoughts}
          currentUser={currentUser}
        />
      ) : null}
    </div>
  );
}

export default NewComment;
