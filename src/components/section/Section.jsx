import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardItem from '../../shared/CardItem';
import '../feedBack/FeedBack.css';

function SampleNextArrow({ onClick }) {
  return <div className="arrow-left" onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return <div className="arrow-right" onClick={onClick} />;
}
//to reset product in random order
// function randomArrayShuffle(array) {
//   var currentIndex = array.length,
//     temporaryValue,
//     randomIndex;
//   while (0 !== currentIndex) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//   return array;
// }

const Section = ({ title, data }) => {
  const [items, setItems] = useState(data);

  function filterItem(e) {
    if (e.target.name === 'all') {
      setItems(data);
    } else {
      const updatedItems = data.filter((elem) => {
        return elem.category === e.target.name;
      });
      setItems(updatedItems);
    }
  }

  const settingss = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    speed: 250,
    autoplaySpeed: 1000,
    cssEase: 'linear',
    pauseOnHover: true,

    nextArrow: <SampleNextArrow  />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    setItems(data);
  }, [data]);
  return (
    <div className="container-lg my-5">
      <div className="container-lg text-center d-md-flex justify-content-between mb-4">
        <div>
          <h1 className="container-lg p-0 fw-bolder cursor-pointer">{title}</h1>
        </div>
        {title === 'Featured Products' ? (
          <div>
            <button
              onClick={filterItem}
              name="all"
              className="btn btn-outline-success btn-rounded m-2"
              data-mdb-ripple-color="dark"
            >
              All
            </button>
            <button
              onClick={filterItem}
              name="fruits"
              className="btn btn-outline-success btn-rounded m-2"
              data-mdb-ripple-color="dark"
            >
              fruits
            </button>
            <button
              onClick={filterItem}
              name="chicken"
              className="btn btn-outline-success btn-rounded m-2"
              data-mdb-ripple-color="dark"
            >
              chicken
            </button>
            <button
              onClick={filterItem}
              name="vegetables"
              className="btn btn-outline-success btn-rounded m-2"
              data-mdb-ripple-color="dark"
            >
              vegetables
            </button>
            <button
              onClick={filterItem}
              name="keto"
              className="btn btn-outline-success btn-rounded m-2"
              data-mdb-ripple-color="dark"
            >
              keto
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
      <div>
        <Slider {...settingss}>
          {items
            ? items.map((item) => {
              return<div className="p-2" key={item.id}>
                 <CardItem item={item}  />
              </div>
              })
            : null}
        </Slider>
      </div>
    </div>
  );
};

export default Section;
