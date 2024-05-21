import "./App.css";
import OperationButton from "./components/OperationButton";
import NumberContainer from "./components/NumberContainer";
import { useState } from "react";
function App() {
  const operationSample = () => {
    console.log("Operatacion button function");
  };

  const [input, setInput] = useState("");
  const [currentNumber, setCurrentNumber] = useState("")
  const [isOperating, setIsOperating] = useState(false)

  const handleNegativeNumber = (number) => {
    setInput("-"+input)
    setCurrentNumber("-"+input)
  }

  const handleNumberClick = (number) => {
    console.log(`number: ${number}`);

    if(input.length >= 9){
      console.log("overpassing 9 digits") 
      if(isOperating){
        setInput(input + number);
      }
    }else{
      setInput(input + number);
      console.log(`current len: ${input.length}`)
    }


    if(isOperating){
      console.log("After opertaion")
      setCurrentNumber("")
      setCurrentNumber(number)
      setIsOperating(false)

    }else{
      
      if (input.length >= 9){
        setCurrentNumber(currentNumber)
      }else{
        setCurrentNumber(currentNumber + number)
      }
      
    }

  };

  const handleOperationClick = (operation) => {
    if (operation == "C") {
      setInput("");
      setCurrentNumber("")

    } else if (operation == "=") {
      try {

        console.log(`current input = ${input}`);
        console.log(`result: ${eval(input).toString()}`);

        var result = eval(input).toString()
        console.log(`result length: ${result.length}`)

        if (result.length > 9){
          setInput("")
          setCurrentNumber("Length error")
        }else{
          setInput(result);
          setCurrentNumber(result)  
        }

        if(result < 0){
          console.log("Negative result")
          setCurrentNumber("Error (negative)")
        }
       
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput(input + operation);
      console.log(`Operation detected: ${operation}`);
      setIsOperating(true)
    }
  };

  return (
    <>
      <div className="calculator-container">
        <div className="input-container">
          <h1>{currentNumber}</h1>
        </div>
        <div className="buttons-container">
          <OperationButton text={"C"} onClick={handleOperationClick} />
          <OperationButton text={"n"} />
          <OperationButton text={"n"} />
          <OperationButton text={"/"} onClick={handleOperationClick} />{" "}
          {/*Operation*/}
          <NumberContainer text={"7"} onClick={handleNumberClick} />
          <NumberContainer text={"8"} onClick={handleNumberClick} />
          <NumberContainer text={"9"} onClick={handleNumberClick} />
          <OperationButton text={"*"} onClick={handleOperationClick} />{" "}
          {/*Operation*/}
          <NumberContainer text={"4"} onClick={handleNumberClick} />
          <NumberContainer text={"5"} onClick={handleNumberClick} />
          <NumberContainer text={"6"} onClick={handleNumberClick} />
          <OperationButton text={"-"} onClick={handleOperationClick} />{" "}
          {/*Operation*/}
          <NumberContainer text={"1"} onClick={handleNumberClick} />
          <NumberContainer text={"2"} onClick={handleNumberClick} />
          <NumberContainer text={"3"} onClick={handleNumberClick} />
          <OperationButton text={"+"} onClick={handleOperationClick} />{" "}
          {/*Operation*/}
          <NumberContainer text={"-/+"} onClick={handleNegativeNumber}/>
          <NumberContainer text={"0"} onClick={handleNumberClick} />
          <NumberContainer text={"."} onClick={handleNumberClick}/>
          <OperationButton text={"="} onClick={handleOperationClick} />
        </div>
      </div>
    </>
  );
}

export default App;
