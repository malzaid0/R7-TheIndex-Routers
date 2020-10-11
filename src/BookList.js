import React, { useState } from "react";

// Components
import BookTable from "./BookTable";
import SearchBar from "./SearchBar";
import {useParams} from "react-router-dom";

const BookList = props => {
    const [query, setQuery] = useState("");
    const {bookColor} = useParams()

    let filteredBooks = props.books.filter(book =>
        book.title.toLowerCase().includes(query.toLowerCase())
    );
    if (bookColor) filteredBooks = props.books.filter(book =>
        book.color === bookColor
    );


    return (
        <div>
            <SearchBar handleFilter={setQuery} />
            <BookTable books={filteredBooks} />
        </div>
    );
};

export default BookList;
