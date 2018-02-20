import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = (props) => {
  let arrayTest = [];
  const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      // arrayTest.push([...Array(props.ingredients[igKey])].map((_, i) => igKey + i));
      // console.log([...Array(props.ingredients[igKey])].map((_, i) => igKey + i));
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />
      });
    });
  // console.log(arrayTest);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top'/>
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom'/>
    </div>
  );
};

export default burger;
