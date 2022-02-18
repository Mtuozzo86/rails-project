import "./Search.css";

function Search({ onSearch }) {
  // const [search, setSearch] = useState("");

  return (
    <div className="search-container">
      <input
        className="main-page-search"
        // value={search}
        type="text"
        onChange={(e) => onSearch(e.target.value)}
      />
      <button>Search</button>
    </div>
  );
}

export default Search;
