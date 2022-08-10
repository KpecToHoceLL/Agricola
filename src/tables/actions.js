import React from "react";

export function GetSheepAction(props) {
    return (
        <div onClick={() => props.sheepIncrement(1, 'sheep')}><img src='./img/Plowed.jpg'></img></div>
    )
}

export function PlowAction(props) {
    return (
        <div onClick={() => props.setActionChangeCell('gardenEmpty')}>Plow</div>
    )
}