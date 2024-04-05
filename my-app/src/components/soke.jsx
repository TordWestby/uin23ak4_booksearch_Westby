import React, { useState } from "react";
import BookCard from "./bookcard";

function SearchResults() {
    const [q, setQuery] = useState('');
    const [books, setBooks] = useState([]);

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`https://openlibrary.org/search.json?title=${q}`);
            const data = await response.json();
            setBooks(data.docs);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };



    return(
        <div id='search-styling'>
            <form onSubmit={handleSubmit}>
                <input type="text" value={q} onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
            {books.map((book, index) => (
                <BookCard 
                    key={index}
                    title={book.title}
                    author={book.author_name ? book.author_name.join(', ') : 'Ukjent'}
                    year={book.first_publish_year ? book.first_publish_year : 'Ukjent'}
                    rating={book.ratings_average ? book.ratings_average : 'Ukjent'}
                    id_amazon={book.isbn ? `https://www.amazon.com/s?k=${book.isbn[0]}` : 'Ukjent'}
                />
            ))}
        </div>
    );
}

/*
Denne koden er hovedsaklig skrevet av OpenAi sin chatbot ChatGpt 3.5 [sist oppdatert 13 Februar 2024]
Chat logg: https://chat.openai.com/share/49febf86-3667-4322-8129-783788e383c8

Kilde:
Drini(Brukernavn), (2023, november). Open Libary Search API. openlibrary
https://openlibrary.org/dev/docs/api/search

*/

export default SearchResults;
