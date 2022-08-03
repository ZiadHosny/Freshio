import React, { useContext, useEffect, useState } from 'react';
import { HiOutlineArrowsExpand } from 'react-icons/hi';
import { BsHeart } from 'react-icons/bs';
import { BsHeartFill } from 'react-icons/bs';

import { DetailsContext } from '../context/DetailsContext';
import { CartContext } from '../context/CartContext';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { UserAuth } from '../context/AuthContext';
import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { ModalContext } from '../context/ModalContext';

export default function CardItem({ item }) {
  const { setModal } = ModalContext();
  const [isFav, setIsFav] = useState(false);
  let { setitem } = useContext(DetailsContext);
  const { addToCartInFirebase } = useContext(CartContext);

  const { user } = UserAuth();
  const itemID = doc(db, 'users', `${user?.email}`);

  const addToCart = () => {
    addToCartInFirebase(item);
  };

  const saveItem = async () => {
    if (user?.email) {
      setIsFav(!isFav);

      if (!isFav) {
        await updateDoc(itemID, {
          favorites: arrayUnion(item),
        });
      } else {
        try {
          let dataFromDB = await getDoc(itemID);
          const result = dataFromDB.data().favorites.filter((e) => {
            return item.id !== e.id;
          });

          await updateDoc(itemID, { favorites: result });
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      alert('please log in first');
    }
  };

  const find = async () => {
    if (user?.email) {
      let dataFromDB = await getDoc(itemID);
      let find = dataFromDB.data().favorites.find((e) => {
        return e.id === item.id;
      });
      if (find) {
        return true;
      } else {
        return false;
      }
    }
  };

  useEffect(() => {
    find().then((e) => {
      setIsFav(e);
    });
  }, [find]);

  const viewDetails = () => {
    setModal('details');
    setitem(item);
  };

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <div className="border rounded p-3 ">
      <div className="d-flex justify-content-between">
        <HiOutlineArrowsExpand
          style={{ cursor: 'pointer' }}
          onClick={() => viewDetails()}
          className="fs-3 mt-1 icon-color"
        />

        <div onClick={saveItem}>
          {isFav ? (
            <BsHeartFill
              style={{ cursor: 'pointer' }}
              className="fs-3 mt-1 icon-color"
            />
          ) : (
            <BsHeart
              style={{ cursor: 'pointer' }}
              className="fs-3 mt-1 icon-color"
            />
          )}
        </div>
      </div>
      <img
        src={item.image}
        className="w-75 d-block m-auto img-height "
        alt="img"
      />
      <h5 className="text-height text-center">
        {truncateString(item.title, 30)}
      </h5>
      <h5>Rate Product :</h5>
      <Stack className="text-center" spacing={1}>
        <Rating name="half-rating" defaultValue={3} precision={0.5} />
      </Stack>
      {item.sale ? (
        <div className="d-flex justify-content-center">
          <h5 className="text-decoration-line-through mx-2">
            {item.price} EGP
          </h5>
          <h5>{Math.floor(item.price * 0.8)} EGP</h5>
        </div>
      ) : (
        <h5 className="text-center">{item.price} EGP</h5>
      )}

      <button
        type="button"
        className="btn btn-outline-success d-block w-75 m-auto my-4"
        onClick={addToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}
