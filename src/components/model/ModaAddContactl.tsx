import React from "react";
import "./ModalAddContact.css"
import {useFormik} from "formik";
import {addItemAC} from "../../store/list-reducer";
import {useDispatch} from "react-redux";
import Icons from "../Icons/Icons";
import * as Yup from "yup";

type propsModalType = {
    active: boolean,
    setActive: (values: boolean) => void
}


export const validationSchema = () => Yup.object({
    fullName: Yup.string()
        .required('Required '),
    number: Yup.string()
        .required('Required ')
        .min(9, '9 digits in format 295552211')
        .max(9,'9 digits in format 295552211'),
    email: Yup.string()
        .email('Invalid email address ')
        .required('Required '),
})

const ModalAddContact = ({active, setActive}: propsModalType) => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            fullName: '',
            number: '',
            email: '',
        },
        validationSchema,
        onSubmit: values => {
            dispatch(addItemAC(values))
            setActive(false)
        },
    });
    return (
        <>
            <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
                <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
                    <h2>New contact</h2>
                    <form onSubmit={formik.handleSubmit} className={'form'}>
                        <div className={'formItem'}>
                            <div className={'formItem_name'}>Full Name</div>
                            <div className={'formItem_input'}>
                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.fullName}
                                />
                                {formik.errors.fullName ? <div className={'error'}>
                                    {formik.errors.fullName}
                                    {Icons.error()}
                                </div> : null}
                            </div>
                        </div>
                        <div className={'formItem'}>
                            <div className={'formItem_name'}>Number</div>
                            <div className={'formItem_input'}>
                                <input
                                    id="number"
                                    name="number"
                                    type="number"
                                    onChange={formik.handleChange}
                                    value={formik.values.number}
                                />
                                {formik.errors.number ?
                                    <div className={'error'}>
                                        {formik.errors.number}
                                        {Icons.error()}
                                    </div> : null}
                            </div>
                        </div>
                        <div className={'formItem'}>
                            <div className={'formItem_name'}>Email</div>
                            <div className={'formItem_input'}>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                                {formik.errors.email ?
                                    <div className={'error'}>
                                        {formik.errors.email}
                                        {Icons.error()}
                                    </div> : null}
                            </div>
                        </div>
                        <button type="submit">{Icons.check()}</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ModalAddContact