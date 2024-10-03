import "./Account.css";
import { Link, useNavigate } from "react-router-dom";
import Privacy from "./Privacy";
import TermServices from "./TermServices";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import { GetEmail, GetName, GetPassword, GetDateup } from "../rtk/CheckReducer";
import { useRef } from "react";
function Signup() {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const inputRef = useRef();
    const inputRefU = useRef();
    const inputRefP = useRef();
    const inputRefPR = useRef();
    const formSubmit = (e) => {
        dispatch(GetEmail(inputRef.current.value));
        dispatch(GetName(inputRefU.current.value));
        dispatch(GetPassword(inputRefP.current.value));
        let date = new Date().toLocaleString('en-US');
        dispatch(GetDateup(date));
        let Exp = (/\w+@\w+.\w+/).test(inputRef.current.value);
        if (inputRefP.current.value !== inputRefPR.current.value) {
            document.querySelector("#repeatPass").classList.add("wrong");
            Swal.fire({
                title: "Error",
                text: "The confirm password and password must match.",
                icon: "error"
            });
        }
        if (Exp && inputRefP.current.value === inputRefPR.current.value) {
            Swal.fire({
                title: "Success",
                text: "Registered Successfully...",
                icon: "success"
            }).then(() => navigate('/home/')).catch(() => {
                Swal.fire({
                    title: "Error!",
                    text: "validating Recaptcha",
                    icon: "error"
                })
            })
            document.querySelector("#repeatPass").classList.remove("wrong");
        }
        e.preventDefault();
    }
    return (
        <div className="account">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-xs-12 col-md-12 divide">
                        <div className="signin cart">
                            <div className="title">
                                <h3>Register a new account</h3>
                            </div>
                            <form action="#" method="POST" onSubmit={(e) => formSubmit(e)}>
                                <div className="form-group">
                                    <label>Username</label>
                                    <br />
                                    <div className="Input">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-bounding-box" viewBox="0 0 16 16">
                                                <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"></path>
                                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                                            </svg>
                                        </span>
                                        <input ref={inputRefU} type="text" minLength="3" maxLength="15" name="username" placeholder="Userename" required autoFocus />
                                    </div>
                                </div>
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
                                        <input ref={inputRef} type="email" name="email" placeholder="Useremail@Domain.com" required />
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
                                        <input ref={inputRefP} type="password" minLength="8" maxLength="20" name="password" placeholder="**************" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Repeat Password</label>
                                    <div className="Input" id="repeatPass" >
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shield-lock-fill" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"></path>
                                            </svg>
                                        </span>
                                        <input type="password" ref={inputRefPR} minLength="8" maxLength="20" name="repeatpassword" placeholder="**************" required />
                                    </div>
                                </div>
                                <div className="read">
                                    <input type="checkbox" className="form-check-input" required />
                                    <span>I have read the <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal2">Terms of Services</a></span>
                                </div>
                                <button type="submit" className="btn btn-primary">Register
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-rounded-plus-filled" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M12 2l.324 .001l.318 .004l.616 .017l.299 .013l.579 .034l.553 .046c4.785 .464 6.732 2.411 7.196 7.196l.046 .553l.034 .579c.005 .098 .01 .198 .013 .299l.017 .616l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.464 4.785 -2.411 6.732 -7.196 7.196l-.553 .046l-.579 .034c-.098 .005 -.198 .01 -.299 .013l-.616 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.785 -.464 -6.732 -2.411 -7.196 -7.196l-.046 -.553l-.034 -.579a28.058 28.058 0 0 1 -.013 -.299l-.017 -.616c-.003 -.21 -.005 -.424 -.005 -.642l.001 -.324l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.464 -4.785 2.411 -6.732 7.196 -7.196l.553 -.046l.579 -.034c.098 -.005 .198 -.01 .299 -.013l.616 -.017c.21 -.003 .424 -.005 .642 -.005zm0 6a1 1 0 0 0 -1 1v2h-2l-.117 .007a1 1 0 0 0 .117 1.993h2v2l.007 .117a1 1 0 0 0 1.993 -.117v-2h2l.117 -.007a1 1 0 0 0 -.117 -1.993h-2v-2l-.007 -.117a1 1 0 0 0 -.993 -.883z" fill="currentColor" strokeWidth="0"></path>
                                    </svg>
                                </button>
                            </form>
                            <p>Already registred? <Link to={"/"}>Sign in</Link> </p>
                            <p className="footer">
                                By Registering you agree to the
                            <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Privacy Policy</a>
                                <span>&</span>
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
export default Signup;