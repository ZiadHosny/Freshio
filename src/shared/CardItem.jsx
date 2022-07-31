import React, { useContext, useEffect, useState } from 'react';
import { HiOutlineArrowsExpand } from 'react-icons/hi';
import { BsHeart } from 'react-icons/bs';
import { BsHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { DetailsContext } from '../context/DetailsContext';
import { UserAuth } from '../context/AuthContext';
import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

export default function CardItem({ item, params }) {
  const [isFav, setIsFav] = useState(false);
  let { setitem } = useContext(DetailsContext);

  const { user } = UserAuth();
  const itemID = doc(db, 'users', `${user?.email}`);

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
        <img src={item.image} className="w-75 d-block m-auto img-height " />
        <h5 className="text-height ">{item.title}</h5>
        <h5>{item.price} EGP</h5>
        <button
          type="button"
          className="btn btn-outline-success d-block w-75 m-auto my-4"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
