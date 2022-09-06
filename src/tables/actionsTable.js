import React, {useState} from "react";
import {GardenEmpty, RoomWooden} from "./actions";

export function ActionsTable1(props) {
    return(
            <div  id='actionField'>
            <ActionButton item='1'>111</ActionButton>
            <ActionButton item='2'>111</ActionButton>
            <ActionButton item='3'>111</ActionButton>
            <ActionButton item='4'>111</ActionButton>
            <ActionButton item='5'>111</ActionButton>
            <ActionButton item='6'>111</ActionButton>
                <div class='clearBlock'>
                    <ActionButtonClear  onClick={() => props.setActionChangeCell(RoomWooden)}/>
                    <ActionButtonClear onclick={() => props.handleSetPlayerMaterials(1, 'food')}/>
                    <ActionButtonClear onclick={() => props.handleSetPlayerMaterials(1, 'millet')}/>
                    <ActionButtonClear onClick={() => props.setActionChangeCell(GardenEmpty)}/>
                    <ActionButtonClear/>
                    <ActionButtonClear/>
                </div>
            </div>
    )

}

export function ActionButton(props) {
    return (
        <img class={'item' + props.item} src='./img/actions/4players/1.png'></img>
    )
}


export function ActionButtonClear(props) {
    const [isBorder, setIsBorder] = useState(false)
    return (
        <div style={{ border: + isBorder ? '5px solid' : 'none' }} onMouseOver={() => setIsBorder(true)} onMouseOut={() => setIsBorder(false)} class='item0' onClick={() => props.action}></div>
    )
}