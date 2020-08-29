import React from "react";
import "./HeroCard.css";
import { Link } from "react-router-dom";
import TextTruncate from 'react-text-truncate';

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
  return (
    <Link to={`./hero/${id}`}>
        <div className="cont-main">
          <div className="card ">
            <div className="card-header text-center font-weight-bolder">
              {superhero}
            </div>
            <div className="cont-img">
              <img
                src={`./assets/heroes/${id}.jpg`}
                className="card-img"
                alt={superhero}
              />
            </div>
            <div className="card-body ">
              <div className="container-info">
                <h5 className="card-title">{publisher}</h5>
                <p className="card-text ">Actor/actriz : {alter_ego}</p>
                <div className="more-actors">
                  {
                    (alter_ego || characters)
                    && <TextTruncate 
                    line={1}
                    element="p"
                    truncateText="..."
                    text={characters}
                  />
                }
                </div>
                
            
                <p className="card-text ">
                  <small className=" text-white ">{first_appearance}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
    </Link>
  );
};
