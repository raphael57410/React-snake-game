import '../styles/button.css';
function Button({ text, startGame, setStartGame, setGameIsStart, gameisStart, nameOfPlayer, numberOfPlayer, setNameOfPlayer, setErrorMessage }) {
    if (text === "Valider") {
        const handleClick = () => {
            if (numberOfPlayer !== 0) {

                const allPlayer = nameOfPlayer.filter(name => name.pseudo !== "");
                if (allPlayer.length === 0 || allPlayer.length === 1) {
                    setErrorMessage('veuillez entrer un pseudo !');
                    setStartGame(false);
                } else {

                    setNameOfPlayer(allPlayer);
                    setStartGame(!startGame);
                    setGameIsStart(!gameisStart);
                }

            }
        }
        return (
            <button className='button' onClick={handleClick}>{text}</button>
        );
    } else {
        const handleClick = () => {
            setStartGame(!startGame);
            setGameIsStart(!gameisStart);
        }
        return (

            <button className='button' onClick={handleClick}>{text}</button>
        );
    }


}

export default Button;
