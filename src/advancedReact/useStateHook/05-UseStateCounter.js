import React, { useState } from 'react';

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0);
  const complexIncrease = () => {
    setTimeout(() => {
      // ! setCounter(counter + 1);   if we click fast multiple times just 1 click is counted

      //* after 2seconds starts to count all clicks
      setCounter((previousCounter) => previousCounter + 1);
    }, 2000);
  }; //?
  return (
    <>
      <section className='container'>
        <h1 style={{ padding: '2rem' }}>Regular Counter</h1>
        <h2>{counter}</h2>
        <button
          className='btn'
          style={{ color: 'green', borderColor: 'green' }}
          onClick={() => setCounter(counter + 1)}
        >
          Increase
        </button>
        <button
          className='btn'
          style={{ color: 'blue', borderColor: 'blue' }}
          onClick={() => setCounter(0)}
        >
          Reset
        </button>
        <button className='btn' onClick={() => setCounter(counter - 1)}>
          Decrease
        </button>
      </section>
      <hr></hr>
      <section className='container'>
        <h1 style={{ padding: '2rem' }}>More Complex Counter</h1>
        <h2>{counter}</h2>
        <button
          className='btn'
          style={{ color: 'green', borderColor: 'green' }}
          onClick={complexIncrease}
        >
          Increase Later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
