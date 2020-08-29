import React from 'react'
import { HeroList } from '../heroes/HeroList'
import "./MarvelScreen.css"
export const MarvelScreen = () => {
    return (
        <div className="marvel-container">
            <h1>Marvel Screen</h1>
            <hr/>

            <HeroList publisher= "Marvel Comics" ></HeroList>

        </div>
    )
}
