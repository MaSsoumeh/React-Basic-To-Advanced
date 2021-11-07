import './book.css';
const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className='book'>
      <figure className='img'>
        <img src={img} alt='a story book' />
      </figure>
      <h2>{title}</h2>
      <h3 className='author'>{author}</h3>
      <p> {props.children}</p>
    </article>
  );
};
export default Book;
