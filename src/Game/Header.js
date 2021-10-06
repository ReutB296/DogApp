import {useContext} from 'react';
import './css/header.css';
import { CardsContext } from "./CardsContext.js";
import {
    Link,
  } from "react-router-dom";


export default function Header(){
    const {deck, setGame, setflipedCards} = useContext(CardsContext);

    const resetGame = () =>{
        const shuffledGame = deck.sort(() => Math.random() - 0.5);
        setGame(shuffledGame);
        setflipedCards([]);
       
    };


    return(
        <div className="HeaderContainer">
            <div className="backContainer">
                <Link to={"/"}>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" role="presentation"><path d="M18.378 23.369c.398-.402.622-.947.622-1.516 0-.568-.224-1.113-.622-1.515l-8.249-8.34 8.25-8.34a2.16 2.16 0 0 0 .548-2.07A2.132 2.132 0 0 0 17.428.073a2.104 2.104 0 0 0-2.048.555l-9.758 9.866A2.153 2.153 0 0 0 5 12.009c0 .568.224 1.114.622 1.515l9.758 9.866c.808.817 2.17.817 2.998-.021z"></path></svg>
                    <div className="buttonBack">Back</div>
                </Link>
            </div>
            <h1>Memory Card Game</h1>
            <div className="resetContainer">
                <button className="btn draw-border" onClick={resetGame}>Reset game</button>
            </div>
        </div>
    )
}
