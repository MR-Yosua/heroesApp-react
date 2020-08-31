import React from 'react';
import "./HeroScreen.css";
import { useParams, Redirect } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';
import { useFetchGif } from '../../hooks/useFetchGif';



export const HeroScreen = () => {

    
    //hook que devuelve parametros o argumentos por Url.
    const {heroeId} = useParams();
    
    const hero = getHeroById(heroeId);
    
    const {data,loading} = useFetchGif(heroeId);
    
    const img_url = data;
    // console.log(img_url);
    if(!hero){
        return <Redirect to = "/" />
    }

     const {
        superhero,
        // publisher,
        // alter_ego,
        // first_appearance,
        // characters
    } = hero;


    return (
        <div className="hero-main-container">
            <div className="cont-name">
                <h1>{superhero}</h1>
            </div>
            {loading && <p> Loading... </p>}
            <div className="cont-img-hero">
                <img src={img_url} alt={heroeId} className="imagen-heroe"></img>
            </div>
            <div className = "cont-info">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an    unknown     printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic    typesetting, remaining  essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with     desktop publishing software   like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>


        </div>
    )
}
