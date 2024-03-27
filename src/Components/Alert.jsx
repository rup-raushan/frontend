import React from "react";

export default function Alert(props) {

    const alertClickHandle = () => {
        props.toggleFunction();
    };

    return (
        <>
            <div
                className={`whole-alert-container__wrapper active`}>
                <div
                    className=" flex flex-center"
                    style={{ flexDirection: "column" }}>
                    <div className="alert-contaier__wrapper">
                        <div className="error-container-head__wrapper">
                            <h5>{props.head}.</h5>
                        </div>
                        <div className="alert-content__wrapper">
                            <div className="alert-msg__wrappper">
                                <h6>{props.msg}</h6>
                            </div>
                            <div className="alert-buttons__wrapper flex flex-center my-4">
                                <button className="alert-container__button primary-btn" onClick={alertClickHandle}><span>Ok</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
