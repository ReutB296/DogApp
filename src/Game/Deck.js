import Card from "./Card.js";
import './css/deck.css';
import { useContext } from 'react';
import { CardsContext } from "./CardsContext.js";
import Finish from './Finish';


export default function Deck(){
    const {game} = useContext(CardsContext);

    console.log("game is", game)

  
  return(
      <div className="deck">
        {!game.find(card => card.isMatch === false) ? 
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