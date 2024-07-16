import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { books } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((book) => {
          return (
            <Book
              key={book.id}
              title={book.title}
              author={book.author}
              img={book.img}
            />
          );
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
