import { useState, useEffect } from "react";
import "./AllContent.css";
import NewComment from "./NewComment";
import ContentBox from "./ContentBox";

function AllContent({ currentUser }) {
  console.log(currentUser);

  const [listOfThoughts, setListOfThoughts] = useState([]);

  useEffect(() => {
    fetch("/content")
      .then((resp) => resp.json())
      .then((stuff) => setListOfThoughts(stuff));
  }, []);

  function handleDelete(id) {
    const newList = listOfThoughts.filter((blog) => blog.id !== id);
    setListOfThoughts(newList);
  }

  function handleUserThoughts(something) {
    const list = something;
    const newList = [...listOfThoughts, list];
    setListOfThoughts(newList);
  }

  function handleEdit(edits) {
    const editThoughts = listOfThoughts.map((thought) => {
      if (thought.id === edits.id) {
        return {
          ...thought,
          thought: edits.thought,
        };
      } else {
        return thought;
      }
    });
    console.log(editThoughts);
    setListOfThoughts(editThoughts);
  }

  const thoughts = listOfThoughts.map((thought, index) => (
    <ContentBox
      onDelete={handleDelete}
      key={index}
      title={thought.title}
      thoughts={thought.thought}
      currentUser={currentUser}
      id={thought.id}
      onSubmitEdit={handleEdit}
    />
  ));

  return (
    <div className="thoughts">
      <NewComment handleUserThoughts={handleUserThoughts} />
      {thoughts}
    </div>
  );
}

export default AllContent;
