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
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        const { image, author, title } = book;
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e.target.value);
    console.log("handle form input");
  };

  // const handleButtonClick = () => {
  //   alert("handle button click");
  // };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <section>
      <form onSubmit={handleFormSubmit}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
      </form>
      {/* Can use function directly not using reference */}
      <button
        onClick={() => {
          console.log("button clicked");
        }}
      >
        click me
      </button>
    </section>
  );
};

const Book = (props) => {
  const { image, title, author } = props;
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
