import { useState } from 'react';
import '../styles/dice.css';

function Dice({ roundPlayer, setRoundPlayer, diceNumber, setDiceNumber, nameOfPlayer, setNameOfPlayer }) {
    const [diceTurn, setDiceTurn] = useState();

    const handleClick = () => {
        setDiceTurn(true);

        const randomNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1);

        // current player
        const currentPlayer = nameOfPlayer[roundPlayer - 1];

        const newArray = nameOfPlayer.map(el => (el === currentPlayer ? { ...el, case: (el.case + randomNumber) } : el));

        const filterArray = newArray.filter(el => el.pseudo !== "");

        setNameOfPlayer(filterArray);

        setDiceNumber(randomNumber);

        setRoundPlayer(roundPlayer + 1);

        if (roundPlayer === nameOfPlayer.length) setRoundPlayer(1);

        setTimeout(() => {
            setDiceTurn(false);
        }, 1000);
    }

    return (
        <div>
            {diceTurn && <div>vous avez fait un : {diceNumber} </div>}
            <button className='dice_button' onClick={handleClick}>Lancer le Dés</button>
        </div>
    );
}

export default Dice;
