import React from "react";

function BookCard({ book }) {
    return (
        <Link to={`/books/${book.id}`}>
            <h3>{book.title}</h3>
            <img src={book.coverimage} alt={book.title} />
        </Link>
    );
}

export default BookCard;