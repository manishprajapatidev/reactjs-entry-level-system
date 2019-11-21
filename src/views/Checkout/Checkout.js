import React, { useState } from 'react';
import useForm from "react-hook-form";

const Checkout = () => {

    const { handleSubmit, register, errors } = useForm();
    const [isLoading, setiIsLoading] = useState(false);
    const onSubmit = values => {
        setiIsLoading(true);
        console.log(values);
    };

    return (
        <div className="container contact-form">
            <div className="contact-image">
                <img src={require('../../static/img/visitors.png')} alt="visitors.png"/>
                <h3>Check Out</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <input type="text"
                                   name="checkin_id"
                                   className="form-control"
                                   placeholder="Check In ID *"
                                   ref={register({
                                       required: 'Required'
                                   })}
                                   onChange={event =>{
                                       //console.log(event)
                                   }}
                            />
                            <span className={"form-error-msg"}>{errors.checkin_id && errors.checkin_id.message}</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group text-center">
                            <button type="submit" className="btn btn-outline-primary">
                                {
                                    isLoading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>: null
                                }
                                &nbsp; Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Checkout;