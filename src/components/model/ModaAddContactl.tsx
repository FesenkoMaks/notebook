import React, {useState} from "react";
import "./ModalAddContact.css"
import {useFormik} from "formik";
import {addItemAC} from "../../store/list-reducer";
import {useDispatch} from "react-redux";

type propsModalType = {
    active: boolean,
    setActive: any
}

const ModalAddContact = ({active, setActive}: propsModalType) => {


    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            fullName: '',
            number: '',
            email: '',
        },
        onSubmit: values => {
            dispatch(addItemAC(values))
            setActive(false)
        },
    });
    return (
        <>
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
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ModalAddContact