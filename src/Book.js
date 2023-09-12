const Book = (props) => {
  const { image, title, author, index } = props;

  return (
    <article className="book">
      <span className="index"># {index + 1}</span>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};
export default Book;
