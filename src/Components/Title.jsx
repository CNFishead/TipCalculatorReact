import react from 'react'

const Title = (props) => {
  return (
    <div>
      <h1>Tip Calculator</h1>
      <p>You should pay</p>
      <h4>${props.total}</h4>
    </div>
  );
};

export default Title;
