import React from 'react';

function BookCard({ title, author, year, id_amazon, rating }) {
    return (
        <div className='boxes'>
            <div className='box-content'>
                <h1>Titel: {title}</h1>
                <p>Forfatter: {author}</p>
                <p>Utgivelsesår: {year}</p>
                <p>Average Rating: {rating}</p>
                <p>Amazon link: <button><a href={id_amazon ? id_amazon : '#'}>Buy</a></button></p>
            </div>
        </div>
    );
}



export default BookCard;
