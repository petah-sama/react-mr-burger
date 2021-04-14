import React, { Component, Fragment } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.8,
    meat: 1,
    bacon: 0.8
}

class BurgerBuilder extends Component {
    state = {
        ingredients : {
            cheese: 0,
            meat: 0,
            bacon: 0,
            salad: 0
        },
        totalPrice: 2,
        purchasable: false
    }
    
    updatePurchaseState (ingredients) {
        const purchasable = Object.values(ingredients).some(igQuantity => igQuantity > 0);
        this.setState({ purchasable });
    }

    addIngredientHandler = (type) => {
        const updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[type] += 1

        this.setState((prevState, props) => {
            return {
                ingredients: updatedIngredients,
                totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type]
            }
        });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] <= 0) {
            return;
        }

        const updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[type] -= 1

        this.setState((prevState, props) => {
            return {
                ingredients: updatedIngredients,
                totalPrice: prevState.totalPrice - INGREDIENT_PRICES[type]
            }
        });
        this.updatePurchaseState(updatedIngredients);
    }


    render () {


        return (
            <Fragment>
                <Modal>
                    <OrderSummary ingredients={this.state.ingredients} />    
                </Modal>>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    ingredients={this.state.ingredients}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable} />
            </Fragment>
        );
    }
}

export default BurgerBuilder;