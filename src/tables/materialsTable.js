import React from "react";

export function MaterialsTable(props) {
    return <div class='materialsTable'>
            <div class="materialsValue"><img class='icon' src='./img/icons/foodIcon.png'></img>{props.playerMaterials.food}</div>
            <div class="materialsValue"><img class='icon' src='./img/icons/woodIcon.png'></img>:{props.playerMaterials.wood}</div>
            <div class="materialsValue"><img class='icon' src='./img/icons/clayIcon.png'></img>:{props.playerMaterials.clay}</div>
            <div class="materialsValue"><img class='icon' src='./img/icons/stoneIcon.png'></img>:{props.playerMaterials.stone}</div>
            <div class="materialsValue"><img class='icon' src='./img/icons/caneIcon.png'></img>:{props.playerMaterials.cane}</div>
            <div class="materialsValue"><img class='icon' src='./img/icons/milletIcon.png'></img>:{props.playerMaterials.millet}</div>
            <div class="materialsValue"><img class='icon' src='./img/icons/vegIcon.png'></img>:{props.playerMaterials.veg}</div>
            <div class="materialsValue"><img class='icon' src='./img/icons/sheepIcon.jpg'></img>:{props.playerMaterials.sheep}</div>
            <div class="materialsValue"><img class='icon' src='./img/icons/pigIcon.jpg'></img>:{props.playerMaterials.pig}</div>
            <div class="materialsValue"><img class='icon' src='./img/icons/cowIcon.jpg'></img>:{props.playerMaterials.cow}</div>
        </div>
}