import { FormEvent, useState } from "react";
import "./SearchForm.css";

interface Props {
  setSearchTerm: (term: string) => void;
}

const SearchForm = ({ setSearchTerm }: Props) => {
  const [term, setTerm] = useState("");

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    setSearchTerm(term);
  };

  return (
    <form className="SearchForm" onSubmit={submitHandler}>
      <label htmlFor="term">Search for GIFs</label>
      <input
        type="text"
        name="term"
        id="term"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
