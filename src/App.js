import './App.css';
import React, { useState } from "react";
import {FieldTable} from './tables/fieldTable.js';
import {ActionsTable1} from './tables/actionsTable.js';
import {MaterialsTable} from './tables/materialsTable.js';
import {Empty, GardenEmpty, GetSheepAction, PlowAction} from "./tables/actions.js";
import {GameMenu} from './tables/menu.js';

function App() {
    const defaultActionsField = ['plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow','plow'];

    const defaultPlayer = {
        field: [[Empty,Empty,Empty,Empty,Empty],
            [Empty,Empty,Empty,Empty,Empty],
            [Empty,Empty,Empty,Empty,Empty]],
        materials: {
            food: 0,
            wood: 0,
            clay: 0,
            stone: 0,
            cane: 0,
            millet: 0,
            veg: 0,
            sheep: 0,
            pig: 0,
            cow: 0
        }
    }
    const [playerMaterials, setPlayerMaterials] = useState(defaultPlayer.materials);
    const [playerField, setPlayerField] = useState(defaultPlayer.field);
    const [fieldIsHidden, setFieldMenuIsHidden] = useState(true);
    const handleSetPlayerField = (value, i, j) => {
        setPlayerField(playerField => {
            const newPlayerField = { ...playerField }

            newPlayerField[i][j] = value;

            return newPlayerField
        })

    }
    const handleSetPlayerMaterials = (value, key) => {
        setPlayerMaterials(playerMaterials => {
            const newPlayerMaterials = { ...playerMaterials }

            newPlayerMaterials[key] = newPlayerMaterials[key] + value;

            return newPlayerMaterials
        })

    }
    const [actionChangeCell, setActionChangeCell] = useState(null);
    return (
      <div id="App">
         <GameMenu fieldIsHidden={fieldIsHidden} actionChangeCell={actionChangeCell} playerField={playerField} handleSetPlayerField={handleSetPlayerField} setFieldMenuIsHidden={setFieldMenuIsHidden}/>
          <MaterialsTable playerMaterials={playerMaterials}/>

    <ActionsTable1 setActionChangeCell={setActionChangeCell} handleSetPlayerField={handleSetPlayerField} handleSetPlayerMaterials={handleSetPlayerMaterials}/>

        </div>
  )
}


export default App;

