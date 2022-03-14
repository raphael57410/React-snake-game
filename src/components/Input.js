import '../styles/input.css';
function Input({ nameOfPlayer, setNameOfPlayer, id, errorMessage }) {
    const handleChange = (e) => {
        const { value } = e.target;
        handleNewArray(id, value);

    }

    const handleNewArray = (id, pseudo) => {
        const newArray = nameOfPlayer.map(el => (el.id === id ? { ...el, pseudo } : el));
        setNameOfPlayer(() => [...newArray]);
    }

    return (
        <div className="input_container">
            {errorMessage && <span>{errorMessage}</span>}
            <label>PSEUDO: </label>
            <input required className="input" value={nameOfPlayer[id - 1].pseudo} onChange={handleChange}></input>
        </div>
    );
}

export default Input;
