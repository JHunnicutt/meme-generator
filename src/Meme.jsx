import React from 'react'

export default function Meme() {
    return (
        <main>
            <form className='meme__form'>
                <input type='text' className='meme__form-input' placeholder='Top text' />
                <input type='text' className='meme__form-input' placeholder='Bottom text' />
                <button className='meme__form-btn'>Get a new meme image 🖼️</button>
            </form>
        </main>
    )
}