import React, { useEffect, useState } from "react";
import BookList from "./BookList/BookList";
import axios from "axios";

function Books() {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    axios(`${REACT_APP_API_BASE_URL}/api/books`)
      .then((data) => {
        console.log(data);
        setBookData(data.data.books);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <BookList bookData={bookData} />
    </div>
  );
}

export default Books;
