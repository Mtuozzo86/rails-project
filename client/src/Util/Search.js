import "./Search.css";

function Search({ onSearch, searchValue }) {
  return (
    <div className="search-container">
      <input
        className="main-page-search"
        value={searchValue}
        type="text"
        onChange={(e) => onSearch(e.target.value)}
      />
      <button>Search</button>
    </div>
  );
}

export default Search;
