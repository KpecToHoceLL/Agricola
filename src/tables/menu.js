import React from "react";
import {FieldTable} from "./fieldTable";

export function GameMenu(props) {
    return (
        <div id='menuBlock' onMouseOver={() => props.setFieldMenuIsHidden(false)} onMouseOut={() => props.setFieldMenuIsHidden(true)} >
        <ul id='menu'>
            <li>поле</li>
        </ul>
            <div id='fieldTableBG' style={{ display: + props.fieldIsHidden ? 'none' : null }}>
                <FieldTable target={props.actionChangeCell} playerField={props.playerField} handleSetPlayerField={props.handleSetPlayerField}/>
            </div>
        </div>
    )
}