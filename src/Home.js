import  "./home.css";
import {
    Link,
  } from "react-router-dom";
  import classifier  from './pic/classifier.png';

export default function Home(){

    return(
    <div className="home-container">
        <div className="pic-container">
          <img src="./back2.png"/>
        </div>
        <div className="text-container">
            <h1>Dog</h1>
            <p>Fun app about your best friend</p>
        </div>
          <ul className="home">
            <li>
              <Link to="/Classify" class="Classify-container">
                <div className="Classify-front"></div>
                <div className="Classify-back">
                    <div class="inner">
                        <p> Dog classifier</p>
                    </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/MemoryCardGame" class="memoryGame-container">
                <div className="memoryCard-front"></div>
                <div className="memoryCard-back">
                    <div class="inner">
                        <p> Memory Card Game</p>
                    </div>
                </div>
              </Link>
            </li>
          </ul>
    </div>
    );
}