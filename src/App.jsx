import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import LandingPage from "./Components/LandingPage";
import NoteState from "./Context/notes/NoteState";
import SearchPage from "./Components/SearchPage";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <NoteState>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </NoteState>
    </BrowserRouter>
  );
}

export default App;
