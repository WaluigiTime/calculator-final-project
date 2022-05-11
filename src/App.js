import "./styles.css";
import React, { useState } from "react";
import {
  addFunc,
  multiFunc,
  subtractFunc,
  divideFunc,
  modFunc,
  sqrrootFunc,
  powFunc
} from "./CalFunctions.js";
export default function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ans, setAns] = useState(0);
  return (
    <div className="App">
      <h1>
        <Button
          buttonLabel={"+"}
          onClickHandler={() => {
            setAns(addFunc(x, y));
          }}
        />

        <Button
          buttonLabel={"-"}
          onClickHandler={() => {
            setAns(subtractFunc(x, y));
          }}
        />

        <Button
          buttonLabel={"x"}
          onClickHandler={() => {
            setAns(multiFunc(x, y));
          }}
        />

        <Button
          buttonLabel={"/"}
          onClickHandler={() => {
            setAns(divideFunc(x, y));
          }}
        />

        <Button
          buttonLabel={"%"}
          onClickHandler={() => {
            setAns(modFunc(x, y));
          }}
        />

        <Button
          buttonLabel={"Sqrt X"}
          onClickHandler={() => {
            setAns(sqrrootFunc(x));
          }}
        />

        <Button
          buttonLabel={"Sqrt Y"}
          onClickHandler={() => {
            setAns(sqrrootFunc(y));
          }}
        />

        <Button
          buttonLabel={"X^y"}
          onClickHandler={() => {
            setAns(powFunc(x, y));
          }}
        />

        <div>
          <Button
            buttonLabel={"Clear"}
            onClickHandler={() => {
              setAns(0);
              setX(0);
              setY(0);
            }}
          />
        </div>
        <div>
          x{" "}
          <input
            type="number"
            value={x}
            onChange={(e) => {
              setX(parseFloat(e.target.value));
            }}
          />
        </div>
        <div>
          y{" "}
          <input
            type="number"
            value={y}
            onChange={(e) => {
              setY(parseFloat(e.target.value));
            }}
          />
        </div>
      </h1>

      <div>{ans}</div>
    </div>
  );
}

function Button(props) {
  return <button onClick={props.onClickHandler}> {props.buttonLabel} </button>;
}
