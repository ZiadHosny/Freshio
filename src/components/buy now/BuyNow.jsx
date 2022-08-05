import { Alert, Button, Snackbar, TextField } from '@mui/material';
import { Container } from '@mui/system';
import React, { useContext, useState } from 'react';
import { FaCcVisa } from 'react-icons/fa';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { CartContext } from '../../context/CartContext';
import { ModalContext } from '../../context/ModalContext';
import { useForm, Controller } from "react-hook-form";
import './BuyNow.css';

const BuyNow = ({ onClick }) => {
  const { setModal } = ModalContext();
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState('');
  const [card, setCard] = useState('');
  const { clearAll } = useContext(CartContext);

  const { visaCard, handleSubmit, formState: { errors },control,watch } = useForm();

  const buyNow = () => {
    if (card && address) {
      setOpen(true);
      setTimeout(() => {
        setModal('');
      }, 2000);
      clearAll();
    }
  };
 

  return (
    <Container
      className="BuyNowModal"
      component="main"
      maxWidth="xs"
      onClick={onClick}
    >
      <div className="col rounded bg-white p-5">
        <h5 className="text-center text-color">
          Are you sure you want to buy all Product in the Cart?
        </h5>

        <div className="col d-flex align-items-center mx-2">
          <FaCcVisa size={60} className="text-color mx-1" />
          <TextField
            fullWidth
            margin="normal"
            required
            type="tel"
            id="cardNumber"
            label="Card Number"
            name="cardNumber"
            autoComplete="cardNumber"
            autoFocus
            value={card}
            onChange={(e) => {
              setCard(e.target.value);
              
            }}
          />  
        </div>
        <div className="col d-flex align-items-center mx-1">
          <MdOutlineDeliveryDining size={60} className="text-color mx-1" />
          <TextField
            fullWidth
            margin="normal"
            required
            type="text"
            id="address"
            label="Your Address"
            name="address"
            autoComplete="address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div className="d-flex  justify-content-center m-2">
          <Button variant="contained" onClick={buyNow} className="bg-color">
            Ok
          </Button>
          <Button
            onClick={() => {
              setModal('');
            }}
            variant="contained"
            sx={{ ml: 2 }}
            style={{ backgroundColor: 'red' }}
          >
            Cancel
          </Button>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={3000}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          We Will Deliver you in {address}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default BuyNow;
