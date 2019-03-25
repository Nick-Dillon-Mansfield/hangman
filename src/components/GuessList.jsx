import React from 'react'

const GuessList = (props) => {

    return <div>
                <p>Guesses Made:{props.guesses.map(guess => {
                   console.log(guess)
                   return <p>{guess}</p>
                })}</p>
            </div>
}

export default GuessList