import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import './css/finish.css';
import { useContext } from 'react';
import { CardsContext } from "./CardsContext.js";
import Deck from "./Deck";
import {Howl} from 'howler';
import Confetti from "./Confeti";



export default function Finish(){
    const {deck, setGame} = useContext(CardsContext);
    const sound = new Howl({
      src: ["/K3RTHA7-game-win-horns.mp3"]
    });
    
    sound.play();

    
    const handleRestart= ()=>{
        const shuffledGame = deck.sort(() => Math.random() - 0.5);
        setGame(shuffledGame);
        <Deck/>
      }
     
    
    return (
        <div>
            <Confetti/>
            <Dialog open={true}>
                <DialogTitle >
                    🔊
                </DialogTitle>
                <DialogTitle >
                    Congratulations! You won! 🥳
                </DialogTitle>
                <DialogActions>
                     <Button onClick={handleRestart} color="primary">
                        Restart
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}