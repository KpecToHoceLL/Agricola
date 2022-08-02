import './App.css';
import React, { useState } from "react";
import {FieldTable} from './tables/fieldTable.js';
import {ActionsTable} from './tables/actionFieldTable.js';

function App() {
    const defaultPlayer = {
        field: [['empty','empty','empty','empty','empty'],
            ['empty','empty','empty','empty','empty'],
            ['empty','empty','empty','empty','empty']],
        materials: {
            wood: 0,
            clay: 0,
            stone: 0,
            cane: 0,
            sheep: 0,
            pig: 0,
            cow: 0
        }
    }
    const [playerMaterials, setPlayerMaterials] = useState(defaultPlayer.materials);
    /*
    const [cell00, setCell00] = useState('empty');
    const [cell01, setCell01] = useState('empty');
    const [cell02, setCell02] = useState('empty');
    const [cell03, setCell03] = useState('empty');
    const [cell04, setCell04] = useState('empty');
    const [cell10, setCell10] = useState('empty');
    const [cell11, setCell11] = useState('empty');
    const [cell12, setCell12] = useState('empty');
    const [cell13, setCell13] = useState('empty');
    const [cell14, setCell14] = useState('empty');
    const [cell20, setCell20] = useState('empty');
    const [cell21, setCell21] = useState('empty');
    const [cell22, setCell22] = useState('empty');
    const [cell23, setCell23] = useState('empty');
    const [cell24, setCell24] = useState('empty');
    const playerArr = [[cell00,cell01,cell02,cell03,cell04],[cell10,cell11,cell12,cell13,cell14],[cell20,cell21,cell22,cell23,cell24]]
    const setPlayerArr = [[setCell00,setCell01,setCell02,setCell03,setCell04],[setCell10,setCell11,setCell12,setCell13,setCell14],[setCell20,setCell21,setCell22,setCell23,setCell24]]
    */
    const [playerField, setPlayerField] = useState(defaultPlayer.field);
    const handleSetPlayerField = (value, i, j) => {
        setPlayerField(playerField => {
            playerField[i][j] = value;
            return playerField
        })
        console.log(playerField)
    }
    const handleSetPlayerMaterials = (value, key) => {
        setPlayerMaterials(playerMaterials => {
            playerMaterials[key] = playerMaterials[key]+value;
            return playerMaterials
        })
    }
    const [actionChangeCell, setActionChangeCell] = useState(null);
    return (
      <div>
          <div>{actionChangeCell}</div>
        <MaterialsTable playerMaterials={playerMaterials}/>
        <FieldTable target={actionChangeCell} playerField={playerField} handleSetPlayerField={handleSetPlayerField}/>
        <ActionsTable actions={defaultActionsField}/>
          <Plow setActionChangeCell={setActionChangeCell}/>
          <GetSheepAction sheepIncrement={handleSetPlayerMaterials}/>
        </div>
  )
}

const defaultActionsField = ['plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow']

function MaterialsTable(props) {
  return <table>
    <tr>
      <td>Wood:{props.playerMaterials.wood}</td>
      <td>Clay:{props.playerMaterials.clay}</td>
      <td>Stone:{props.playerMaterials.stone}</td>
      <td>Cane:{props.playerMaterials.cane}</td>
      <td>Sheep:{props.playerMaterials.sheep}</td>
      <td>Pig:{props.playerMaterials.pig}</td>
      <td>Cow:{props.playerMaterials.cow}</td>
  </tr></table>
}

export function GetSheepAction(props) {
    return (
        <div onClick={() => props.sheepIncrement(1, 'sheep')}>Sheep</div>
    )
}

export function Plow(props) {
    return (
        <div onClick={() => props.setActionChangeCell('gardenEmpty')}>Plow</div>
    )
}

export default App;

