import React, { useState } from "react";
import Title from "./Components/Title";

function App() {
  const [state, setState] = useState({
    billTotal: 0.0,
    party: 0,
    tipPercent: 0,
    total: 0.0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setState((prevItems) => ({
      ...prevItems,
      total: (state.tipPercent / 100) * state.billTotal + state.billTotal,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevItems) => ({
      ...prevItems,
      [name]: parseInt(value),
    }));
  };
  return (
    <div>
      <Title total={state.total} />
      <div>
        <form action="">
          <label htmlFor="billTotal">Bill Total: </label>
          <input
            type="number"
            name="billTotal"
            placeholder="bill"
            onChange={handleChange}
          />
          <label htmlFor="party">People Splitting bill: </label>
          <input
            type="number"
            name="party"
            placeholder="party"
            onChange={handleChange}
          />
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
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
