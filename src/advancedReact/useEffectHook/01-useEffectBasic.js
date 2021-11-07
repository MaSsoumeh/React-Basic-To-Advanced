import React, { useState, useEffect } from 'react';
//* By default useEffect runs after each re-render
//* cleanup function
const useEffectBasic = () => {
  const [value, setValue] = useState(0);
  const clickHandler = () => {
    setValue(value + 1);
  };
  useEffect(() => {
    //! effect
    console.log('useEffect call');
    document.title = `New Messages(${value})`;
  }, [value]);
  console.log('component rendered');
  //!side effect:
  return (
    <>
      <h1>{value}</h1>
      <h2>Pay attention to the document title:</h2>
      <button className='btn' onClick={clickHandler}>
        Click me
      </button>
    </>
  );
};

export default useEffectBasic;
