import "./AllContent.css";
import CommentField from "./CommentField";
import { useState } from "react";

function NewComment({ handleUserThoughts }) {
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
        <CommentField
          onCancelClick={handleCancel}
          liftUserThoughts={handleUserThoughts}
        />
      ) : null}
    </div>
  );
}

export default NewComment;
