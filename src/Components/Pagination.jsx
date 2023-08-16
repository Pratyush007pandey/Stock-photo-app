import React, { useContext } from "react";
import "./Pagination.css";
import noteContext from "../Context/notes/noteContext";

const Pagination = () => {
  const a = useContext(noteContext);
  const pn = a.totalPage;
  let start = a.activepg - 4;
  let end = a.activepg + 5;

  switch (start) {
    case -1:
      start = 1;
    case -2:
      start = 1;
    case -3:
      start = 1;
    case 0:
      start = 1;
  }
  if (end > pn) {
    end = pn;
  }

  const paginationButtons = [];
  for (let i = start; i <= end; i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => handlePageChange(i)}
        className={a.activepg === i ? "active" : ""}
      >
        {i}
      </button>
    );
  }

  const handlePageChange = (i) => {
    a.setActivePg(i);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="pagination-container">
      {start > 1 ? (
        <button onClick={() => handlePageChange(1)}>«</button>
      ) : (
        <></>
      )}

      {paginationButtons}
      {end < pn ? (
        <button onClick={() => handlePageChange(pn)}>»</button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Pagination;
