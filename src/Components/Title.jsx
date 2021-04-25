const Title = (props) => {
  return (
    <div className="container-fluid">
      <h1>Tip Calculator</h1>
      <div className="container-fluid card totalCard">
        <p>You should pay: </p>
        <h4>${props.total}</h4>
      </div>
    </div>
  );
};

export default Title;
