import React from "react";

export const Empty = <div className="fieldCell"></div>;
export const GardenEmpty = <img className="fieldCell" src='./img/Plowed.jpg'></img>;
export const GardenMill3 = <img className="fieldCell" src='./img/Plowed.jpg'></img>;
export const RoomWooden = <img className="fieldCell" src='./img/RoomWood.png'></img>;
export const RoomClay = <img className="fieldCell" src='./img/RoomClay.png'></img>;


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

