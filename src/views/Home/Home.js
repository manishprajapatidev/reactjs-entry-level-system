import React, { useState } from 'react';
import useForm from "react-hook-form";

const Home = () => {

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
                <h3>Check In</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text"
                                   name="visitor_name"
                                   className="form-control"
                                   placeholder="Your Name *"
                                   ref={register({
                                       required: 'Required'
                                   })}
                                   onChange={event =>{
                                       //console.log(event)
                                   }}
                            />
                            <span className={"form-error-msg"}>{errors.visitor_name && errors.visitor_name.message}</span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text"
                                   name="visitor_phone"
                                   className="form-control"
                                   placeholder="Your Phone *"
                                   ref={register({
                                       required: 'Required',
                                       pattern: {
                                           value: /^\d{10}$/,
                                           message: "Invalid phone number (Only 10 digits)"
                                       }
                                   })}
                                   onChange={event =>{
                                       //console.log(event)
                                   }}
                            />
                            <span className={"form-error-msg"}>{errors.visitor_phone && errors.visitor_phone.message}</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text"
                                   name="visitor_email"
                                   className="form-control"
                                   placeholder="Your Email *"
                                   ref={register({
                                       required: 'Required',
                                       pattern: {
                                           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                           message: "Invalid email address"
                                       }
                                   })}
                                   onChange={event =>{
                                       //console.log(event)
                                   }}
                            />

                            <span className={"form-error-msg"}>{errors.visitor_email && errors.visitor_email.message}</span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text"
                                   name="host_name"
                                   className="form-control"
                                   placeholder="Host Name *"
                                   ref={register({
                                       required: 'Required'
                                   })}
                                   onChange={event =>{
                                       //console.log(event)
                                   }}
                            />
                            <span className={"form-error-msg"}>{errors.host_name && errors.host_name.message}</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text"
                                   name="host_email"
                                   className="form-control"
                                   placeholder="Host Email *"
                                   ref={register({
                                       required: 'Required',
                                       pattern: {
                                           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                           message: "Invalid email address"
                                       }
                                   })}
                                   onChange={event =>{
                                       //console.log(event)
                                   }}
                            />
                            <span className={"form-error-msg"}>{errors.host_email && errors.host_email.message}</span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text"
                                   name="host_phone"
                                   className="form-control"
                                   placeholder="Host Phone *"
                                   ref={register({
                                       required: 'Required',
                                       pattern: {
                                           value: /^\d{10}$/,
                                           message: "Invalid phone number (Only 10 digits)"
                                       }
                                   })}
                                   onChange={event =>{
                                       //console.log(event)
                                   }}
                            />
                            <span className={"form-error-msg"}>{errors.host_phone && errors.host_phone.message}</span>
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

export default Home;