import React, { useState } from 'react';

const UseStateBasic = () => {
  //! we cannot call hooks conditionally
  //! Hooks must be in the component body

  const [title, setTitle] = useState('Initial Title');
  const clickHandler = () => {
    //*conditional rendering
    if (title === 'Initial Title') {
      setTitle('Hello World');
    } else {
      setTitle('Initial Title');
    }
  };
  return (
    <>
      <h1>{title}</h1>
      <button className='btn' onClick={clickHandler}>
        Toggle Title
      </button>
    </>
  );
};

export default UseStateBasic;
