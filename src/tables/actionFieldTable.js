import React from "react";

export function ActionsTable(props) {
    const actions = props.actions;
    const tr1 = actions.slice([0], [7]);
    const tr2 = actions.slice([7], [14]);
    const tr3 = actions.slice([14], [21]);
    const tr4 = actions.slice([21], [28]);
    const tr5 = actions.slice([35]);
    return(
        <table>
        <tbody>
            <TrElemActionField number={tr1} chosenAction={props.chosenAction}/>
            <TrElemActionField number={tr2} chosenAction={props.chosenAction}/>
            <TrElemActionField number={tr3} chosenAction={props.chosenAction}/>
            <TrElemActionField number={tr4} chosenAction={props.chosenAction}/>
            <TrElemActionField number={tr5} chosenAction={props.chosenAction}/>
        </tbody>
        </table>
    )

}

export function TrElemActionField(props) {
    const values = props.number
    return (<tr>
        <TdElemActionField value={values[0]} chosenAction={props.chosenAction}/>
        <TdElemActionField value={values[1]} chosenAction={props.chosenAction}/>
        <TdElemActionField value={values[2]} chosenAction={props.chosenAction}/>
        <TdElemActionField value={values[3]} chosenAction={props.chosenAction}/>
        <TdElemActionField value={values[4]} chosenAction={props.chosenAction}/>
        <TdElemActionField value={values[5]} chosenAction={props.chosenAction}/>
        <TdElemActionField value={values[6]} chosenAction={props.chosenAction}/>
    </tr>)
}


export function TdElemActionField(props) {
    return <td>
    </td>
}

