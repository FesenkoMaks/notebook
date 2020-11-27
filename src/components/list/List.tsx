import React, {useReducer, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {addItemAC, itemType, removeItemAC} from "../../store/list-reducer";
import { useFormik } from 'formik';
import Modal from "../model/Modal";


export const List = () => {
    const [modalActive, setModalActive] = useState(false)
    const [modalSettingActive, setModalSettingActive] = useState(false)

    const arr = useSelector<AppRootStateType, any>(state => state.list)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            fullName: '',
            number: '',
            email: '',
        },
        onSubmit: values => {
            dispatch(addItemAC(values))
            setModalActive(false)
        },
    });
    const formikSetting = useFormik({
        initialValues: {
            fullName: '',
            number: '',
            email: '',
        },
        onSubmit: values => {
            dispatch(addItemAC(values))
            setModalActive(false)
        },
    });
    return (
        <div>
            <button onClick={() => setModalActive(true)}>add new</button>

            {arr.map((a: itemType) => <div>
                <div> {a.fullName} </div>
                <div> {a.number} </div>
                <div> {a.email} </div>
                <div>
                    <button onClick={() => setModalSettingActive(true)}>setting</button>
                    <button onClick={() => dispatch(removeItemAC(a.id))}>delete</button>
                </div>
                <Modal active={modalActive} setActive={setModalActive}>
                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.fullName}
                        />
                        <label htmlFor="number">Number</label>
                        <input
                            id="number"
                            name="number"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.number}
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        <button type="submit">Submit</button>
                    </form>
                </Modal>
                <Modal active={modalSettingActive} setActive={setModalSettingActive}>
                    <form onSubmit={formikSetting.handleSubmit}>
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            onChange={formik.handleChange}
                            value={a.fullName}
                        />
                        <label htmlFor="number">Number</label>
                        <input
                            id="number"
                            name="number"
                            type="text"
                            onChange={formik.handleChange}
                            value={a.number}
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={a.email}
                        />
                        <button type="submit">Submit</button>
                    </form>
                </Modal>
            </div>)}

        </div>

    )
}