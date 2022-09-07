import { useState } from 'react';
import { AddValue } from './components'


export const SeriesNumericasApp = (inputValue) => {
    
    console.log("Aqui esta el dato", inputValue);


    const obtenerPrimos = (n) => {
        if (typeof n != 'number' || !Number.isInteger(n)) {
            return null;
        }
        
        let auxiliar = [];
        let primos = [];
    
    for (let i = 2; i <= n; ++i) {
        if (!auxiliar[i]) {
            primos.push(i);
    
            for(let j = i << 1; j <= n; j +=i){
                auxiliar[j] = true;
            }
    
        }
    
    }
     return primos;
    }
    
    const obtenerTriangulares = (n) => {
        if (typeof n != 'number' || !Number.isInteger(n)) {
            return null;
        }
        
        let triangulares = [];
        let j = 1, k = 1;
    
    for (let i = 2; i <= n; ++i) {
     
            for (i = 1; i <= n; i++)
            {
                j = j + 1; 
                k = k + j; 
                triangulares.push(k);
            }
    
        
    
    }
     return triangulares;
    }
    
    
    const obtenerFibonacci = (n) => {
        if (typeof n != 'number' || !Number.isInteger(n)) {
            return null;
        }
    
        let fibonacci = [0, 1];
    
        for (let i = 2; i < n; i++){
          fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
         
        }
    
        return fibonacci;
    }
 
    
    
    return (
        
<div>


    

<h1>Serie de numeros primos</h1>
<p>{obtenerPrimos(10) }</p>
<h1>Serie de numeros de fibonacci</h1>
<p>{obtenerFibonacci(4)}</p>
<h1>Serie de numeros Triangulares</h1>
<p>{obtenerTriangulares(10)}</p>


</div>
        
    )
}
