import ReactDOM from "react-dom/client";

import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  const author = "Walter Isaacson";
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/814mI0-rkxL._AC_UL600_SR600,400_.jpg"
        alt="Elon Musk"
      />
      <h2>Elon Musk</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
