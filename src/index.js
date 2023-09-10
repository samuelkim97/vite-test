import ReactDOM from "react-dom/client";

const BookList = () => {
  return <section></section>;
};

const Book = () => {
  return <article></article>;
};

const Image = () => {
  return <h2>Image Placeholder</h2>;
};

const Title = () => {
  return <h1>Title</h1>;
};

const Author = () => {
  return <h4>Author</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
