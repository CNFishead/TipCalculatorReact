import React, { useState } from "react";
import Title from "./Components/Title";

import "bootstrap/dist/css/bootstrap.min.css";
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

  const resetState = () => {
    setState({
      billTotal: 0,
      party: 1,
      tipPercent: 0,
      total: 0
    })
  }
  return (
    <div className="container-fluid center card">
      <Title total={state.total.toFixed(2)} />
      <div className="container-fluid formContainer">
        <form action="">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">
              Bill total:{" "}
            </span>
            <input
              className="form-control"
              type="number"
              name="billTotal"
              placeholder="Total"
              onChange={handleChange}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              # of people paying:{" "}
            </span>
            <button className="btn" type="button" onClick={handleIncrement}>
              +
            </button>
            <p className="form-control">{state.party}</p>
            <button
              className="btn"
              type="button"
              onClick={state.party > 1 ? handleDecrement : (state.party = 1)}
            >
              -
            </button>
          </div>
          <div className="input-group mb-4">
            <span className="input-group-text" id="basic-addon3">Tip</span>
              <input
                className="form-control"
                type="number"
                name="tipPercent"
                placeholder="Percentage Tip %"
                onChange={handleChange}
              />
          </div>
          <div className="container-fluid">
            <button className="btn" type="reset" onClick={resetState}>
              Reset
            </button>
            <button className="btn" type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
