import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    author: "Walter Isaacson",
    title: "Elon Musk",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/814mI0-rkxL._AC_UL600_SR600,400_.jpg",
    id: 1,
  },
  {
    author: "Stephen King",
    title: "Holly",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/815oQ6G6HDL._AC_UL600_SR600,400_.jpg",
    id: 2,
  },
  {
    author: "Rebecca Yarros",
    title: "Iron Flame",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/91ke43dIxkL._AC_UL600_SR600,400_.jpg",
    id: 3,
  },
];

const BookList = () => {
  const getBook = (id) => {
    console.log(books.find((bookObj) => bookObj.id === id));
  };
  // console.log(getBook(1));

  return (
    <section className="booklist">
      {books.map((book) => {
        const { image, author, title } = book;
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { image, title, author, id, getBook } = props;

  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <button
        onClick={() => {
          getBook(id);
        }}
      >
        display title
      </button>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
