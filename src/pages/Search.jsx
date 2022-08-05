import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import CardItem from '../shared/CardItem';
import { CircularProgress } from '@mui/material';



const Search = () => {
  const [searchedData, setSearchedData] = useState();
  let { id } = useParams();

  useEffect(() => {
    axios
      .get('https://healthy-food-ed8b5-default-rtdb.firebaseio.com/all.json')
      .then(({ data }) => {
        setSearchedData(
          data.filter((e) => {
            return e.title.toLowerCase().includes(id.toLowerCase());
          })
        );
      });
  }, [id]);
  return (
    <>

      {!searchedData ? (<div className="text-center p-5 m-5">
        <h1 className="p-5 text-color"><CircularProgress /> </h1>
      </div> ): searchedData.length === 0 ? (
        <div className="text-center p-5 m-5">
          <h1 className="p-5 text-color">No result found </h1>
        </div>
      ) : (
        <div className="container py-2">
          <h1 className="p-3 text-color">
            About {searchedData.length} results :
          </h1>
          <div className=" row  p-3 g-3">
            {searchedData.map((item) => (
              <div key={item.id} className="col-lg-3 col-md-4">
                <CardItem key={item.id} item={item} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Search;


