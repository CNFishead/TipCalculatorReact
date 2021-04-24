const Title = (props) => {
  return (
    <div>
      <h1>Tip Calculator</h1>
      <div>
        <p>You should pay: </p>
        <h4>${props.total}</h4>
      </div>
    </div>
  );
};

export default Title;
