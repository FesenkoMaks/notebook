import React from "react";
import  "./Modal.css"

type propsModalType = {
    active: boolean,
    setActive: any,
    children?: any
}

const Modal = ({active, setActive, children}: propsModalType) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal