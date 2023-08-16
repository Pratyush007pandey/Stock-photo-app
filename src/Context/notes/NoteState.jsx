import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const [state, setState] = useState([]);
  const [activepg, setActivePg] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [search, setSearch] = useState("office");
  const [recent, setRecent] = useState([
    "Animal",
    "Car",
    "Colors",
    "Pets",
    "Balloons",
    "Freedom",
    "Party",
    "Europe",
    "India",
    "USA",
  ]);
  const [filter, setFilter] = useState("");
  return (
    <NoteContext.Provider
      value={{
        state,
        setState,
        activepg,
        setActivePg,
        totalPage,
        setTotalPage,
        search,
        setSearch,
        recent,
        setRecent,
        filter,
        setFilter,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
