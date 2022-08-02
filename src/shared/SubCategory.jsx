import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { subApiContext } from '../context/SubCategoryContext';
import SubSidebar from './sidebar/SubSidebar';
import './Category.css';
import CardItem from './CardItem';
import Loading from './Loading';

export default function SubCategory() {
  let params = window.location.pathname;
  let { subCategory, getSubData } = useContext(subApiContext);

  const [subItems, setSubItems] = useState(subCategory);

  useEffect(() => {
    getSubData(params);
  }, []);

  useEffect(() => {
    setSubItems(subCategory);
  }, [subCategory]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <SubSidebar />
        </div>
        <div className="col-md-9">
          <div className="row p-3 g-3">
            {subItems ? (
              subItems.map((item, i) => (
                <div key={i} className="col-md-3">
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
