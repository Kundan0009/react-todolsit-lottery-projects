import LudoBoard from "./LudoBoard.jsx";
import TodoList from "./TodoList.jsx";
import './App.css'
import Lottery from "./Lottery.jsx";
import Ticket from "./Ticket.jsx";
import { sum } from "./helper.js";

function App() {
  let winCondition=(ticket)=>{
    //return sum(ticket)===15;
    return ticket.every((num)=> num===ticket[0]);
  };
  return (
  <>
      {/* <Lottery n={3} winCondition={winCondition} /> */}
      <TodoList/>
      
  </>
  );
}

export default App;
