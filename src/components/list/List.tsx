import React, {useState} from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {itemType} from "../../store/list-reducer";
import ModalAddContact from "../model/ModaAddContactl";
import ModalSettingContact from "../model/ModalSettingContactl";
import {v1} from "uuid";
import "./List.css"
import Icons from "../Icons/Icons";


export const List = () => {
    const [active, setActive] = useState(false)


    const arr = useSelector<AppRootStateType, itemType[]>(state => state.list)

    return (
        <div className={'list'}>
            <button className={'addButton'} onClick={() => setActive(true)}>+</button>
            {arr.map((a: itemType) => <div className={'listItem'} key={v1()}>
                <div className={'listItems'}>{Icons.user()} <span>{a.fullName}</span> </div>
                <div className={'listItems'}>{Icons.phone()}<span>{a.number} </span></div>
                <div className={'listItems'}>{Icons.email()} <span>{a.email}</span> </div>
                <ModalAddContact active={active} setActive={setActive}/>
                <ModalSettingContact fullName={a.fullName} number={a.number} email={a.email} id={a.id}/>
            </div>)}

        </div>

    )
}