import React, { useState, useContext } from "react";
import "./Search.css";
import noteContext from "../Context/notes/noteContext";
import { useNavigate } from "react-router-dom";

const Search = ({ isRead, children }) => {
  let a = useContext(noteContext);
  const [localSearch, setLocalSearch] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    setLocalSearch(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      a.setFilter(localSearch);
      a.setSearch(localSearch);
      a.setActivePg(1);

      if (a.recent.includes(localSearch)) {
        let filters = a.recent.filter((item) => item != localSearch);
        a.setRecent(filters);
        a.setRecent((prevRecent) => {
          const newRecent = [localSearch, ...prevRecent.slice(0, 9)];
          return newRecent;
        });
      } else {
        a.setRecent((prevRecent) => {
          const newRecent = [localSearch, ...prevRecent.slice(0, 9)];
          return newRecent;
        });
      }
      navigate("/search");
    }
  };

  return (
    <>
      <input
        value={localSearch}
        onChange={handleSearch}
        className="search"
        onKeyDown={(event) => handleKeyDown(event)}
        placeholder="Search for Categories"
      ></input>
    </>
  );
};

export default Search;
