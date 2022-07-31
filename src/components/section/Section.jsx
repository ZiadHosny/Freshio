import React, {useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from '../card/card';
import '../feedBack/FeedBack.css'


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
        <div
    className="arrow-left"
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
        <div
    className="arrow-right"
      onClick={onClick}
    />
    );
  }
const Section = ({title}) => {
  const [products,setProducts] = useState([
    {
      title: 'item1',
      category: 'category1'
    },
    {
      title: 'item2',
      category: 'category2'
    },
    {
      title: 'item3',
      category: 'category3'
    },
    {
      title: 'item1',
      category: 'category1'
    },
    {
      title: 'item2',
      category: 'category2'
    },
    {
      title: 'item3',
      category: 'category3'
    },
    {
      title: 'item1',
      category: 'category1'
    },
    {
      title: 'item2',
      category: 'category2'
    },
    {
      title: 'item2',
      category: 'category2'
    },
    {
      title: 'item3',
      category: 'category3'
    },
    {
      title: 'item1',
      category: 'category1'
    },
    {
      title: 'item2',
      category: 'category2'
    },
    {
      title: 'item3',
      category: 'category3'
    },
    {
      title: 'item1',
      category: 'category1'
    },
    {
      title: 'item2',
      category: 'category2'
    },
    {
      title: 'item1',
      category: 'category1'
    },
    {
      title: 'item2',
      category: 'category2'
    },
    {
      title: 'item3',
      category: 'category3'
    },
    {
      title: 'item1',
      category: 'category1'
    },
    {
      title: 'item2',
      category: 'category2'
    },
    {
      title: 'item3',
      category: 'category3'
    },
    {
      title: 'item1',
      category: 'category1'
    },
    {
      title: 'item2',
      category: 'category2'
    },
    {
      title: 'item1',
      category: 'category1'
    },
    {
      title: 'item2',
      category: 'category2'
    },
    {
      title: 'item3',
      category: 'category3'
    },
    {
      title: 'item1',
      category: 'category1'
    },
    {
      title: 'item2',
      category: 'category2'
    },
    {
      title: 'item3',
      category: 'category3'
    },
    {
      title: 'item1',
      category: 'category1'
    },
    {
      title: 'item2',
      category: 'category2'
    },
    {
      title: 'item1',
      category: 'category1'
    },
    {
      title: 'item2',
      category: 'category2'
    },
    {
      title: 'item3',
      category: 'category3'
    },
    {
      title: 'item1',
      category: 'category1'
    },
    {
      title: 'item2',
      category: 'category2'
    },
    {
      title: 'item3',
      category: 'category3'
    },
    {
      title: 'item1',
      category: 'category1'
    },
    {
      title: 'item2',
      category: 'category2'
    },
    {
      title: 'item1',
      category: 'category1'
    },
    {
      title: 'item2',
      category: 'category2'
    },
    {
      title: 'item3',
      category: 'category3'
    },
    {
      title: 'item1',
      category: 'category1'
    },
    {
      title: 'item2',
      category: 'category2'
    },
    {
      title: 'item3',
      category: 'category3'
    },
    {
      title: 'item1',
      category: 'category1'
    },
    {
      title: 'item2',
      category: 'category2'
    },
    {
      title: 'item1',
      category: 'category1'
    },
    {
      title: 'item2',
      category: 'category2'
    },
    {
      title: 'item3',
      category: 'category3'
    },
    {
      title: 'item1',
      category: 'category1'
    },
    {
      title: 'item2',
      category: 'category2'
    },
    {
      title: 'item3',
      category: 'category3'
    },
    {
      title: 'item1',
      category: 'category1'
    },
    {
      title: 'item2',
      category: 'category2'
    }
  ]);


  const [items, setItems]= useState(products);

  function filterItem(e) {
   if (e.target.name === 'all') {
      return setItems(products);
    };

    const updatedItems = products.filter((elem) => {
      return elem.category === e.target.name;
    });
    setItems(updatedItems);
    
  }
  console.log("items",items)
  console.log(products)

  const settingss = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    speed: 250,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: true,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (<div className='container-lg my-5'>
    <div className='container-lg text-center d-md-flex justify-content-between mb-4'>
      <div>
        <h1 className='container-lg p-0 fw-bolder'>Featured Products</h1>
      </div>
      <div>
        <button onClick={filterItem} name="all" className="btn btn-outline-success btn-rounded m-2" data-mdb-ripple-color="dark">All</button>
        <button onClick={filterItem} name="category1" className="btn btn-outline-success btn-rounded m-2" data-mdb-ripple-color="dark">Catgery1</button>
        <button onClick={filterItem} name="category2" className="btn btn-outline-success btn-rounded m-2" data-mdb-ripple-color="dark">Catgery2</button>
        <button onClick={filterItem} name="category3" className="btn btn-outline-success btn-rounded m-2" data-mdb-ripple-color="dark">Catgery3</button>
      </div>
    </div>
    <div>
      <Slider {...settingss}>
        {
          items.map((item,i)=>{
            return <Card title={item.title} category={item.category} price="60.99 EG" url="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"/>
          })
        }
      </Slider>
    </div>
  
  </div>
  );
};

export default Section;
