import React from "react";
import { getFibonacci, simpleMultiply } from "../../utils/basic";
import { memoize } from "../../utils/memoize";
import "./styles.css";

function BigCalculation() {
  const fibonacci = memoize(getFibonacci);
  const multiplication = memoize(simpleMultiply);
  return (
    <div className="container">
      <p>{fibonacci(10)}</p>
      <p>{fibonacci(12)}</p>
      <p>{fibonacci(12)}</p>
      <p>{multiplication(10, 12)}</p>
      <p>{multiplication(10, 12)}</p>
    </div>
  );
}

export default BigCalculation;
