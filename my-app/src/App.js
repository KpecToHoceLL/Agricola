import './App.css';
import React from "@types/react";

function App() {
  return (
    <FieldTable player={defaultPlayer.field} />
  );
}

const defaultPlayer = {
  field: ['empty', 'house1', 'house2', 'house3', 'gardenEmpty', 'gardenVeg1', 'gardenVeg2', 'gardenMi1', 'gardenMi2', 'gardenMi3', 'corral', 'empty', 'empty', 'empty', 'empty'],
  res: []
}

function FieldTable(props) {
  const player = props.player;
  const tr1 = player.slice([0], [5]);
  const tr2 = player.slice([5], [10]);
  const tr3 = player.slice([10], [14]);
  return(
     <table>
  <TrElem number={tr1} />
  <TrElem number={tr2} />
  <TrElem number={tr3} />
      </table>
)
}

function TrElem(props) {
  const values = props.number;
  return (<tr>
    <TdElem value={values[0]} />
    <TdElem value={values[1]} />
    <TdElem value={values[2]} />
    <TdElem value={values[3]} />
    <TdElem value={values[4]} />
  </tr>)
}

function TdElem(props) {
  return (<td>{props.value}</td>)
}


export default App;

