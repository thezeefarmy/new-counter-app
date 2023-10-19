import React from 'react';
import useCounter from '../customHooks/useCounter';
import ErrorBoundaryPage from '../routes/ErrorBoundaryPage';
import './CounterPage.css';

function CounterPage() {
  const { count, increment, decrement, reset, setValue } = useCounter();

  const handleIncrementByValue = (value) => {
    setValue(value);
  };

  if (count > 10 ){
         throw new Error ("Error! Count is greater than 10");
       }

  return (
    <ErrorBoundaryPage>
      <div className="page-container">
        <h1 className="title">Counter App</h1>
        <div className="display-box">
          <p className="count">{count}</p>
        </div>
        <div className="button-container">
          <button className="button" onClick={reset}>
            Reset
          </button>
          <button className="button" onClick={decrement}>
            -
          </button>
          <button className="button" onClick={increment}>
            +
          </button>
          <button className="button" onClick={() => setValue(10)}>
            Set 10
          </button>
        </div>
        <div className="number-buttons">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
            <button key={number} onClick={() => handleIncrementByValue(number)}>
              {number}
            </button>
          ))}
        </div>
      </div>
    </ErrorBoundaryPage>
  );
}

export default CounterPage;
