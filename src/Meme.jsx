import React from 'react'
import memesData from './memesData'

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const getMemeImage = () => {
        const memesArray = memesData.data.memes
        const randomNum = Math.floor(Math.random() * (memesArray.length + 1))

        setMeme(prevState => ({
            ...prevState,
            randomImage: memesArray[randomNum].url
        }))
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <main>
            <div className='meme__form'>
                <input
                    type='text'
                    className='meme__form-input'
                    placeholder='Top text'
                    name='topText'
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    className='meme__form-input'
                    placeholder='Bottom text'
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className='meme__form-btn'
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼️
                </button>
            </div> 

            
            <section className='meme'>
                <h2 className='meme__text meme__text--top'>{meme.topText}</h2>
                <img src={meme.randomImage} className='meme__img' />
                <h2 className='meme__text meme__text--bottom'>{meme.bottomText}</h2>
            </section>
            
        </main>
    )
}