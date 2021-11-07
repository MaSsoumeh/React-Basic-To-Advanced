import React, { useEffect, useState } from 'react';

//* Check size of the window(width)

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const resizeHandler = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    console.log('effect');
    window.addEventListener('resize', resizeHandler);
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', resizeHandler);
    };
  });
  console.log('render');
  return (
    <>
      <h1>Window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
