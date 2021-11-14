function CalBtn({ contents,setNum,setComputeArr,number,computeArr,setPrev }){
    const calbtnOnclick = () =>{
        setPrev(current=>{current += contents})

        if(typeof contents === 'number'){
            setNum(current=>{
                return current == 0 ? contents : current + '' + contents
            })
        }
        else{
            switch(contents){
                case '+' : 
                case '-' : 
                case 'X' : 
                case '/' : 
                    setComputeArr(current=>[...current,number,contents]);
                    setNum(0); break;
                case 'CE' : setComputeArr([]); setNum(0); break;
                case '=' :
                    let res = 0;
                    computeArr.forEach((v,i)=>{
                        if(i%2 === 0){
                            if(i === 0) res = v;
                            else{ res = compute(computeArr[i-1],res,v) }
                        }
                    })
                    res = compute(computeArr[computeArr.length-1],res,number);

                    setComputeArr([]);
                    setNum(res); break
            }
        }
    }

    const compute = (op,num1,num2)=>{
        num1 = num1*1;
        if(op === '+') num1 += num2*1;
        if(op === '-') num1 -= num2*1;
        if(op === 'X') num1 *= num2*1;
        if(op === '/') num1 /= num2*1;
        return num1;
    }

    return(
        <span className={typeof contents === 'number' ? 'cal-btn num' : 'cal-btn'} onClick={calbtnOnclick}>{contents}</span>
    )
} 

export default CalBtn;