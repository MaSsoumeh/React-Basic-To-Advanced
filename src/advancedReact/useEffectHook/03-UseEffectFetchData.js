import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(url);
    const usersList = await response.json();
    setUsers(usersList);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h3>github Users</h3>
      <div>
        <ul>
          {users.map((user) => {
            const { id, login, avatar_url, html_url } = user;
            return (
              <li className='item' key={id}>
                <img className='avatar' src={avatar_url} alt={login} />
                <h3>{login}</h3>
                <a href={html_url}>Profile</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default UseEffectFetchData;
