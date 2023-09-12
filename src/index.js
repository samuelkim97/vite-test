import ReactDOM from "react-dom/client";

import "./index.css";
import { books } from "./books";
import Book from "./Book";

const BookList = () => {
  return (
    <>
      <h1 className="title">Book-list App</h1>
      <section className="booklist">
        {books.map((book, index) => {
          const { image, author, title } = book;
          return <Book {...book} index={index} key={book.id} />;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
