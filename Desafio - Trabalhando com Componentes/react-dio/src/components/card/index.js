import { useState } from "react";
import Button from "../button";


const Card = () => {
    const [valor, setvalor] = useState(0);

    function Adicionar(){
        setvalor(valor+1);
    }

    function Subtrair(){
        setvalor(valor-1);
    }

    return (
        <div className="card">
            <div className="card-header">
                Meu primeiro card
            </div>
            <div className="card-body">
                <Button 
                function={Adicionar} 
                className="btn btn-success">
                    Adicionar
                </Button>
                <Button 
                function={Subtrair} 
                className="btn btn-danger">
                    Subtrair
                </Button>
                <p className="card-text">
                    {valor}
                </p>
            </div>
        </div>
    );
}

export default Card;