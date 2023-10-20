import React, { useCallback } from 'react'
import useCounter from '../components/UseCounter';

function Counter() {
    const { increment, decrement, reset, setValue, count } = useCounter();
  
    const handleSubmit = useCallback(
        (event) => {
            event.preventDefault();
            setValue(event.target.newValue.value);
            event.target.newValue.value = "";
        },
        [setValue]
    );

    
    return (
      <div>
        <div className="counter">
            <form onSubmit={handleSubmit}>
          <input name="newValue" type="tel" placeholder="Enter new value" />
          <button className="btn-set-value">Set value</button>
          </form>
          <h2 className="fs-700 fw-bold clr-primary-600">{count}</h2>
          <button onClick={() => increment()}>Increment</button>
          <button onClick={() => decrement()}>Decrement</button>
          <button onClick={() => reset()}>Reset</button>
        </div>
      </div>
    );
  }
export default Counter;
