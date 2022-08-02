import { motion } from 'framer-motion';
import Backdrop from './Backdrop';
import { ModalContext } from '../../context/ModalContext';
import Login from '../../pages/auth/Login';
import Signup from '../../pages/auth/Signup';
import './Modal.css';
import Details from '../../pages/details/Details';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

const Modal = () => {
  const { setModal, modal } = ModalContext();

  return modal !== '' ? (
    <Backdrop>
      <motion.div
        onClick={() => {
          setModal('');
        }}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {modal === 'login' ? (
          <Login
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        ) : modal === 'signUp' ? (
          <Signup
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        ) : modal === 'details' ? (
          <Details
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        ) : null}
      </motion.div>
    </Backdrop>
  ) : null;
};

export default Modal;
