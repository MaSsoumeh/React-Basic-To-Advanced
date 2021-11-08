import React, { useState, useEffect } from 'react';
import '../../basicReact/components/bookList.css';
import Book from '../../basicReact/components/Book';

function DynamicBookList() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const bookListArray = [];
    fetch(
      'https://react-library-9105a-default-rtdb.firebaseio.com/library.json'
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        for (const key in data) {
          const book = {
            id: key,
            ...data[key],
          };
          bookListArray.unshift(book);
        }
        setBooks(bookListArray);
      });
  }, []);
  if (isLoading) {
    return (
      <div className='container'>
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <section className='StaticBookList'>
      {books.map((book) => {
        const { id, img, title, author, description } = book;
        return (
          <Book key={id} img={img} title={title} author={author}>
            {description}
          </Book>
        );
      })}
    </section>
  );
}
export default DynamicBookList;
