import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { bindActionCreators } from "redux";
import { actionCreators } from "./redux/actions";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  console.log("---State----", state);
  return (
    <div className="App">
      <h1>TEST REDUX</h1>
      <h1>{state.account}</h1>

      <button onClick={() => depositMoney(1000)}> Deposit </button>
      <button onClick={() => withdrawMoney(1000)}> Withdraw </button>
    </div>
  );
}

export default App;
