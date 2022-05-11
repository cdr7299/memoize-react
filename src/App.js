import "./styles.css";
import BigCalculation from "./components/BigCalculation";
export default function App() {
  console.log("Mounted");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <BigCalculation />
    </div>
  );
}
