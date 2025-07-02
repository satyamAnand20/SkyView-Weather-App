import { CiSearch } from "react-icons/ci";
import "../css/SearchBar.css";
function SearchBar({ onSubmit, searchQuery, setSearchQuery }) {
  return (
    <form onSubmit={onSubmit} className="search-form">
      <input
        className="search-input"
        placeholder="Search City"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      ></input>
      <button className="search-button">
        <CiSearch className="search-icon" />
      </button>
    </form>
  );
}
export default SearchBar;
