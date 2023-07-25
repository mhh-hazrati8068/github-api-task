import React, { useState } from "react";
import styles from "../styles/SearchInput.module.scss";

interface SearchInputProps {
  onFilter: (filterText: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onFilter }) => {
  const [filterText, setFilterText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setFilterText(text);
    if (text.length >= 3) {
      onFilter(text);
    } else {
      onFilter("");
    }
  };

  return (
    <div className={styles.searchInput}>
      <input
        type="text"
        placeholder="Filter repositories by name..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;
