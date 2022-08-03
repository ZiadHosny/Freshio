import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Comment from '../comment/Comment';
import './FeedBack.css';

function SampleNextArrow(props) {
  const { onClick } = props;
  return <div className="arrow-left" onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return <div className="arrow-right" onClick={onClick} />;
}

const FeedBack = () => {
  const settingss = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    speed: 250,
    autoplaySpeed: 4000,
    cssEase: 'linear',
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

  return (
    <>
      <section className="bg-light py-5">
        <div className="text-center">
          <h2 className="fw-bolder mb-3">Our Customer Feedback </h2>
          <p>We value the experimentation, the reformation of the message.</p>
        </div>

        <Slider {...settingss} className="container-lg">
          <Comment
            name="Johny Cash"
            hours="6"
            url="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
          />
          <Comment
            name="Adam Zampa"
            hours="6"
            url="https://demo.casethemes.net/organio/wp-content/uploads/2021/08/h7-testimonial1-78x78.jpg"
          />
          <Comment
            name=" Josh Philippe "
            hours="12"
            url="https://demo.casethemes.net/organio/wp-content/uploads/2021/08/h7-testimonial1-78x78.jpg"
          />
          <Comment
            name=" Alex Carey "
            hours="8"
            url="https://demo.casethemes.net/organio/wp-content/uploads/2021/08/h7-testimonial3-78x78.jpg"
          />
          <Comment
            name=" Sinira Fira "
            hours="2"
            url="https://demo.casethemes.net/organio/wp-content/uploads/2021/03/author1-78x78.jpg"
          />
          <Comment
            name=" Sherri Horton "
            hours="10"
            url="https://demo.casethemes.net/organio/wp-content/uploads/2021/03/author2-78x78.jpg"
          />
          <Comment
            name=" Aliesha Preston "
            hours="5"
            url="https://demo.casethemes.net/organio/wp-content/uploads/2021/03/author3-78x78.jpg"
          />
        </Slider>
      </section>
    </>
  );
};
export default FeedBack;
