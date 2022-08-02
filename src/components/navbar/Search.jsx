import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import './Search.css';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [searchedTerm, setSearchedTerm] = useState('');
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const search = async () => {
    if (checked) {
      navigate(`/search/${searchedTerm}`);
      setSearchedTerm('');
    }
    setChecked(!checked);
  };

  return (
    <div className="box pe-5">
      <input type="checkbox" id="check" onChange={search} checked={checked} />
      <div className="search-box">
        <input
          type="text"
          placeholder="Type here..."
          value={searchedTerm}
          onChange={(e) => {
            setSearchedTerm(e.target.value);
          }}
        />
        <label htmlFor="check" className="icon">
          <BiSearchAlt />
        </label>
      </div>
    </div>
  );
};

export default Search;
