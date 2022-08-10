import React from "react";

export function MaterialsTable(props) {
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