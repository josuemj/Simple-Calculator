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

  const handleNumberClick = (number) => {
    console.log(`number: ${number}`);
    setInput(input + number);

    if(isOperating){
      console.log("After opertaion")
      setCurrentNumber("")
      setCurrentNumber(number)
      setIsOperating(false)

    }else{
      setCurrentNumber(currentNumber + number)
    }

  };

  const handleOperationClick = (operation) => {
    if (operation == "C") {
      setInput("");
      setCurrentNumber("")

    } else if (operation == "=") {
      try {
        console.log(input);
        console.log(`result: ${eval(input).toString}`);
        setInput(eval(input).toString());
        setCurrentNumber(eval(input).toString())
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
          <OperationButton text={"-"} onClick={handleNumberClick} />{" "}
          {/*Operation*/}
          <NumberContainer text={"1"} onClick={handleNumberClick} />
          <NumberContainer text={"2"} onClick={handleNumberClick} />
          <NumberContainer text={"3"} onClick={handleNumberClick} />
          <OperationButton text={"+"} onClick={handleOperationClick} />{" "}
          {/*Operation*/}
          <NumberContainer text={"-/+"} /> {/*not necess*/}
          <NumberContainer text={"0"} onClick={handleNumberClick} />
          <NumberContainer text={"."} />
          <OperationButton text={"="} onClick={handleOperationClick} />
        </div>
      </div>
    </>
  );
}

export default App;
