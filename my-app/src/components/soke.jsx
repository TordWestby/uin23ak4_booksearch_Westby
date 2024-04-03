import React, { useState } from "react";



function Soke() {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
            const data = await response.json();
            setBooks(data.docs);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return(
        <div id='book-styling'>
        <form onSubmit={handleSubmit}>
            <input type="text" value={query} onChange={handleChange} />
            <button type="submit">Search</button>
        </form>
        <ul>
            {books.map((book, index) => (
                <li key={index}>
                    <div id='search-container'>
                    <h2>Title:</h2> <p>{book.title}</p>
                    <h2>Author:</h2> <p>{book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);
}

/*
Denne koden er skrevet med OpenAi sin chatbot ChatGpt 3.5 [sist oppdatert 13 Februar 2024]
Chat logg: https://chat.openai.com/share/49febf86-3667-4322-8129-783788e383c8
*/

export default Soke;
