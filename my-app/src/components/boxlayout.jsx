import React from 'react';
import { Router } from 'react-router-dom';

function BoxLayout({ title, author, year, id_amazon, ratings_average }) {
    return (
        <div className='boxes'>
            <h1>Titel: {title}</h1>
            <p>Forfatter: {author}</p>
            <p>Utgivelsesår: {year}</p>
            <p>Average Rating: {ratings_average}</p>
            <a href={id_amazon ? id_amazon : '#'}>Buy</a>
            <p>Amazon link: {id_amazon}</p>
        </div>
    );
}



export default BoxLayout;
