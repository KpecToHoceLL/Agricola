import './App.css';
import React, { useState } from "react";
import {FieldTable} from './tables/fieldTable.js';
import {ActionsTable} from './tables/actionFieldTable.js';
import {MaterialsTable} from './tables/materialsTable.js';
import {GetSheepAction, PlowAction} from "./tables/actions.js";

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
    const [playerField, setPlayerField] = useState(defaultPlayer.field);
    const handleSetPlayerField = (value, i, j) => {
        setPlayerField(playerField => {
            const newPlayerField = { ...playerField }

            newPlayerField[i][j] = value;

            return newPlayerField
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
          <PlowAction setActionChangeCell={setActionChangeCell}/>
          <GetSheepAction sheepIncrement={handleSetPlayerMaterials}/>
        </div>
  )
}

const defaultActionsField = ['plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow']

export default App;

