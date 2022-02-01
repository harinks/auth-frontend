import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Register() {
    const [passwordShown, setPasswordShown] = useState(false);
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword:''
        },
        onSubmit: async (values) => {
            try {
                await axios.post("https://localhost:3000/register", values)
                navigate("/")
            } catch (error) {
                console.log(error)
            }
        },
    });

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };


    return (
        <div>
            <section>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" >
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h2 fw-bold mb-4 mx-1 mx-md-4">Register</p>

                                            <form className="mx-1 mx-md-4" onSubmit={formik.handleSubmit}>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" name="name" className="form-control" onChange={formik.handleChange}
                                                            value={formik.values.name} placeholder='Name' required />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email" name="email" className="form-control" onChange={formik.handleChange}
                                                            value={formik.values.email}  placeholder='Email' required />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <div class="pwd">
                                                            <input type={passwordShown ? "text" : "password"} name='password' className="form-control" onChange={formik.handleChange}
                                                                value={formik.values.password} placeholder='Password' required />
                                                            <span class="p-viewer">
                                                                <i onClick={togglePassword} class="fa fa-eye" aria-hidden="true"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <div class="pwd">
                                                            <input type={passwordShown ? "text" : "password"} name='confirmPassword' className="form-control" onChange={formik.handleChange}
                                                                value={formik.values.confirmPassword} placeholder='Confirm Password' required />
                                                            <span class="p-viewer">
                                                                <i onClick={togglePassword} class="fa fa-eye" aria-hidden="true"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4" >
                                                    <button type="submit" className="btn btn-primary btn-block mb-2">Register</button>
                                                </div>
                                                <Link to={"/login"}><label className='mb-2' style={{ textAlign: "center", padding: "5px" }}><h6>Already have an account - Click here to Login Page ⬇</h6></label></Link>
                                                
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register