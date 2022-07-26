import React from 'react'
import memesData from './memesData'

export default function Meme() {

    const [memeImage, setMemeImage] = React.useState('')

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNum = Math.floor(Math.random() * (memesArray.length + 1))

        setMemeImage(memesArray[randomNum].url)

        
    }
    return (
        <main>
            <div className='meme__form'>
                <input type='text' className='meme__form-input' placeholder='Top text' />
                <input type='text' className='meme__form-input' placeholder='Bottom text' />
                <button 
                    className='meme__form-btn'
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼️
                </button>
            </div>
            <img src={memeImage} className='meme__img' />
        </main>
    )
}