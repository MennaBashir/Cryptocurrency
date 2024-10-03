import "./PageBalance.css";
import { useSelector } from "react-redux";
import pen from "./../../images/pen.svg";
import Pm from "./../../images/pmlogo-lg.png";
import { Link } from "react-router-dom";
function Perfect() {
    let d = new Date();
    const state = useSelector(state => state.Check);
    return (
        <>
            <div className="row">
                <div className="col-lg-7 box1 addBox mt-4">
                    <div className="Img">
                        <img src={Pm} alt=".." />
                        <button className="btn btn-danger Red" onClick={() => window.open("https://perfectmoney.is/api/step1.asp", "_target")} >Buy Now</button>
                    </div>
                    <div className="txt">
                        <p>Method : <b>Perfect Money</b></p>
                        <p>Click on Pay Now to proceced</p>

                        <div className="Info">
                            <p>State <span>:<span className="badge badge-info red">Not Paid</span></span></p>
                            <p>Last Checked <span>:<span className="badge badge-info dark">{d.getFullYear()}-{d.getMonth() + 1}-{d.getDate()}
                                <span>{d.getHours()}:{d.getMinutes()}:{d.getSeconds()}</span></span></span></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 box2">
                    <ul>
                        <li><b>DO NOT CLOSE THIS PAGE</b></li>
                        <li>After payment an amount of <b>{state.Amount}$</b> will be added to your account</li>
                        <li>If any error happened or money didn't show please <Link to={'/tickets'}><img src={pen} alt=".." />Open a Ticket</Link> Fast</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Perfect;