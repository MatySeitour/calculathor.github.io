import { Button } from "../Button";
import {useState, useEffect} from "react"

function Keyboard({outputNum, setOutputNum}){
    const [operation, setOperation] = useState("");
    const [valueA, setValueA] = useState(0)
    const [valueB, setValueB] = useState(0)
    const [equalOnClick, setEqualOnClick] = useState(0)

    useEffect(() => {
        if (operation == "+") {
          let resultado = valueA + valueB;
          return setOutputNum(resultado);
        } else if (operation == "-") {
          let resultado = valueA - valueB;
          return setOutputNum(resultado);
        } else if (operation == "X") {
          let resultado = valueA * valueB;
          return setOutputNum(resultado);
        } else if (operation == "/") {
          let resultado = valueA / valueB;
          return setOutputNum(resultado);
        } else if (operation == "%") {
          let resultado = valueA * valueB / 100;
          return setOutputNum(resultado);
        } else if (operation == "x²") {
          let resultado = valueA ** valueB;
          return setOutputNum(resultado);
        }
      }, [equalOnClick]);

    function printer(value) {
        setOutputNum((prevOutputNums) => {
        return parseFloat(prevOutputNums.toString() + value.toString());
        });
    } 

    return(
        <div className="grid grid-cols-3 gap-4 px-4">
            <button
                onClick={(e) => {
                    setOutputNum(0)
                }
                } 
            className="btn btn-primary col-start-1 col-end-3 text-white bg-red-600 border-0 text-base">C</button>

            <button 
            onClick={() => {
                setOperation("/");
                setValueA(outputNum);
                setOutputNum(0)
              }}
            className="btn btn-primary text-black">/</button>
            <button 
            onClick={() => {
                setOperation("+");
                setValueA(outputNum);
                setOutputNum(0)
              }}
            className="btn btn-primary text-black">+</button>
            <button 
            onClick={() => {
                setOperation("x²");
                setValueA(outputNum);
                setOutputNum(0)
              }}
            className="btn btn-primary text-black">x²</button>
            <button 
            onClick={() => {
                setOperation("√");
                setValueA(outputNum);
                setOutputNum(0)
              }}
            className="btn btn-primary text-black">√</button>
            <button 
                onClick={() =>{
                    setOperation("%");
                    setValueA(outputNum);
                    setOutputNum(0)
                }}
                className="btn btn-primary text-black">%</button>
            <button 
                onClick={() =>{
                    setOperation("X");
                    setValueA(outputNum);
                    setOutputNum(0)
                }}
            className="btn btn-primary text-black">X</button>
            <button 
                onClick={() =>{
                    setOperation("-");
                    setValueA(outputNum);
                    setOutputNum(0)
                }}
            className="btn btn-primary text-black">-</button>
            <button 
            onClick={() =>{
                printer(7)
            }} 
            className="btn btn-primary text-black">7</button>
            <button 
                // onKeyDown={(e) =>{
                //     console.log(e)
                // }}
                onClick={() =>{
                    printer(8)
                }} 
            className="btn btn-primary text-black">8</button>
            <button 
                onClick={() =>{
                    printer(9)
                }} 
            className="btn btn-primary text-black">9</button>
            <button 
                onClick={() =>{
                    printer(4)
                }} 
                className="btn btn-primary text-black">
                    4
            </button>
            <button 
                onClick={() =>{
                    printer(5)
                }} 
                className="btn btn-primary text-black">
                    5
            </button>
            <button 
                onClick={() =>{
                    printer(6)
                }} 
                className="btn btn-primary text-black">
                    6
            </button>
            <button onClick={() =>{
                printer(1)
            }} 
            className="btn btn-primary text-black">1</button>
            <button 
                onClick={() =>{
                    printer(2)
                }} 
                className="btn btn-primary text-black">
                    2
            </button>

            <button 
                onClick={() =>{
                    printer(3)
                }} 
                className="btn btn-primary text-black">
                    3
            </button>
            <button 
                onClick={() =>{
                    printer(0)
                }} 
                className="btn btn-primary text-black">
                    0
            </button>
            <button 
                onClick={() => {
                    setValueB(outputNum);
                    setEqualOnClick((prevEqual) => prevEqual + 1);
                }}
            className="btn btn-primary text-black col-start-2 col-end-4">=</button>
        </div>
    );
}

export { Keyboard };