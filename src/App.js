import { useState, useEffect, } from 'react';
import './App.css';
import Input from './components/Input';
import Button from './components/Button';
import NumberPlayer from './components/NumberPlayer';
import GameBoard from './components/GameBoard';

function App() {
  const [numberOfPlayer, setNumberOfPlayer] = useState(0);
  const [nameOfPlayer, setNameOfPlayer] = useState([
    { id: 1, pseudo: "", case: 1 },
    { id: 2, pseudo: "", case: 1 },
    { id: 3, pseudo: "", case: 1, },
    { id: 4, pseudo: "", case: 1 }
  ]);
  const [startGame, setStartGame] = useState(false);
  const [gameisStart, setGameIsStart] = useState(false);
  const [caseArray, setCaseArray] = useState([]);
  const [gameWin, setGameWin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  const arrayOfInput = []
  const caseLoop = [];


  const fetchArrayData = () => {
    for (let i = 1; i <= 100; i++) {
      caseLoop.push(i);
    }
    setCaseArray(caseLoop);
    console.log('laje passe!');
  }

  useEffect(() => {
    fetchArrayData();

  }, [])


  for (let i = 1; i <= numberOfPlayer; i++) {
    arrayOfInput.push(
      {
        "key": i,
        "nameOfPlayer": nameOfPlayer,
        "setNameOfPlayer": setNameOfPlayer,
        "id": i
      }
    )
  }

  return (
    <div className="App">
      <h1>Snake Game</h1>
      {!startGame && <NumberPlayer setNumberOfPlayer={setNumberOfPlayer} />}
      <div>
        {
          !startGame && arrayOfInput.map((input) => {
            return (<Input
              key={input.key}
              nameOfPlayer={nameOfPlayer}
              setNameOfPlayer={setNameOfPlayer}
              id={input.id}
              errorMessage={errorMessage}
            />)
          })
        }
      </div>
      {
        !startGame && numberOfPlayer > 0 ?
          <Button
            text="Valider"
            startGame={startGame}
            setStartGame={setStartGame}
            setGameIsStart={setGameIsStart}
            gameisStart={gameisStart}
            nameOfPlayer={nameOfPlayer}
            numberOfPlayer={numberOfPlayer}
            setNameOfPlayer={setNameOfPlayer}
            setErrorMessage={setErrorMessage}
          />
          : ''
      }
      {
        startGame &&
        <GameBoard
          startGame={startGame}
          setStartGame={setStartGame}
          nameOfPlayer={nameOfPlayer}
          setNameOfPlayer={setNameOfPlayer}
          setGameIsStart={setGameIsStart}
          gameisStart={gameisStart}
          caseArray={caseArray}
          numberOfPlayer={numberOfPlayer}
          gameWin={gameWin}
          setGameWin={setGameWin}
        />
      }
    </div>
  );
}

export default App;
