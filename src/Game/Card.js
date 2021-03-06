import './css/card.css';
import React, {useContext, useEffect} from 'react';
import { CardsContext } from "./CardsContext.js";

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
        
        }
    }

    useEffect(() => {
        if (flipedCards.length === 4) {
            setTimeout(() => {
                checkMatch();
            }, 400);
        }
    }, [flipedCards]);


    const checkMatch= () => {
        if (flipedCards[1] === flipedCards[3]){ //if there is a match
              let copiedGame =  [...game];
         
              setGame(copiedGame.map( card => {
                  if (card.id === flipedCards[0] || card.id === flipedCards[2]){
                      card.isMatch = true;
                  };
                  return card;
              }));
         
            
            setflipedCards([]);
           


        }else{  //if there is no match, flip back
            const temp1 =  [...game];
            temp1.map(card => {
                if ((card.id === flipedCards[0]) || (card.id === flipedCards[2])){
                card.isFlipped = true;
                } 
            });
           
            setflipedCards([]);
            
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