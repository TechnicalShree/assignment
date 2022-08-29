import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/MainContent.css";

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
    <div className="container">
      <div className="userSearch">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="searchInput"
        />
        <button className="searchBtn" onClick={searchHandler}>
          Search
        </button>
      </div>
      <ul>
        {display &&
          results?.map((result, idx) => {
            if (result.title.includes(search)) {
              return (
                <li key={idx} className="list">
                  <span>{result.title}</span>
                  {` :-  ${result.subtitle}`}
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
