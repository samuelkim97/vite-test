import ReactDOM from "react-dom/client";

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/814mI0-rkxL._AC_UL600_SR600,400_.jpg"
      alt="Elon Musk"
    />
  );
};

const Title = () => {
  return <h1>Elon Musk</h1>;
};

const Author = () => {
  return <h4>Walter Isaacson</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
