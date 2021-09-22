import './css/card.css';
import React, {useContext, useEffect} from 'react';
import { CardsContext } from "./CardsContext.js";
import Deck from './Deck';

export default function Card({
    img,
    id,
    imgId,
    isFlipped,

}) {
    const {game, setGame, flipedCards, setflipedCards} = useContext(CardsContext);
    
    
    
    const handleClick = (id, imgId) => {
        console.log("flipedCards" ,flipedCards);
        if (!(flipedCards.includes(id))){
            
            const newId = [...flipedCards];
            newId.push(id, imgId);
            setflipedCards(newId);
            console.log(newId);
            console.log(flipedCards);
            const temp =  [...game];
            temp.map(card => {
                if (card.id === id){
                card.isFlipped = false;
                } 
            });
            setGame(temp);
            <Deck/>
        }
    }

    useEffect(() => {
        if (flipedCards.length === 4) {
            setTimeout(() => {
                checkMatch();
            }, 400);
        }
    }, [flipedCards]);

    const setGameTimed = (game) => {
        setTimeout(() => {
            setGame(game)
        }, 400)
    }

    const checkMatch= () => {
        if (flipedCards[1] === flipedCards[3]){ //if there is a match
            let temp =  [...game];
            // const cardIndex1 = temp.findIndex(card => card.id == flipedCards[0]);
            // temp[cardIndex1] = {...temp[cardIndex1], isFlipped: !temp[cardIndex1].isFlipped} 
            // const cardIndex2 = temp.findIndex(card => card.id == flipedCards[2]);
            // temp[cardIndex2] = {...temp[cardIndex2], isFlipped: !temp[cardIndex2].isFlipped} 
            
            console.log("temp is", temp);
            temp = temp.filter(card => card.imgId != flipedCards[1]);
            temp = temp.filter(card => card.imgId != flipedCards[3]);
            
            setflipedCards([]);
            setGameTimed(temp);


        }else{  //if there is no match, flip back
            const temp1 =  [...game];
            temp1.map(card => {
                if ((card.id === flipedCards[0]) || (card.id === flipedCards[2])){
                card.isFlipped = true;
                } 
            });
           
            setflipedCards([]);
            // setGameTimed(temp1);
            <Deck/>
        }
    }

  console.log(isFlipped)
    return(
        <div className={`card-flip ${isFlipped ? "flipped" : ""}`}>
            <div className="card-flipper" onClick={() => handleClick(id,imgId)}>
                <div className="front">
                    <img src={"/card.png"} />
                </div>
                <div className="back">
                    <img src={img} />
                </div>
            </div>
        </div>
      
       
    )
}