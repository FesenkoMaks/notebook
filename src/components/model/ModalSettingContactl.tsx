import React, {useState} from "react";
import "./ModalSettingContact.css"
import {useFormik} from "formik";
import {addItemAC, editItemAC, removeItemAC} from "../../store/list-reducer";
import {useDispatch} from "react-redux";

type propsModalType = {
    fullName: string,
    number: string,
    email: string,
    id: string
}

const ModalSettingContact = ({fullName, number, email, id}: propsModalType) => {

    const [active, setActive] = useState(false)

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            fullName,
            number,
            email,
            id
        },
        onSubmit: model => {
            dispatch(editItemAC(model))
            setActive(false)
        },
    });
    return (
        <>

            <button onClick={() => setActive(true)}>setting</button>
            <button onClick={() => dispatch(removeItemAC(id))}>delete</button>
            <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
                <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
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
                        <button type="submit">Ok</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ModalSettingContact