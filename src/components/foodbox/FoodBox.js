import React, { useState } from 'react';

function FoodBox(props) {
  const initialState = {
    name: props.food.name,
    image: props.food.image,
    calories: props.food.calories,
    quantity: props.food.quantity,
  };

  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const handleClick = () => {
    if (state.quantity > 0) {
      props.addTodaysFood(state);
    }
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={state.image} alt={state.name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{state.name}</strong> <br />
              <small>{state.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                name="quantity"
                value={state.quantity}
                onChange={handleChange}
              />
            </div>
            <div className="control">
              <button className="button is-info" onClick={handleClick}>
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default FoodBox;
