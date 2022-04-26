import React, {useState, useEffect} from 'react'
import './Ifoodcounter.css'
export default function Ifoodcounter() {
    const compraValue = 12.00;

    const [value, setValue] = useState(0);
    const [btnStyle, setButtonStyle] =useState('counter-button-minus-active');
    const [compra, setCompra] = useState(compraValue)

    useEffect(()=>{
            setCompra(compraValue*value);
    }, [value])

    function down(){
        if(value<=1){
            setButtonStyle('counter-button-minus-desactive');
        }
        if(value>0){
            setValue(value-1);
        }
    }
    function up(){
        setValue(value+1);
        setButtonStyle('counter-button-minus-active');
    }

  return (
    <div className='counter-wrapper'>
        <button onClick={down} className={btnStyle}>
            -
        </button>
        <p>{value}</p>
        <button onClick={up} className='counter-button-plus-active'>
            +
        </button>

        <button>R${compra},00</button>
    </div>
  )
}
