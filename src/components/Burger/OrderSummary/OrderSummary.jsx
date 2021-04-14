import React, { Fragment } from 'react';

import Button from '../../UI/Button/Button';
 
import './OrderSummary.module.css';
 
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            );
        });
    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>Ingredients you chose:</p>
            <ul>
               {ingredientSummary} 
            </ul>
            <Button btnType='Danger' clicked={props.purchaseCanceled}>Cancel</Button>
            <Button btnType='Success' clicked={props.purchaseContinued}>Continue</Button>
        </Fragment>
    );
}
 
export default orderSummary;