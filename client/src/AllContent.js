import { useState, useEffect } from "react";
import "./AllContent.css";
import NewComment from "./NewComment";
import ContentBox from "./ContentBox";

function AllContent({ user }) {
  const [listOfThoughts, setListOfThoughts] = useState([]);

  useEffect(() => {
    fetch("/content")
      .then((resp) => resp.json())
      .then((stuff) => setListOfThoughts(stuff));
  }, []);

  function handleDelete(title) {
    const newList = listOfThoughts.filter((blog) => blog.title !== title);
    setListOfThoughts(newList);
  }

  function handleUserThoughts(something) {
    const list = something;
    const newList = [...listOfThoughts, list];
    setListOfThoughts(newList);
  }

  const thoughts = listOfThoughts.map((thought, index) => (
    <ContentBox
      onDelete={handleDelete}
      key={index}
      title={thought.title}
      thoughts={thought.thought}
      user={user}
      // onSubmitEdit={handleEdit}
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
