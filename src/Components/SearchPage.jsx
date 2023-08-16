import React, { useEffect, useContext, useState } from "react";
import noteContext from "../Context/notes/noteContext";
import Header from "./Header";
import Search from "./Search";
import Filter from "./Filter";
import Gallary from "./Gallary";
import Pagination from "./Pagination";
import axios from "axios";
import Filler from "./Filler";
import "./SearchPage.css";

const SearchPage = () => {
  const [loading, setLoading] = useState(true);
  let a = useContext(noteContext);

  useEffect(() => {
    fetchData();
  }, [a.activepg, a.search]);

  const fetchData = async () => {
    try {
      let response = await axios.get(
        `https://api.unsplash.com/search/photos?page=${a.activepg}&query=${a.search}&client_id=jtmq7v20faxiA8TC13F3upmk0UlEKlm7jrPtJHse5Vk`
      );

      a.setState(response.data.results);
      a.setTotalPage(response.data.total_pages);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Header onSearch>
        <Search />
      </Header>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Filter />
      {loading ? (
        <div className="loading-container">
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <>
          <Gallary />
          <Pagination />
        </>
      )}
    </div>
  );
};

export default SearchPage;
