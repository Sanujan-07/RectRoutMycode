import React from 'react';
import './Sample.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

import { FaFacebookF } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
function Signup(){
    return (
            
        <div className="bg-gradient-primary">
            <div className="container">
            <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
                <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    <div className="row">
                    <div className="col-lg-5 d-none d-lg-block bg-register-image" />
                    <div className="col-lg-7">
                        <div className="p-5">
                        <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                        </div>
                        <form className="user">
                            <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <input
                                type="text"
                                className="form-control form-control-user"
                                id="exampleFirstName"
                                placeholder="First Name"
                                />
                            </div>
                            <div className="col-sm-6">
                                <input
                                type="text"
                                className="form-control form-control-user"
                                id="exampleLastName"
                                placeholder="Last Name"
                                />
                            </div>
                            </div>
                            <div className="form-group">
                            <input
                                type="email"
                                className="form-control form-control-user"
                                id="exampleInputEmail"
                                placeholder="Email Address"
                            />
                            </div>
                            <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <input
                                type="password"
                                className="form-control form-control-user"
                                id="exampleInputPassword"
                                placeholder="Password"
                                />
                            </div>
                            <div className="col-sm-6">
                                <input
                                type="password"
                                className="form-control form-control-user"
                                id="exampleRepeatPassword"
                                placeholder="Repeat Password"
                                />
                            </div>
                            </div>
                            
                            
                           
                            
                                <Link  to="/"  className="btn btn-primary btn-user btn-block">
                            Register Account
                               </Link>
                            
                            <hr />
                            <a
                            href="#"
                            className="btn btn-google btn-user btn-block"
                            >
                            <FaGoogle className="fa-fw" /> &nbsp;
                            Register with Google
                            </a>
                            <a
                            href="#"
                            className="btn btn-facebook btn-user btn-block"
                            >
                            <FaFacebookF className="fa-fw" />  &nbsp; Register with
                            Facebook
                            </a>
                        </form>
                        <hr />
                       
                        <div className="text-center">
                            
                            <p className="small" >Already have an account? <Link to='/'>Login!</Link></p>
                           
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>

    );
}
export default Signup;