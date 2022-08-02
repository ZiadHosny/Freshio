import React, { useEffect } from 'react';
import { useContext } from 'react';
import { dataApiContext } from '../context/ApiContext';
import Sidebar from '../shared/sidebar/Sidebar';
import './Category.css';
import CardItem from '../shared/CardItem';
import Loading from './Loading';

export default function Category() {
  let params = window.location.pathname;
  let { category, getData } = useContext(dataApiContext);

  useEffect(() => {
    getData(params);
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <div className="row p-3 g-3">
            {category ? (
              category.map((item) => (
                <div key={item.id} className="col-lg-3 col-md-4">
                  <CardItem item={item} params={params} />
                </div>
              ))
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
