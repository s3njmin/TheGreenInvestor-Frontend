import React from 'react';
import Popup from 'reactjs-popup';
import '../index.css';
import { Button } from '@mantine/core';
import { motion } from "framer-motion";

import { variants } from "../assets/Animations";

import Login from './Login';
import Login2 from './Login2';

const LoginPopUp = () => (
  <Popup
    trigger={<Button compact
      color="teal"
      style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
    >
      Login
    </Button>}
    modal
    nested
  >
    {close => (
      <div className="login-modal">

        {/* <button className="close" onClick={close}>
          &times;
        </button> */}
        <motion.div initial="hidden_ease" animate="visible_ease" exit="hidden_ease" variants={variants} className="col-md-12">
        <Login2 onClick={close}/>
        </motion.div>

      </div>
    )}
  </Popup>
);

export default LoginPopUp;