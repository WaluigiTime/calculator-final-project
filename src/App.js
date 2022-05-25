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
      <div className="title">
        <h1> Calculator </h1>
      </div>
      <section className="buttons">
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
          buttonLabel={
            <math>
              <msqrt>X</msqrt>
            </math>
          }
          onClickHandler={() => {
            setAns(sqrrootFunc(x));
          }}
        />

        <Button
          buttonLabel={
            <math>
              <msqrt>Y</msqrt>
            </math>
          }
          onClickHandler={() => {
            setAns(sqrrootFunc(y));
          }}
        />

        <Button
          buttonLabel={
            <math>
              <msup>
                <mi>X</mi>
                <mn>y</mn>
              </msup>
            </math>
          }
          onClickHandler={() => {
            setAns(powFunc(x, y));
          }}
        />
        <Button
          buttonLabel={"Clear"}
          onClickHandler={() => {
            setAns(0);
            setX(0);
            setY(0);
          }}
        />
      </section>

      <div></div>
      <div className="input-area">
        <div className="number-inputs">
          <h3 className="h3-label">x</h3>
          <input
            type="number"
            value={x}
            onChange={(e) => {
              setX(parseFloat(e.target.value));
            }}
          />
        </div>
        <div className="number-inputs">
          <h3 className="h3-label">y</h3>
          <input
            type="number"
            value={y}
            onChange={(e) => {
              setY(parseFloat(e.target.value));
            }}
          />
        </div>
      </div>

      <h1 className="answer">{ans}</h1>
    </div>
  );
}

function Button(props) {
  return <button onClick={props.onClickHandler}> {props.buttonLabel} </button>;
}
