import { useState } from "react";

export const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const onSearch = () => {
    console.log('redirect')
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        value={searchInput}
      />
      <button onClick={onSearch}>Search</button>
    </>
  );
};
