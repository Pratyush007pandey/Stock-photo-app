import React, { useEffect, useContext, useState } from "react";
import Header from "./Header";
import Search from "./Search";
import Filter from "./Filter";
import Gallary from "./Gallary";
import axios from "axios";
import noteContext from "../Context/notes/noteContext";
import Hero from "./Hero";
import Filler from "./Filler";
import Footer from "./Footer";

const LandingPage = () => {
  const a = useContext(noteContext);
  const [loading, setLoading] = useState(true);
  const [onLanding, setOnLanding] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let response = await axios.get(
        `https://api.unsplash.com/photos/random?client_id=jtmq7v20faxiA8TC13F3upmk0UlEKlm7jrPtJHse5Vk&count=30`
      );
      console.log(response.data);

      a.setState(response.data);
      setLoading(false); // Data is fetched, set loading to false
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // In case of an error, set loading to false
    }
  };

  return (
    <>
      <Header>
        <Search isRead />
      </Header>
      <Hero>
        <Search />
      </Hero>
      <Filter onLand />
      {loading ? (
        <div className="loading-container">
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <>
          <Gallary onLanding={onLanding} />
        </>
      )}

      <Footer />
    </>
  );
};

export default LandingPage;
