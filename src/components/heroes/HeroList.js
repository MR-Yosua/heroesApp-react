import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard'
import './HeroList.css';

export const HeroList = ({ publisher,id }) => {

    const heroes = getHeroesByPublisher(publisher)
    
    
   
    return (
        <div className ="card-columns">
            {
                heroes.map(hero =>(
                    <HeroCard key={hero.id}
                        {...hero}
                    >
                    </HeroCard>
                ))
            } 
        </div>
    )
}
