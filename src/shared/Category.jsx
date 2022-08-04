import React, { useEffect } from 'react';
import { useContext } from 'react';
import { dataApiContext } from '../context/ApiContext';
import './Category.css';
import CardItem from '../shared/CardItem';
import Loading from './Loading';
import Drawer from './drawer/Drawer';

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
          <Drawer />
        </div>
        <div className="col-md-9">
          <div className="row p-3 g-3">
            {!category || category.length !== 0 ? (
              category.map((item) => (
                <div key={item.id} className="col-xl-3 col-lg-4 col-sm-6">
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
