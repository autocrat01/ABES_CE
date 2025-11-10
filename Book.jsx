import React from "react";
import "./book.css";

function Book(props) {
  const [count, setCount] = React.useState(0);
  function inc() {
    setCount(count + 1);
  }
  function dec() {
    setCount(count - 1);
  }
  
  return (
    <div id="Book">
      <img src="https://m.media-amazon.com/images/I/91p5RF8nPFL._AC_UF1000,1000_QL80_.jpg" alt="" height={100} width={100}/>
      <h1>Title:{props.title}</h1>
      <h1>Price:{props.Price}</h1>
      <div>
        <button onClick={inc}>+</button>
        <span>{count}</span>
        <button onClick={dec}>-</button>
      </div>
    </div>
  );
}

export default Book;