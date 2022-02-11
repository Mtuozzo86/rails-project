import "./AllContent.css";
import AddNewCommentField from "./AddNewCommentField";
import { useState } from "react";

function NewComment({ handleUserThoughts, currentUser }) {
  const [isCommenting, setIsCommenting] = useState(false);

  function handleClick() {
    setIsCommenting(true);
  }

  function handleCancel() {
    setIsCommenting(false);
  }

  return (
    <div className="container">
      <h4 onClick={handleClick}>Add New Thought</h4>
      {isCommenting ? (
        <AddNewCommentField
          onCancelClick={handleCancel}
          liftUserThoughts={handleUserThoughts}
          currentUser={currentUser}
        />
      ) : null}
    </div>
  );
}

export default NewComment;
