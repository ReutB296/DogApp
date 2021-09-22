import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from './Home';
import Header from './Game/Header';
import Board from './Game/Board';
import CardsProvider from './Game/CardsContext';
import Classifier from './Classifier/Classifier.js';




function App() {
  return (
    <Router>
        <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/Classify" exact>
          <Classifier/>
        </Route>
        <Route path="/MemoryCardGame" exact>
          <CardsProvider>
          <div className="cardGame-container">
            <Header/>
            <Board/>
          </div>
          </CardsProvider>
        </Route>
        </Switch>
    </Router>
  );
}

export default App;
