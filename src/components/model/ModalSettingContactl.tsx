import React, {useState} from "react";
import "./ModalSettingContact.css"
import {useFormik} from "formik";
import {editItemAC, removeItemAC} from "../../store/list-reducer";
import {useDispatch} from "react-redux";
import Icons from "../Icons/Icons";
import * as Yup from "yup";

type propsModalType = {
    fullName: string,
    number: string,
    email: string,
    id: string
}

export const validationSchema = () => Yup.object({
    fullName: Yup.string()
        .required('Required '),
    number: Yup.string()
        .required('Required ')
        .min(13, '13 digits in format +375295552211')
        .max(13,'13 digits in format +375295552211'),
    email: Yup.string()
        .email('Invalid email address ')
        .required('Required '),
})

const ModalSettingContact = ({fullName, number, email, id}: propsModalType) => {

    const [active, setActive] = useState(false)

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            fullName: fullName,
            number: number,
            email: email
        },
        validationSchema,
        onSubmit: model => {
            dispatch(editItemAC(model, id))
            setActive(false)
        },
    });
    return (
        <>
            <div className={'iconEdit'} onClick={() => setActive(true)}>{Icons.edit()}</div>
            <div className={'iconTrash'} onClick={() => dispatch(removeItemAC(id))}>{Icons.trash()}</div>
            <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
                <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
                    <h2>Edit</h2>
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
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.number}
                                />
                                {formik.errors.number ? <div className={'error'}>
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
                                {formik.errors.email ? <div className={'error'}>
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

export default ModalSettingContact