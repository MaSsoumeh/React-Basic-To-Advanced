import React from 'react';
const books = [
  {
    img: 'https://m.media-amazon.com/images/I/51o4b5AdNLL._AC_UL320_.jpg',
    title: `Where's Spot?`,
    author: 'Eric Hill',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ab necessitatibus facilis vero ullam officia dolorem ratione veniam omnis laboriosam!',
  },
  {
    img: 'https://m.media-amazon.com/images/I/81vpsIs58WL._AC_UL320_.jpg',
    title: 'Love You Forever',
    author: 'Robert Munsch and Sheila McGraw',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ab necessitatibus facilis vero ullam officia dolorem ratione veniam omnis laboriosam!',
  },
  {
    img: 'https://m.media-amazon.com/images/I/81vTTD9oyjL._AC_UL320_.jpg',
    title: 'The Giving Tree',
    author: 'Shel Silversteinw',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ab necessitatibus facilis vero ullam officia dolorem ratione veniam omnis laboriosam!',
  },
];

const AddBook = () => {
  books.map((book) => {
    return fetch(
      'https://react-library-9105a-default-rtdb.firebaseio.com/library.json',
      {
        method: 'POST',
        body: JSON.stringify(book),
        headers: {
          'content-type': 'application/json',
        },
      }
    );
  });

  return <div></div>;
};

export default AddBook;
