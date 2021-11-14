import './../css/Calculator.css'
import CalBtn from './CalcBtn';
import { useState } from 'react';

function Calculator(){
    const btnSet = [
        '%','CE','<','/',
        7 , 8 , 9 , 'X',
        4 , 5 , 6 , '-',
        1 , 2 , 3 , '+',
        '' , 0 , '' , '=',
    ]

    const [number,setNumber] = useState('0');
    const [prev,setPrev] = useState('');
    const [computeArr,setComputeArr] = useState([]);

    return(
        <div className='cal-wrap'>
            <div className = 'cal-header'>
                <div className='cal-display'>
                    <span className='cal-number-prev'>{prev}</span>
                    <span className='cal-number'>{number}</span>
                </div>
            </div>
            <div className = 'cal-body'>
                {btnSet.map((con,i)=>{
                    return(<CalBtn 
                        setPrev = {setPrev}
                        number={number}
                        computeArr ={computeArr}
                        setComputeArr = {setComputeArr}
                        setNum = {setNumber}
                        contents = {con} 
                        key={i} 
                        > </CalBtn>)
                })}
            </div>
        </div>
    )
} 

export default Calculator;