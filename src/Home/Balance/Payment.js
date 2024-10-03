import "./PageBalance.css";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";
import QRCode from "react-qr-code";
import Copy from "./../../images/Copy.svg";
import pen from "./../../images/pen.svg";
import { Link } from "react-router-dom";
import Perfect from "./Perfect";
function Payment() {
    const state = useSelector(state => state.Check);
    let d = new Date();
    const CheckCopy = (e) => {
        let a = document.getElementById(`${e}`);
        a.innerText = "Copied";
        a.style.cssText = "background-color:#218838;border-color:#218838";
        setTimeout(() => {
            a.innerText = "Copy";
            a.style.cssText = "background-color:#2db74c;border-color:#2db74c";
        }, 2000)
    }
    return (
        <>
            <Navbar />
            <div className="payment container-fluid">
                <h1>Payment Page</h1>
                {state.Method === "Perfect Money" ? <Perfect /> :
                    <>
                        <div className="row">
                            <div className="col-lg-7 box1">
                                <div className="barcode">
                                    <QRCode
                                        size={170}
                                        bgColor="white"
                                        fgColor="black"
                                        value={state.Method === "Bitcoin" ? `bitcoin:${state.RandomUrl}?amount=${(Number(state.Amount) / 72085).toFixed(8)}` : `usdt:${state.RandomUrl}?amount=${Number(state.Amount) + 1}`}
                                    />
                                </div>
                                <div className="txt mt-3">
                                    <p>Method : <b>{state.Method}</b></p>
                                    <p>Send exactly <span className="badge badge-info blue">{state.Method === "USDT [Trc20]" ? Number(state.Amount) + 1 : (Number(state.Amount) / 72085).toFixed(8)}</span>
                                        <button onClick={(e) => CheckCopy(1)} id="1" className="btn btn-primary btn-sm green">Copy <img src={Copy} alt=".." /></button><span> {state.Method === "USDT [Trc20]" ? "Usdt Trc20" : "BTC"}</span>
                                    </p>
                                    {state.Method === "USDT [Trc20]" && <p><span className="badge badge-info green">{Number(state.Amount)}$</span>+<span className="red badge badge-info">1$</span>(Fees)=<span className="blue badge badge-info">{Number(state.Amount) + 1}$</span></p>}
                                    <p>to:<span className="badge badge-info dark">{state.RandomUrl}</span> <button onClick={(e) => CheckCopy(2)} id="2" className="btn btn-sm  btn-primary green">Copy <img src={Copy} alt=".." /></button></p>
                                    <div className="Info">
                                        <p>State <span>:<span className="badge badge-info red">Not Paid</span></span></p>
                                        <p>Loaded {state.Method === "USDT [Trc20]" ? "USDT" : "BTC"} <span>:{state.Method === "Bitcoin" && <span className="badge badge-info blue">0.00000000</span>}</span></p>
                                        <p>Last Checked <span>:<span className="badge badge-info dark">{d.getFullYear()}-{d.getMonth() + 1}-{d.getDate()}
                                            <span>{d.getHours()}:{d.getMinutes()}:{d.getSeconds()}</span></span></span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 box2">
                                <ul>
                                    <li><b>DO NOT CLOSE THIS PAGE</b></li>
                                    <li>Please wait for at least {state.Method === "USDT [Trc20]" ? "3" : "1"} confirmations</li>
                                    <li>For high amounts please include high fees</li>
                                    {state.Method === "Bitcoin" && <li>Bitcoin to USDT rate is <b>27085$</b> (according to Blockchain)</li>}
                                    {state.Method === "Bitcoin" && <li>Our bitcoin addresses are SegWit-enabled</li>}
                                    {state.Method === "USDT [Trc20]" && <li>Make sure that you sending <b>{state.Method}</b></li>}
                                    <li>This page will be only valid for <b>2 hours</b></li>
                                    <li>Make sure that you send exactly <b>{state.Method === "USDT [Trc20]" ? Number(state.Amount) + 1 : (Number(state.Amount) / 72085).toFixed(8)} {state.Method === "USDT [Trc20]" ? "USDT" : "BTC"}</b></li>
                                    <li><b>Do Not try </b>to Send Less than <b>{state.Method === "USDT [Trc20]" ? Number(state.Amount) + 1 : (Number(state.Amount) / 72085).toFixed(8)} {state.Method === "USDT [Trc20]" ? "USDT" : "BTC"}</b> It will not work and may transaction fail</li>
                                    <li>After payment an amount of {state.Amount}$ will be added to your account</li>
                                    <li>Please Double check <b>Copied</b> btc address is <b><span style={{color:"red"}}>{state.RandomUrl}</span></b> before send payment!</li>
                                    <li>If any error happened or money didn't show please <Link to={'/tickets'}><img src={pen} alt=".." />Open a Ticket</Link> Fast</li>

                                </ul>
                            </div>
                        </div>
                    </>
                }
            </div>
        </>
    )
}
export default Payment