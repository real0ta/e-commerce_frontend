import React, { useState } from "react";
import styles from "./Search.module.css";
import { useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        className={styles.search}
        type="search"
        onChange={(e) => setSearchTerm(e.target.value)}
        name="search"
        placeholder="Search products"
        value={searchTerm}
      />
      <button>
        <IoSearchSharp />
      </button>
    </form>
  );
};

export default Search;
