import React from "react";

export function MaterialsTable(props) {
    return <table id='materialsTable'>
        <tr>
            <td class="materialsValue"><img class='icon' src='./img/icons/foodIcon.png'></img>{props.playerMaterials.food}</td>
            <td class="materialsValue"><img class='icon' src='./img/icons/woodIcon.png'></img>:{props.playerMaterials.wood}</td>
            <td class="materialsValue"><img class='icon' src='./img/icons/clayIcon.png'></img>:{props.playerMaterials.clay}</td>
            <td class="materialsValue"><img class='icon' src='./img/icons/stoneIcon.png'></img>:{props.playerMaterials.stone}</td>
            <td class="materialsValue"><img class='icon' src='./img/icons/caneIcon.png'></img>:{props.playerMaterials.cane}</td>
            <td class="materialsValue"><img class='icon' src='./img/icons/milletIcon.png'></img>:{props.playerMaterials.millet}</td>
            <td class="materialsValue"><img class='icon' src='./img/icons/vegIcon.png'></img>:{props.playerMaterials.veg}</td>
            <td class="materialsValue"><img class='icon' src='./img/icons/sheepIcon.jpg'></img>:{props.playerMaterials.sheep}</td>
            <td class="materialsValue"><img class='icon' src='./img/icons/pigIcon.jpg'></img>:{props.playerMaterials.pig}</td>
            <td class="materialsValue"><img class='icon' src='./img/icons/cowIcon.jpg'></img>:{props.playerMaterials.cow}</td>
        </tr></table>
}