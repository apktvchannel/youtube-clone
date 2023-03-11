import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (searchTerm) {
      navigate(`/youtube-clone/search/${searchTerm}`);

      searchTerm("");
    }
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "solid 1px #222222",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        backgroundColor: "#181818",
      }}
    >
      <input
        style={{ backgroundColor: "#181818", color: "white" }}
        className="search-bar"
        placeholder="Search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "gray" }}>
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
