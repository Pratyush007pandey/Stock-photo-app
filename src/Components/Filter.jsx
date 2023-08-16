import React, { useContext } from "react";
import "./Filter.css";
import noteContext from "../Context/notes/noteContext";
import { useNavigate } from "react-router-dom";

const Filter = ({ onLand }) => {
  let a = useContext(noteContext);

  const navigate = useNavigate();

  const handleFilter = (key) => {
    a.setFilter(key);
    a.setSearch(key);
    a.setActivePg(1);

    if (a.recent.includes(key)) {
      let filters = a.recent.filter((item) => item != key);
      a.setRecent(filters);
      a.setRecent((prevRecent) => {
        const newRecent = [key, ...prevRecent.slice(0, 9)];
        return newRecent;
      });
    } else {
      a.setRecent((prevRecent) => {
        const newRecent = [key, ...prevRecent.slice(0, 9)];
        return newRecent;
      });
    }
    navigate("/search");
  };
  return (
    <div>
      <div className="filter-container">
        {a.recent.map((item) => {
          return (
            <a
              key={item}
              onClick={(event) => handleFilter(event.target.innerText)}
              value={item}
            >
              {item}
            </a>
          );
        })}
      </div>
      {!onLand && a.filter != "" ? (
        <div className="filter-container sub-container">
          <p>{a.filter}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Filter;
