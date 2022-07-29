import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';
import './Header.css';

const slides = [
  {
    id: 0,
    url: 'https://cdn.shopify.com/s/files/1/0433/4292/1896/files/slider.01_5e2aa67b-bdc1-4034-9a0a-3e0a82d44828.png?v=1595146840',
    content: 'Fresh Vegetables',
  },
  {
    id: 1,
    url: 'https://cdn.shopify.com/s/files/1/0433/4292/1896/files/slider.02.png?v=1595150256',
    content: 'Fresh Fruits',
  },
  {
    id: 2,
    url: 'https://freebw.com/templates/oragnive-v1/images/bg-slide-01.jpg',
    content: 'Fresh Oranges',
  },
  {
    id: 3,
    url: 'https://templatekits.wpshow.me/dough-boi-bakery/wp-content/uploads/sites/2/2020/12/pexels-mariana-kurnyk-1756062.jpg',
    content: 'Fresh Bake',
  },
];

const Header = () => {
  const [index, setIndex] = useState(0);

  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.wobbly,
  });
  useEffect(
    () => void setInterval(() => setIndex((state) => (state + 1) % 4), 4000),
    []
  );
  return (
    <div className="headerContainer">
      {transitions.map(({ item, props, key }) => (
        <animated.div
          key={key}
          className="bg"
          style={{
            ...props,
            backgroundImage: `url(${item.url})`,
          }}
        >
          <h1>{item.content}</h1>
        </animated.div>
      ))}
    </div>
  );
};

export default Header;
