import React, { Fragment } from 'react';

import Backdrop from '../Backdrop/Backdrop';
 
import classes from './Modal.module.css';
 
const modal = (props) => (
    <Fragment>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div 
            className={classes.Modal}
            style={{ 
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Fragment>
);
 
export default modal;