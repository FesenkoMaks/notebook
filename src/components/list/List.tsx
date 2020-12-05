import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {itemType, removeItemAC} from "../../store/list-reducer";
import ModalAddContact from "../model/ModaAddContactl";
import ModalSettingContact from "../model/ModalSettingContactl";
import {v1} from "uuid";


export const List = () => {
    const [active, setActive] = useState(false)


    const arr = useSelector<AppRootStateType, any>(state => state.list)

    return (
        <div>
            <button onClick={() => setActive(true)}>add new</button>
            {arr.map((a: itemType) => <div key={v1()}>
                <div> {a.fullName} </div>
                <div> {a.number} </div>
                <div> {a.email} </div>
                <div>
                    <ModalAddContact active={active} setActive={setActive}/>
                    <ModalSettingContact fullName={a.fullName} number={a.number} email={a.email} id={a.id}/>
                </div>

            </div>)}

        </div>

    )
}