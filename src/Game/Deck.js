import Card from "./Card.js";
import './css/deck.css';
import { useContext } from 'react';
import { CardsContext } from "./CardsContext.js";
import Finish from './Finish';


export default function Deck(){
    const {game} = useContext(CardsContext);

  
  return(
      <div className="deck">
        {game.length === 0 ? 
         <Finish/> :
        game.map((card) => <Card 
        img = {card.img}
        id = {card.id}
        imgId = {card.imgId}
        isFlipped={card.isFlipped}
        key = {card.id}
        />)}
      </div>
  )
}