import React, { useState } from "react";
import Title from "./Components/Title";

import "./App.css";

function App() {
  const [state, setState] = useState({
    billTotal: 0.0,
    party: 1,
    tipPercent: 0,
    total: 0.0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setState((prevItems) => ({
      ...prevItems,
      total:
        ((state.tipPercent / 100) * state.billTotal + state.billTotal) /
        state.party,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevItems) => ({
      ...prevItems,
      [name]: parseInt(value),
    }));
    console.log(state);
  };

  const handleIncrement = () => {
    setState((prevState) => {
      return { ...prevState, party: prevState.party + 1 };
    });
  };

  const handleDecrement = () => {
    setState((prevState) => {
      return { ...prevState, party: prevState.party - 1 };
    });
  };

  return (
    <div>
      <Title total={state.total.toFixed(2)} />
      <div>
        <form action="">
          <label htmlFor="billTotal">Bill Total: </label>
          <input
            type="number"
            name="billTotal"
            placeholder="bill"
            onChange={handleChange}
          />
          <div>
            <label htmlFor="party">People Splitting bill: </label>
            <button type="button" onClick={handleIncrement}>
              +
            </button>
            <p>{state.party}</p>
            <button
              type="button"
              onClick={state.party > 1 ? handleDecrement : (state.party = 1)}
            >
              -
            </button>
          </div>
          <label htmlFor="tipPercent">
            Tip:{" "}
            <input
              type="number"
              name="tipPercent"
              placeholder="tip"
              onChange={handleChange}
            />
            %
          </label>
          <div>
            <button type="reset">Reset</button>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
