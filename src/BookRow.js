import React from "react";
import { Link } from "react-router-dom";

const BookRow = props => {
  const book = props.book;
  const authors = book.authors.map(author => (
      <Link to={`/authors/${author.id}`}>
    <div key={author.name}>{author.name}</div>
      </Link>
  ));
  return (
    <tr>
      <td>{book.title}</td>
      <td>{authors}</td>
      <td>
          <Link to={`/books/${book.color}`}>
        <button className="btn" style={{ backgroundColor: book.color }} />
          </Link>
      </td>
    </tr>
  );
};

export default BookRow;
