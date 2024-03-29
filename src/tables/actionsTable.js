import React, {useState} from "react";
import {GardenEmpty, RoomWooden, RoomClay} from "./actions";

export function ActionsTable1(props) {
    return(
        <div id='actionFieldBG1'>
        <div  id='actionField1'>
            <ActionButton actionCardNumber='1' action={() => (props.handleSetPlayerMaterials(1, 'food'), props.handleSetPlayerMaterials(1, 'stone'), props.handleSetPlayerMaterials(1, 'cane'))}></ActionButton>
            <ActionButton actionCardNumber='2' action={() => props.handleSetPlayerMaterials(1, 'wood')}></ActionButton>
            <ActionButton actionCardNumber='3' action={() => props.handleSetPlayerMaterials(2, 'wood')}></ActionButton>
            <ActionButton actionCardNumber='4' action={() => props.handleSetPlayerMaterials(1, 'food')}></ActionButton>
            <ActionButton actionCardNumber='5' action={null}></ActionButton>
            <ActionButton actionCardNumber='6' action={() => props.handleSetPlayerMaterials(2, 'clay')}></ActionButton>
                <div class='clearBlock1'>
                    <ActionButtonClear action={() => props.setActionChangeCell(RoomWooden)}/>
                    <ActionButtonClear action={() => props.handleSetPlayerMaterials(1, 'food')}/>
                    <ActionButtonClear action={() => props.handleSetPlayerMaterials(1, 'millet')}/>
                    <ActionButtonClear action={() => props.setActionChangeCell(GardenEmpty)}/>
                    <ActionButtonClear action={null}/>
                    <ActionButtonClear action={null}/>
                </div>
            </div>
        </div>
    )

}

export function ActionsTable2(props) {
    return(
        <div id='actionFieldBG2'>
            <div  id='actionField2'>
                <ActionButton actionCardNumber='7' action={() => props.handleSetPlayerMaterials(1, 'wood')}>111</ActionButton>
                <ActionButton actionCardNumber='8' action={() => props.setActionChangeCell(GardenEmpty)}>111</ActionButton>
                <ActionButton actionCardNumber='9' action={() => props.handleSetPlayerMaterials(1, 'sheep')}>111</ActionButton>
                <ActionButton actionCardNumber='10' action={null}>111</ActionButton>
                <ActionButton actionCardNumber='11' action={null}>111</ActionButton>
                <ActionButton actionCardNumber='12' action={null}>111</ActionButton>
                <ActionButton actionCardNumber='13' action={() => props.handleSetPlayerMaterials(1, 'stone')}>111</ActionButton>
                <div class='clearBlock2'>
                    <ActionButtonClear action={() => props.handleSetPlayerMaterials(3, 'wood')}/>
                    <ActionButtonClear action={() => props.handleSetPlayerMaterials(1, 'clay')}/>
                    <ActionButtonClear action={() => props.handleSetPlayerMaterials(1, 'cane')}/>
                    <ActionButtonClear action={() => props.handleSetPlayerMaterials(1, 'food')}/>
                </div>
            </div>
        </div>
    )

}

export function ActionButton(props) {
    const [isBorder, setIsBorder] = useState(false);
    const inWork = (props.action === null) ? <img className='Gizmo'
                                                 src='./img/Gizmo.png'></img> : null;
    if (props.action === null) {
        return (
            <img
                style={{ border: + isBorder ? '4px solid #94290c' : '4px solid transparent' }}
                onMouseOver={() => setIsBorder(true)}
                onMouseOut={() => setIsBorder(false)}
                onClick={() => props.action()}
                height='262'
                width='162'
                class='actionCard'
                id={'actionCardNumber' + props.actionCardNumber}
                src={'./img/actions/4players/' + props.actionCardNumber + 'inWork.png'}>
            </img>)
    }
    return (
        <img
            style={{ border: + isBorder ? '4px solid #94290c' : '4px solid transparent' }}
            onMouseOver={() => setIsBorder(true)}
            onMouseOut={() => setIsBorder(false)}
            onClick={() => props.action()}
            height='262'
            width='162'
            class='actionCard'
            id={'actionCardNumber' + props.actionCardNumber}
            src={'./img/actions/4players/' + props.actionCardNumber + '.png'}>
        </img>)

}

export function ActionButtonClear(props) {
    const inWork = (props.action === null) ? <img height='120'
                                                  width='120'
                                                  className='Gizmo'
                                                  src='./img/Gizmo.png'></img> : null;
    const [isBorder, setIsBorder] = useState(false)
    return (
        <div
            onClick={() => props.action()}
            style={{ border: + isBorder ? '4px solid green' : '4px solid transparent' }}
            onMouseOver={() => setIsBorder(true)}
            onMouseOut={() => setIsBorder(false)}
            class='ActionButtonClear actionButtonClear'>{inWork}</div>
    )
}
