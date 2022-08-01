import React, { useContext, useEffect, useState } from 'react';
import { HiOutlineArrowsExpand } from 'react-icons/hi';
import { BsHeart } from 'react-icons/bs';
import { BsHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { DetailsContext } from '../context/DetailsContext';
import { CartContext } from '../context/CartContext';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { UserAuth } from '../context/AuthContext';
import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

export default function CardItem({ item, params }) {
  const [isFav, setIsFav] = useState(false);
  let { setitem } = useContext(DetailsContext);
  const { setToCart } = useContext(CartContext);

  const { user } = UserAuth();
  const itemID = doc(db, 'users', `${user?.email}`);

  const addToCart = async () => {
    if (user?.email) {
      try {
        let dataFromDB = await getDoc(itemID);
        let allInCart = dataFromDB.data().inCart;
        const result = allInCart.find((e) => {
          return item.id !== e.id;
        });

        if (result) {
        } else {
          item['quantity'] = 1;
          allInCart.push(item);
        }

        await updateDoc(itemID, { inCart: allInCart });
      } catch (error) {
        console.log(error);
      }
    } else {
      alert('please log in first');
    }
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

  return (
    <div className=" col-md-3">
      <div className="border rounded p-3">
        <div className="d-flex justify-content-between">
          <Link
            to={`/details${params}/${item.id}`}
            onClick={() => setitem(item)}
          >
            <HiOutlineArrowsExpand className="fs-3 mt-1 icon-color" />
          </Link>
          <div onClick={saveItem}>
            {isFav ? (
              <BsHeartFill className="fs-3 mt-1 icon-color" />
            ) : (
              <BsHeart className="fs-3 mt-1 icon-color" />
            )}
          </div>
        </div>
        <img
          src={item.image}
          className="w-75 d-block m-auto img-height "
          alt="img"
        />
        <h5 className="text-height ">{item.title}</h5>
        <h5>Rate Item :</h5>
        <Stack spacing={1}>
          <Rating name="half-rating" defaultValue={3} precision={0.5} />
        </Stack>
        <h5>{item.price} EGP</h5>
        <button
          type="button"
          className="btn btn-outline-success d-block w-75 m-auto my-4"
          onClick={addToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
