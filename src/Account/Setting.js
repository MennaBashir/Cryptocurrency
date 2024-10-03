import "./Account.css";
import Navbar from "../Home/Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { GetEmail, GetPassword } from "../rtk/CheckReducer";
import Swal from 'sweetalert2';
function Setting() {
    const state = useSelector(state => state.Check);
    const [emailValue, setEmailValue] = useState("");
    const dispath = useDispatch();
    let pass = useRef();
    let confirmPass = useRef();
    const formSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Loading ..",
            icon: "info"
        }).then(() => {
            if (pass.current.value === confirmPass.current.value) {
                Swal.fire({
                    title: "Success",
                    text: "Saved Successfuly",
                    icon: "success"
                });
            }
            else {
                Swal.fire({
                    title: "Error",
                    text: "The confirm new password and new password must match.",
                    icon: "error"
                });
            }
        });
        dispath(GetPassword(pass.current.value));
        dispath(GetEmail(emailValue));
    }
    return (
        <>
            <Navbar />
            <div className="container-fluid setting">
                <h1>Settings</h1>
                <div className="row">
                    <div className="box1 col-sm-6 col-xs-12 col-md-4">
                        <h3>Edit Information</h3>
                        <form onSubmit={(e) => formSubmit(e)}>
                            <div className="form-group">
                                <label>Current Password *</label>
                                <div className="Input">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shield-lock-fill" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"></path>
                                        </svg>
                                    </span>
                                    <input type="password" maxLength="20" minLength="8" name="passwordcurrent" defaultValue={state.passValue} readOnly />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>New Password</label>
                                <div className="Input">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shield-lock-fill" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"></path>
                                        </svg>
                                    </span>
                                    <input type="password" ref={pass} minLength="8" maxLength="20" name="NewPassword" placeholder="**************" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Confirm new Password</label>
                                <div className="Input">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shield-lock-fill" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"></path>
                                        </svg>
                                    </span>
                                    <input type="password" ref={confirmPass} minLength="8" maxLength="20" name="ConfirmPassword" placeholder="**************" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Change Email</label>
                                <br />
                                <div className="Input">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                                            <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"></path>
                                            <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"></path>
                                        </svg>
                                    </span>
                                    <input type="email" name="ChangeEmail" onChange={(e) => setEmailValue(e.target.value)} defaultValue={state.emailValue} required />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary blue">Submit</button>
                        </form>
                    </div>
                    <div className="box2 col-sm-6 col-md-6 col-xs-12">
                        <h3>Account Information</h3>
                        <ul>
                            <li>Username <strong>{state.userName}</strong></li>
                            <li>Your Roles [ <strong>buyer</strong> ]</li>
                            <li>Current balance is <span><strong>0.00$</strong></span></li>
                            <li>Your Email is <span><strong>{state.emailValue}</strong></span></li>
                            <li>Registered on <span>{state.Dateup}</span></li>
                            <li>Last Login on <span>{state.Datein}</span></li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Setting;