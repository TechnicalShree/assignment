import React, { useEffect, useState } from "react";
// import { Search } from "@mui/icons-material";
import { Typography } from "@mui/material";
import axios from "axios";

export default function MainContent() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        "https://mocki.io/v1/f9e16211-d239-48a4-a1dd-4de8cf4bfa15"
      );
      console.log(res.data.results);
      setResults(res.data.results);
    })();

    return () => {
      setDisplay(false);
    };
  }, []);

  const searchHandler = () => {
    setDisplay(true);
  };

  return (
    <div>
      <Typography>Hello there..</Typography>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
      />
      <button onClick={searchHandler}>Search</button>
      <ul>
        {display &&
          results?.map((result, idx) => {
            if (result.title.includes(search)) {
              return (
                <li key={idx}>
                  <span>{result.title}</span>
                  {`  ${result.subtitle}`}
                </li>
              );
            }
          })}
      </ul>
    </div>
  );
}

// API data

// URL = https://mocki.io/v1/f9e16211-d239-48a4-a1dd-4de8cf4bfa15

// {
//   "results": [
//   {
//   "title": "Frontend1",
//   "subtitle": "testing"
//   },
//   {
//   "title": "Frontend2",
//   "subtitle": "testing"
//   },
//   {
//   "title": "Frontend3",
//   "subtitle": "testing"
//   },
//   {
//   "title": "Frontend4",
//   "subtitle": "testing"
//   },
//   {
//   "title": "Frontend5",
//   "subtitle": "testing"
//   },
//   {
//   "title": "Backend1",
//   "subtitle": "testing"
//   },
//   {
//   "title": "Backend2",
//   "subtitle": "testing"
//   },
//   {
//   "title": "Backend3",
//   "subtitle": "testing"
//   },
//   {
//   "title": "Backend4",
//   "subtitle": "testing"
//   },
//   {
//   "title": "Backend5",
//   "subtitle": "testing"
//   }
//   ]
//   }
