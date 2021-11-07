import React from 'react';

const BasicExample = () => {
  let title = 'Random Title';
  const clickHandler = () => {
    title = 'Hello World';
    console.log(title);
  };

  return (
    <>
      <h2>{title}</h2>
      <button onClick={clickHandler}>Change Title</button>
    </>
  );
};

export default BasicExample;
