import React from "react";
import BookCard from '../BookCard/BookCard';

function Books({ BookData }) {
    return (
        <div>
            {bookData.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    );
}

export default BookList;