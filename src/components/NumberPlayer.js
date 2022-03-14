import '../styles/numberPlayer.css'
function NumberPlayer({ setNumberOfPlayer }) {

    const changeNumberOfPlayer = (e) => {
        setNumberOfPlayer(e.target.value);
    }

    return (
        <div className="numberPlayer_container">
            <select className="numberPlayer_select" onChange={changeNumberOfPlayer}>
                <option>choisir le nombre de joueurs</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>
    );
}

export default NumberPlayer;
