import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'



const LoginSignup = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState({})
    const [valid, setValid] = useState(true)
    const navigate = useNavigate()



   





    const handleSubmit = (e) => {
        e.preventDefault();
        let isvalid = true;
        let validationErrors = {}

        if (formData.email === "" || formData.email === null) {
            isvalid = false;
            validationErrors.email = "Email is required"
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i) {
            isvalid = false;
            validationErrors.email = "Email is Not valid"
        }
        if (formData.password === "" || formData.password === null) {
            isvalid = false;
            validationErrors.password = "Last name required"
        } else if (formData.password.length < 6) {
            isvalid = false;
            validationErrors.password = "Password length must above 6 characters"
        }

        axios.get('http://localhost:8888/users')
            .then(result => {
                result.data.map(user => {
                    if (user.email === formData.email) {
                        if (user.password === formData.password) {
                            alert("Login Successfully")
                            navigate('/dashboard1')
                        }
                        else if ((user.password !== formData.password)) {
                            isvalid = false;
                            validationErrors.password = "Wrong Password"
                        }
                    }
                    else if (formData.email !== "") {
                        isvalid = false;
                        validationErrors.email = "Wrong Email"
                    }
                })
                setErrors(validationErrors)
                setValid(isvalid)
            })
            .catch(err => console.log(err))


            axios.get('http://localhost:8888/admin')
                        .then(result => {
                            result.data.map(admin => {
                                if (admin.email === formData.email) {
                                    if (admin.password === formData.password ) {
                                        alert("Login Successfully")
                                        navigate('/dashboard')
                                    }
                                    else if ((admin.password !== formData.password)) {
                                        isvalid = false;
                                        validationErrors.password = "Wrong Password"
                                    }
                                }
                                else if (formData.email !== "") {
                                    isvalid = false;
                                    validationErrors.email = "Wrong Email"
                                }
                                
                            })
                            setErrors(validationErrors)
                            setValid(isvalid)
                        })
                        .catch(err => console.log(err))
            
                }
        
    

    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="signup-form">
                            <form class="mt-5 border p-4 bg-light shadow" onSubmit={handleSubmit} >
                                <h4 class="mb-5 text-secondary">Create Your Account</h4>
                                <div class="row">


                                    <div class="mb-3 col-md-12">
                                        <label>Email<span class="text-danger">*</span></label>
                                        <input type="email" name="email" class="form-control" placeholder="Enter Email"
                                            onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
                                    </div>{valid ? <></> : <span className="text-danger">{errors.email}</span>}

                                    <div class="mb-3 col-md-12">
                                        <label>Password<span class="text-danger">*</span></label>
                                        <input type="password" name="password" class="form-control" placeholder="Enter Password"
                                            onChange={(event) => setFormData({ ...formData, password: event.target.value })} />
                                    </div>{valid ? <></> : <span className="text-danger">{errors.password}</span>}

                                    <div class="col-md-12">
                                        <button class="btn btn-primary" style={{ allign: 'center' }} >Login</button>
                                    </div>
                                </div>
                            </form>
                            <p class="text-center mt-3 text-secondary">If you don't have an account, Please <Link to="/register">Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LoginSignup