import { useState } from "react";

const StarshipSearch = ({ getStarship }) => {
  const [starSearch, setStarSearch] = useState("");

  const handleChange = (e) => {
    setStarSearch(e.target.value);
  };

  const handleSearch = () => {
    getStarship(starSearch);
  };


  return (
    <section>
      <h1>Star Wars API</h1>
      <h3>Search</h3>
        <label htmlFor="Search">Search Term</label>
        <input
          type="text"
          value={starSearch}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSearch}>Search</button>
    </section>
  );
};

export default StarshipSearch;