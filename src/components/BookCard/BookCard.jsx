import React from "react";

import React from 'react'

function BookCard() {
    return (
        <div key={book.id}>
            <h3>{book.title}</h3>
            <img src={book.coverimage} alt={book.title} />
        </div>
    );
}

export default BookCard;