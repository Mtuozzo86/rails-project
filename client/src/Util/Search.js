import "./Search.css";

function Search({ onSearch, searchValue }) {
  return (
    <div className="search-container">
      <div className="searchbar">
        <input
          placeholder="Search user..."
          className="main-page-search"
          value={searchValue}
          type="text"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Search;
