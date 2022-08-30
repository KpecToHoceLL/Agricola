import React from "react";
import {GardenEmpty} from "./actions";

export function ActionsTable1(props) {
    return(
        <div id='actionTable1'>
        <table>
        <tbody>
        <TrElemActionField/>
        <TrElemActionField/>
        <TrElemActionField/>
        </tbody>
        </table>
            <ul id='rightLineActions'>
                <LiElemActionsField/>
                <LiElemActionsField action={() => props.handleSetPlayerMaterials(1, 'food')}/>
                <LiElemActionsField action={() => props.handleSetPlayerMaterials(1, 'millet')}/>
                <LiElemActionsField actions={() => props.setActionChangeCell(GardenEmpty)}/>
                <LiElemActionsField/>
                <LiElemActionsField action={() => props.handleSetPlayerMaterials(1, 'food')}/>
            </ul>
        </div>
    )

}

export function TrElemActionField(props) {
    const values = props.number
    return (<tr>
        <TdElemActionField/>
    </tr>)
}


export function TdElemActionField(props) {
    return <td>
    </td>
}

export function LiElemActionsField(props) {
    return (
        <li class='liElemActionsField' onclick={props.action}></li>
    )
}