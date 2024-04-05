import React, { useState } from 'react';
import BookCard from './bookcard.jsx';

function Home() {
    const [books, setBooks] = useState([]);

    const handleSubmit = async () => {
        try {
            const response = await fetch('https://openlibrary.org/search.json?q=james+bond&mode=everything');
            const data = await response.json();
            setBooks(data.docs);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    React.useEffect(() => {
        handleSubmit();
    }, []);

    return (
        <div className='main-content'>
            <h1 className='warning'>!!Obs Det kan ta litt tid før bøkene vises!!</h1>
            {books.map((book, index) => (
                <BookCard 
                    key={index}
                    title={book.title} /*Tittel er litt rar ettersom jeg ikke greier å hente ut titellen for selve boka men kun for hele registeret som er navngitt på en annen måte!*/ 
                    author={book.author_name ? book.author_name.join(', ') : 'Ukjent'}
                    year={book.first_publish_year ? book.first_publish_year : 'Ukjent'}
                    rating={book.ratings_average ? book.ratings_average : 'ukjent'}
                    id_amazon={book.isbn ? `https://www.amazon.com/s?k=${book.isbn[0]}` : 'Ukjent'} /*Linken blir feil, usikker på hva som kan endres!*/
                />
            ))}
        </div>
    );
}

export default Home;
