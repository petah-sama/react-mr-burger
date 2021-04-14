import React, { Fragment } from 'react'
 
import classes from './OrderSummary.module.css'
 
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

        </Fragment>
    );
}
 
export default orderSummary;