import "./App.css";
import OperationButton from "./components/OperationButton";
import NumberContainer from "./components/NumberContainer";
function App() {

  const operationSample = () => {
    console.log("Operatacion button function")
  }

  return (
    <>
      <div className="calculator-container">
        <div className="input-container">
          input
        </div>
        <div className="buttons-container">
          <OperationButton text={"C"}/>
          <OperationButton text={"n"}/>{/*not necess*/}
          <OperationButton text={"n"}/>{/*not necess*/}
          <OperationButton text={"/"}/>

          <NumberContainer text={"7"}/>
          <NumberContainer text={"8"}/>
          <NumberContainer text={"9"}/>
          <OperationButton text={"X"}/>

          <NumberContainer text={"4"}/>
          <NumberContainer text={"5"}/>
          <NumberContainer text={"6"}/>
          <OperationButton text={"-"}/>

          <NumberContainer text={"1"}/>
          <NumberContainer text={"2"}/>
          <NumberContainer text={"3"}/>
          <OperationButton text={"+"}/>

          <NumberContainer text={"-/+"}/> {/*not necess*/}
          <NumberContainer text={"0"}/>
          <NumberContainer text={"."}/>
          <OperationButton text={"="}/>
  
        </div>
      </div>

    </>
  );
}

export default App;
