import React, {useEffect, useState} from 'react';

export const CardsContext = React.createContext({
  deck: [],
  game: [],
  setGame: () =>{},
  flipedCards: [],
  setflipedCards: () =>{},
 
});

export default function CardsProvider({children}) {
    const [game, setGame] = useState([{img: "/dog0.png", id: 0, imgId:"border", isFlipped: true}]);
    const [flipedCards, setflipedCards] = useState([]);

 
    const deck = [
        {img: "/dog0.png", id: 0, imgId:"border", isFlipped: true, isMatch: false},
        {img: "/dog1.png", id: 1, imgId:"swissShepered", isFlipped:true, isMatch: false},
        {img: "/dog2.png", id: 2, imgId:"Aski", isFlipped:true, isMatch: false},
        {img: "/dog3.png", id: 3, imgId:"cavalier", isFlipped:true, isMatch: false},
        {img: "/dog4.png", id: 4, imgId:"bulldog", isFlipped:true, isMatch: false},
        {img: "/dog5.png", id: 5, imgId:"Maltese", isFlipped:true, isMatch: false},
        {img: "/dog6.png", id: 6, imgId:"Akita", isFlipped:true, isMatch: false},
        {img: "/dog7.png", id: 7, imgId:"australianShepherd", isFlipped:true, isMatch: false},
        {img: "/dog8.png", id: 8, imgId:"labrador", isFlipped:true, isMatch: false},
        {img: "/dog0.png", id: 9, imgId:"border", isFlipped:true, isMatch: false},
        {img: "/dog1.png", id: 10, imgId:"swissShepered", isFlipped:true, isMatch: false},
        {img: "/dog2.png", id: 11, imgId:"Aski", isFlipped:true, isMatch: false},
        {img: "/dog3.png", id: 12, imgId:"cavalier", isFlipped:true, isMatch: false},
        {img: "/dog4.png", id: 13, imgId:"bulldog", isFlipped:true, isMatch: false},
        {img: "/dog5.png", id: 14, imgId:"Maltese", isFlipped:true, isMatch: false},
        {img: "/dog6.png", id: 15, imgId:"Akita", isFlipped:true, isMatch: false},
        {img: "/dog7.png", id: 16, imgId:"australianShepherd", isFlipped:true, isMatch: false},
        {img: "/dog8.png", id: 17, imgId:"labrador", isFlipped:true, isMatch: false},
    ]

    useEffect(() => {
        const shuffledGame = deck.sort(() => Math.random() - 0.5);
        setGame(shuffledGame);
    }, []);
  
  

  return (
    <CardsContext.Provider value={{
        deck,
        game,
        setGame,
        flipedCards,
        setflipedCards,
      
    }}>
      {children}
    </CardsContext.Provider>
  );
}
