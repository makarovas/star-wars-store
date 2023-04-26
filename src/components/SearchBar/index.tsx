import { ISearchBar } from "../../types";

const SearchBar = ({ handleTextInputChange }: ISearchBar) => (
  <div id="search-container">
    <input
      data-testid="searchbar"
      type="text"
      placeholder="Search for person name"
      onChange={handleTextInputChange}
    />
  </div>
);

export default SearchBar;
