import React, { useEffect } from 'react';
import { useContext } from 'react';
import { subApiContext } from '../context/SubCategoryContext';
import SubSidebar from './sidebar/SubSidebar';
import './Category.css';
import CardItem from './CardItem';
import Loading from './Loading';

export default function SubCategory() {
  let params = window.location.pathname;
  let { subCategory, getSubData } = useContext(subApiContext);
  useEffect(() => {
    getSubData(params);
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <SubSidebar />
        </div>
        <div className="col-md-9">
          <div className="row p-3 g-3">
            {subCategory.length!==0 || !subCategory
             ? 
              subCategory.map((item) => (
                <div key={item.id} className="col-md-3">
                  <CardItem item={item} params={params} />
                </div>
              ))
             : 
             (
              <Loading/>
             )
            }
          </div>
        </div>
      </div>
    </div>
  );
}
