import React from "react";

export function FieldTable(props) {
    return(
        <table>
            <tbody>
            <TrElemField playerField={props.playerField} trNumber={0} handleSetPlayerField={props.handleSetPlayerField} target={props.target}/>
            <TrElemField playerField={props.playerField} trNumber={1} handleSetPlayerField={props.handleSetPlayerField} target={props.target}/>
            <TrElemField playerField={props.playerField} trNumber={2} handleSetPlayerField={props.handleSetPlayerField} target={props.target}/>
            </tbody>
        </table>
    )
}

export function TrElemField(props) {
    return (<tr>
        <TdElem playerField={props.playerField} handleSetPlayerField={props.handleSetPlayerField} target={props.target} trNumber={props.trNumber} tdNumber={0}/>
        <TdElem playerField={props.playerField} handleSetPlayerField={props.handleSetPlayerField} target={props.target} trNumber={props.trNumber} tdNumber={1}/>
        <TdElem playerField={props.playerField} handleSetPlayerField={props.handleSetPlayerField} target={props.target} trNumber={props.trNumber} tdNumber={2}/>
        <TdElem playerField={props.playerField} handleSetPlayerField={props.handleSetPlayerField} target={props.target} trNumber={props.trNumber} tdNumber={3}/>
        <TdElem playerField={props.playerField} handleSetPlayerField={props.handleSetPlayerField} target={props.target} trNumber={props.trNumber} tdNumber={4}/>
    </tr>)
}

export function TdElem(props) {
    return (
        <td onClick={() => props.handleSetPlayerField[props.trNumber][props.tdNumber](props.target)}>{props.playerField[props.trNumber][props.tdNumber]}</td>
    )
}
