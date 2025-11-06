import { useState } from "react";

function Counter() {
const [value, setValue] = useState(0);

function inc() {
    setValue(value + 1);
}

function dec() {
    setValue(value - 1);
}
return (
    <div>
    <button onClick={inc}>+</button>
    <span> {value} </span>
    <button onClick={dec}>-</button>
    </div>
);
}

export default Counter;