import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 33,
    message: 'Goodbye',
  });
  const changeHandler = () => {
    setPerson({ ...person, message: 'Hello' });
  };
  return (
    <div className='container'>
      <h2> {person.name} </h2>
      <h2> {person.age} </h2>
      <h2> {person.message} </h2>
      <button className='btn' onClick={changeHandler}>
        Change Message
      </button>
    </div>
  );
};

export default UseStateObject;
