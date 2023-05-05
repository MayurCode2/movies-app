import "./Header.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const [query, setQuery] = useState("");

  return (
    <header>
      <Link to="/">
        <h1>Wookie Movies</h1>
      </Link>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        ></input>
        <i></i>
      </div>
    </header>
  );
}

export default Header;
