import { useState } from 'react';
import { SeriesNumericasApp } from '../SeriesNumericasApp'


export const AddValue = () => {
   
    const [ inputValue, setInputValue ] = useState();

    const onSubmit = (e) => {
        e.preventDefault();
        setInputValue('');
        console.log(inputValue);
      
    }

    return (
        <>
        <h1>Series Numericas</h1>
        <form onSubmit={ (e) => onSubmit(e) }>
            <input 
                type="number"
                placeholder="Agrega el valor numerico de la serie"
                value={ inputValue }
                onChange={ (e) => setInputValue(e.target.value) }
            />
        </form>
        <SeriesNumericasApp inputValue={inputValue}/>
    
        </>
    )
}

