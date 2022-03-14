import '../styles/playerCard.css';

function PlayerCard({ nameOfPlayer }) {
    return (
        <div className="playerCard_container">
            {
                nameOfPlayer.map((pseudo) => {
                    if (pseudo.pseudo === "") {
                        return
                    }
                    return (
                        <div className="playerCard" key={pseudo.id}>
                            <h2>{pseudo.pseudo}</h2>
                            <span>Position actuelle : {pseudo.case}</span>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default PlayerCard;
