import Button from './Button';
import Dice from './Dice';
import '../styles/gameBoard.css';
import PlayerCard from './PlayerCard';
import { useState } from 'react';
import WinModal from './WinModal';

function GameBoard({
    startGame,
    setStartGame,
    nameOfPlayer,
    setNameOfPlayer,
    setGameIsStart,
    gameisStart,
    caseArray,
    numberOfPlayer,
    gameWin,
    setGameWin
}) {
    const [roundPlayer, setRoundPlayer] = useState(1);
    const [diceNumber, setDiceNumber] = useState();

    return (
        <div className="gameBoard_container">
            <PlayerCard nameOfPlayer={nameOfPlayer} />
            {gameisStart && <Dice
                diceNumber={diceNumber}
                setDiceNumber={setDiceNumber}
                roundPlayer={roundPlayer}
                setRoundPlayer={setRoundPlayer}
                nameOfPlayer={nameOfPlayer}
                setNameOfPlayer={setNameOfPlayer}
            />}

            <div>c'est a <span className='gameBoard_currentPlayer'>{nameOfPlayer[roundPlayer - 1].pseudo}</span> de jouer !</div>
            <div className='gameBoard_section'>
                {gameWin && <WinModal />}
                <div className="gameBoard">
                    {
                        caseArray.map((caseNumber) => {

                            const found = nameOfPlayer.find(player => {
                                if (player.case === caseNumber && player.pseudo !== "") {
                                    return player;
                                }
                            });
                            // //! perso1
                            if (found) {
                                if (found.case >= 100) setGameWin(true);
                                if (found.id === 1) {
                                    return (<div key={caseNumber} className='case'>
                                        {found.case === caseNumber && <div className='pion pion1'></div>}
                                        {caseNumber}
                                    </div>)
                                }

                                //! perso2
                                else if (found.id === 2) {
                                    return (<div key={caseNumber} className='case'>
                                        {found.case === caseNumber && <div className='pion pion2'></div>}
                                        {caseNumber}
                                    </div>)
                                }

                                //! perso3
                                else if (found.id === 3) {
                                    return (<div key={caseNumber} className='case'>
                                        {found.case === caseNumber && <div className='pion pion3'></div>}
                                        {caseNumber}
                                    </div>)
                                }

                                //! perso4
                                else if (found.id === 4) {
                                    return (<div key={caseNumber} className='case'>
                                        {found.case === caseNumber && <div className='pion pion4'></div>}
                                        {caseNumber}
                                    </div>)
                                }
                            } else {

                                return (
                                    <div key={caseNumber} className='case'>{caseNumber}</div>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <Button
                text="retour"
                startGame={startGame}
                setStartGame={setStartGame}
                setGameIsStart={setGameIsStart}
                gameisStart={gameisStart}
            />
        </div>
    );
}

export default GameBoard;
