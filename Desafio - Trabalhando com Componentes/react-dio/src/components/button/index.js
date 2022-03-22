const Button = (props) =>{
    return(
        <button 
        type="button" 
        className={props.className}
        onClick={props.function}>
            {props.children}
        </button>
    );
}

export default Button;