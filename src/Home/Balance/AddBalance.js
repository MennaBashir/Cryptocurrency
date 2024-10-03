import "./PageBalance.css";
import Tc from "./../../images/usdt_trc20_logo.png";
import Po from "./../../images/pmlogo.png";
import Bt from "./../../images/BTC_Logo.png";
import { useRef } from "react";
import Swal from 'sweetalert2';
import { GetMethod, GetAmount, GetRandomUrl } from "./../../rtk/CheckReducer";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
function AddBalance() {
    let inputRef = useRef();
    let optionRef = useRef();
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const letters = "abcdefghijklmnopqiurstvwxyzABCDEFGHIJKLMNOPQRUSTVWXYZ0123456789";
    const CheckBalance = (e) => {
        e.preventDefault();
        let wordRandom = '';
        for (let i = 0; i <= 36; i++) {
            wordRandom += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        dispatch(GetRandomUrl(wordRandom));
        dispatch(GetMethod(optionRef.current.value));
        dispatch(GetAmount(inputRef.current.value));
        if (optionRef.current.value === 'USDT [Trc20]') {
            if (inputRef.current.value >= 50) {
                Swal.fire({
                    title: "Loading ..",
                    icon: "info",
                }).then(() => {
                    Swal.fire({
                        title: "Redirecting ..",
                        text: "Redirecting to Payment Page",
                        icon: "info"
                    }).then(() => {
                        navigate('/payment');
                    })
                })
            }
            else {
                Swal.fire({
                    title: "Loading ..",
                    icon: "info",
                }).then(() => {
                    Swal.fire({
                        title: "Error",
                        text: "The amount must be at least 50$ For USDT TRC20!",
                        icon: "error"
                    });
                })
            }
        }
        else {
            if (inputRef.current.value >= 5) {
                Swal.fire({
                    title: "Loading ..",
                    icon: "info",
                }).then(() => {
                    Swal.fire({
                        title: "Redirecting ..",
                        text: "Redirecting to Payment Page",
                        icon: "info"
                    }).then(() => {
                        navigate('/payment');
                    })
                })
            }
            else {
                Swal.fire({
                    title: "Loading ..",
                    icon: "info",
                }).then(() => {
                    Swal.fire({
                        title: "Error",
                        text: "The amount must be at least 5$",
                        icon: "error"
                    });
                })
            }
        }
    }
    return (
        <div className="row">
            <div className="col-md-6 Form">
                <form onSubmit={(e) => CheckBalance(e)}>
                    <div className="mb-3 Formdiv">
                        <label htmlFor="method" className="form-label">Method</label>
                        <select id="method" name="Methods" ref={optionRef} required>
                            <option className="form-control" value="Bitcoin">Bitcoin</option>
                            <option className="form-control" value="USDT [Trc20]">USDT [Trc20]</option>
                            <option className="form-control" value="Perfect Money">Perfect Money</option>

                        </select>
                    </div>
                    <div className="mb-3 Formdiv">
                        <label htmlFor="amount" className="form-label">Amount</label>
                        <input type="text" className="form-control" id="amount" name="Amount" placeholder="20" ref={inputRef} required />
                    </div>
                    <button type="submit" className="btn btn-success">Add Balance</button>
                </form>
            </div>
            <div className="col-md-6 Text">
                <ul>
                    <li>After payment funds will be added automatically to your account <b>INSTANTLY</b>.</li>
                    <li><b>Perfectmoney/Bitcoin/USDT </b>is a secure way to fund your account.</li>
                    <li>Min/Max is 5 USD/5000 USD for BTC & Perfectmoney</li>
                    <li>Min/Max is 50 USD/5000 USD for USDT</li>
                </ul>
                <div>
                    <p>Available Payment Methods</p>
                    <img src={Bt} alt="..." />
                    <img src={Po} alt="..." />
                    <img src={Tc} alt="..." />

                </div>
            </div>
        </div>

    )
}
export default AddBalance