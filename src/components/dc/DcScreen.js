import React from 'react'
import { HeroList } from '../heroes/HeroList'
import "./DcScreen.css";
// import { heroes } from '../../data/heroes'

export const DcScreen = () => {
    return (
        <div className="dc-container">
            <h1>DC Screen</h1>
            <hr/>
            
           <HeroList publisher = "DC Comics" />

        </div>
    )
}
