import React, { useState } from 'react';
import { data } from '../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const clearHandler = () => {
    setPeople([]);
  };

  const removeHandler = (id) => {
    // const newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
    //? Refactor two above lines:(setPeople)
    setPeople((oldPeople) => {
      const newPeople = oldPeople.filter((person) => person.id !== id);
      return newPeople;
    });
  };
  if (people.length > 0) {
    return (
      <>
        {people.map((person) => {
          const { id, name } = person;
          return (
            <div className='item' key={id}>
              <h3>{name}</h3>
              <button onClick={() => removeHandler(id)}>remove</button>
            </div>
          );
        })}
        <button className='btn' onClick={clearHandler}>
          Clear All
        </button>
      </>
    );
  }
  return <></>;
};

export default UseStateArray;
