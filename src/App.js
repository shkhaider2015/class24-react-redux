import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "./state/index";

function App() {

  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreator, dispatch);

  // console.log("AC : ", AC)

  return (
    <div className="App">
      <h1> {state.Account} </h1>
      <button onClick={() => depositMoney(200)} >Deposit</button>
      <button onClick={() => withdrawMoney(50)} >Withdraw</button>
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=9jULHSe41ls