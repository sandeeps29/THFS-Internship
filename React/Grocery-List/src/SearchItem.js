import React from "react";

const SearchItem = ({ search, setSearch }) => {
  return (
    <form className="searchForm" onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="searchItem">Search Item</label>
      <input
        autoFocus
        type="text"
        placeholder="Search Items"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </form>
  );
};
export default SearchItem;
