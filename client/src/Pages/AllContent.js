import { useState, useEffect } from "react";
import "../CSS/AllContent.css";
import NewComment from "../NewComment";
import ContentBox from "../ContentBox";
import Search from "../Util/Search";

function AllContent({ currentUser }) {
  const [listOfThoughts, setListOfThoughts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);

  // RENDER ALL BLOGS

  useEffect(() => {
    fetch("/blogs")
      .then((resp) => resp.json())
      .then((blogs) => setListOfThoughts(blogs));
  }, []);

  // REMOVE BLOG

  function handleDelete(id) {
    const newList = listOfThoughts.filter((blog) => blog.id !== id);
    setListOfThoughts(newList);
  }

  // ADD NEW BLOG

  function handleUserThoughts(something) {
    const list = something;
    const newList = [...listOfThoughts, list];
    setListOfThoughts(newList);
  }

  // EDIT BLOG

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
    setListOfThoughts(editThoughts);
  }

  const thoughts = listOfThoughts
    .filter((blog) => {
      return blog.username.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .map((thought, index) => (
      <ContentBox
        onDelete={handleDelete}
        key={index}
        title={thought.title}
        thoughts={thought.thought}
        currentUser={currentUser}
        id={thought.id}
        onSubmitEdit={handleEdit}
        userId={thought.user_id}
        username={thought.username}
        dateCreated={thought.created_at}
      />
    ));

  return (
    <>
      <div className="thoughts">
        <NewComment
          handleUserThoughts={handleUserThoughts}
          currentUser={currentUser}
        />
        <Search searchValue={searchTerm} onSearch={setSearchTerm} />
      </div>
      {thoughts}
    </>
  );
}

export default AllContent;
