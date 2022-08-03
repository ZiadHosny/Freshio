import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function HomeCategory({title,data}) {
    const [items, setItems] = useState(data);
    useEffect(() => {
        setItems(data);
      }, [data]);

 return<>
 <section className='bg-light'>
 <div className="container py-5">
    <div className="row ">
        <h1 className='fw-bolder my-3'>{title}</h1>
 {
     items
     ?
     items.map((item,i)=>(
         <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
        <Link className='' to={item.title.toLowerCase().replace(' ','').replace('diet','').replace('fruits','fruit')}>
         <div className="item hover-effect m-3 text-center text-color shadow">
            
            <img src={item.image} className='w-100 h-img' alt="" />
            <h3  className='my-3 py-3'>{item.title}</h3>
        </div>
        </Link>
       </div>
            ))
            :''
        }
    </div>
</div>

 </section>
 </>
}
