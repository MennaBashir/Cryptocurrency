import "./Account.css";
import IMG from "./../images/imgmain-black.png";
import { Link, useNavigate } from "react-router-dom";
import Privacy from "./Privacy";
import TermServices from "./TermServices";
import { GetEmail, GetPassword, GetDatein } from "../rtk/CheckReducer";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import Swal from 'sweetalert2';

function Signin() {
    const dispatch = useDispatch();
    const inputRef = useRef();
    const passRef = useRef();
    let navigate = useNavigate();
    const formSubmit = (e) => {
        let date = new Date().toLocaleString('en-US');
        dispatch(GetDatein(date));
        dispatch(GetEmail(inputRef.current.value));
        dispatch(GetPassword(passRef.current.value));
        let Exp = (/\w+@\w+.\w+/).test(inputRef.current.value);
        if (Exp) {
            Swal.fire({
                title: "Success",
                text: "LoggedIn Successfully",
                icon: "success"
            }).then(() => navigate('/home/')).catch(() => {
                Swal.fire({
                    title: "Error!",
                    text: "validating Recaptcha",
                    icon: "error"
                })
            })
        }
        e.preventDefault();
    }
    return (
        <div className="account">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12 col-xs-12 divide">
                        <div className="signin cart">
                            <div className="title">
                                <img src={IMG} alt="not found" />
                                <h4>Welcome Back!</h4>
                                <h5>Sign in</h5>
                            </div>
                            <form action="#" method="POST" onSubmit={(e) => formSubmit(e)}>
                                <div className="form-group">
                                    <label>Email</label>
                                    <br />
                                    <div className="Input">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                                                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"></path>
                                                <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"></path>
                                            </svg>
                                        </span>
                                        <input ref={inputRef} type="email" name="email" placeholder="Useremail@Domain.com" required autoFocus />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <div className="Input">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shield-lock-fill" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"></path>
                                            </svg>
                                        </span>
                                        <input type="password" minLength="8" maxLength="20" name="password" placeholder="**************" required ref={passRef} />
                                    </div>
                                </div>
                                <Link to={'reset-password'}>Forget your password</Link>
                                <button type="submit" className="btn btn-primary">Sign in <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg></button>
                            </form>
                            <div className="register">
                                <p>Not Register Yet?<Link to={'/register'}>Create Account</Link> </p>
                            </div>
                            <p className="footer">
                                <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" >Privacy Policy</a>
                                <span>-</span>
                                <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal2">Terms of Services</a>
                            </p>
                        </div>
                    </div>
                </div>
                <Privacy />
                <TermServices />
            </div>
        </div>
    )
}
export default Signin;