const Quotes = ({Quote, Speaker}) => {
    return (
        <div>
            <p>{Quote}</p>
            <p>- {Speaker}</p>
            <button>Quote no Jutso</button>
        </div>
    );
}

export default Quotes;