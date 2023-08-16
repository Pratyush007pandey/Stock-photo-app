import React from "react";
import "./Filler.css";
import { useNavigate } from "react-router-dom";

const Filler = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/search");
  };
  return (
    <div className="filler">
      <button className="filler-btn" onClick={handleClick}>
        Load More
      </button>
    </div>
  );
};

export default Filler;
