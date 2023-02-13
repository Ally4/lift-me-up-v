import { useSelector, useDispatch } from "react-redux"
import { increament, decreament, reset, increamentByAmount } from "./counterSlice"
import { useState } from "react";

const Counter = () => { 

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [increamentAmount, setIncreamentAmount ] = useState(0);
  // const addValue = Number(increamentAmount) || 0;
  const addValue = parseInt(increamentAmount);

  const resetAll = () => {
    setIncreamentAmount(0);
    dispatch(reset())
  }

  return (
      <section>
        <p>{count}</p>
        <button onClick={() => dispatch(increament())}>+</button>
        <button onClick={() => dispatch(decreament())}>-</button>
        <button onClick={() => dispatch(reset())}>reset</button>
        <button onClick={() => dispatch(increamentByAmount())}>increamentByAmount</button>
        <input type="number"
                value={increamentAmount}
                onChange = {(e) => setIncreamentAmount(e.target.value)}>
        </input>
        <div>
          <button onClick={() => dispatch(increamentByAmount(addValue))}> Add Amount</button>
          <button onClick={resetAll}> Reset</button>
        </div>
      </section>
  )
}

export default Counter