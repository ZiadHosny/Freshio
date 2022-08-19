import React, { useEffect } from 'react';
import { useContext } from 'react';
import { subApiContext } from '../context/SubCategoryContext';
import './Category.css';
import CardItem from './CardItem';
import Loading from './Loading';
import SubDrawer from './drawer/SubDrawer';
import { useLocation } from 'react-router-dom';

export default function SubCategory() {
  const location = useLocation();
  let params = location.pathname;
  let { subCategory, getSubData } = useContext(subApiContext);
  useEffect(() => {
    getSubData(params);
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <SubDrawer />
        </div>
        <div className="col-md-9">
          <div className="row p-3 g-3">
            {!subCategory || subCategory.length !== 0 ? (
              subCategory.map((item) => (
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
