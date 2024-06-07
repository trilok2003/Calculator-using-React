
import { useState } from "react";
import styles from "./App.module.css";
import ButtonBox from "./components/ButtonBox";
import Display from "./components/Display";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) =>{
    console.log(buttonText);
    if(buttonText === "C"){
      setCalVal("");
    }
    else if(buttonText === "="){
      const result = eval(calVal);
      setCalVal(result);
    }
    else{
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }

  return (
    <div className={styles.calculator}>
      <Display dispalyValue = {calVal}/>
      <ButtonBox onButtonClick = {onButtonClick} />
    </div>
  )
}

export default App
