import react from 'react';
import { useState } from 'react';

function Home() {
    return (
        <div className='main-content'>
            <div className='boxes'>
                <h1>Bok navn:</h1>
                <p>Bok innhold:</p>
                <p>Forfatter</p>
                <p>Utgivelsesår</p>
            </div>
        </div>
    )
}


export default Home