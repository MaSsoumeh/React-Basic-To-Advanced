import Book from './Book';
import './bookList.css';
const books = [
  {
    id: '1',
    img: 'https://m.media-amazon.com/images/I/51o4b5AdNLL._AC_UL320_.jpg',
    title: `Where's Spot?`,
    author: 'Eric Hill',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ab necessitatibus facilis vero ullam officia dolorem ratione veniam omnis laboriosam!',
  },
  {
    id: '2',
    img: 'https://m.media-amazon.com/images/I/81vpsIs58WL._AC_UL320_.jpg',
    title: 'Love You Forever',
    author: 'Robert Munsch and Sheila McGraw',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ab necessitatibus facilis vero ullam officia dolorem ratione veniam omnis laboriosam!',
  },
  {
    id: '3',
    img: 'https://m.media-amazon.com/images/I/81vTTD9oyjL._AC_UL320_.jpg',
    title: 'The Giving Tree',
    author: 'Shel Silversteinw',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ab necessitatibus facilis vero ullam officia dolorem ratione veniam omnis laboriosam!',
  },
];

function StaticBookList() {
  return (
    <section className='StaticBookList'>
      {books.map((book) => {
        const { id, description } = book;
        return (
          <Book key={id} {...book}>
            {description}
          </Book>
        );
      })}
    </section>
  );
}
export default StaticBookList;
