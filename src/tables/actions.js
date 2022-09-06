import React from "react";

export const Empty = <div className="fieldCell"></div>;
export const GardenEmpty = <img className="fieldCell" src='./img/Plowed.jpg'></img>;
export const GardenMill3 = <img className="fieldCell" src='./img/Plowed.jpg'></img>;
export const RoomWooden = <img className="fieldCell" src='./img/RoomWood.png'></img>;

export function GetSheepAction(props) {
    return (
        <div onClick={() => props.sheepIncrement(1, 'sheep')}>GetSheep</div>
    )
}

export function PlowAction(props) {
    return (
        <div onClick={() => props.setActionChangeCell(GardenEmpty)}>Plow</div>
    )
}

export function SowAction(props) {
    return (
        <div onClick={() => props.setActionChangeCell(GardenMill3)}>Plow</div>
    )
}

