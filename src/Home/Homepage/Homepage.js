import "./Homepage.css";
import Swal from 'sweetalert2'
import { useSelector } from "react-redux";
import send from "./../../images/sendWhite.svg";
import bitcoin from "./../../images/bitcoinColor.svg";
import bitcoinW from "./../../images/bitcoinWhite.svg";
import BTC from "./../../images/BTC_Logo.png";
import BM from "./../../images/pmlogo.png";
import ES from "./../../images/usdt_trc20_logo.png";
import file from "./../../images/file.svg";
import chart from "./../../images/chart.svg";
import { useState } from "react";
import Navbar from "./../Navbar/Navbar";
import { Link } from "react-router-dom";
import TicketNav from "../Tickets/TicketNav";
function Homepage() {
    let [date, setDate] = useState(new Date());
    const state = useSelector(state => state.Check);
    const alertMessage = () => {
        Swal.fire({
            title: "Are You Sure?",
            icon: "info",
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: "Yes!",
        }).then((res) => {
            if (res.isConfirmed) {
                Swal.fire({
                    title: "Loading ...",
                }).then((res2) => {
                    if (res2.isConfirmed) {
                        Swal.fire({
                            icon: "success",
                            title: "Success",
                            text: `Verification Link sent to your email: ${state.emailValue}`,
                        });
                    }
                })
            }
        })
    }
    return (
        <>
            <Navbar />
            <div className="home">
                <div className="row Bigbox">
                    <div className="col-lg-12 box1">
                        <div className="alert alert-warning alert-dismissible fade show Text" role="alert">
                            Welcome, we have send email verification link to your email
                            <a href="#" onClick={() => alertMessage()}>[resend verification email] </a>                                                                                                                                                                                                                                                                                             you can use our site without email verification but
                     <strong className="strong"> to get the payment bonus, we should verification your email.</strong>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </div>
                    <div className="card col-lg-6 box2 box">
                        <div className="card-body">
                            <p className="card-title">Hello <strong>{state.userName}</strong></p>
                            <p className="card-text">If you have any Question ,Problem, Suggestion or Request Please feel free to Open a
                        <button className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">   New Ticket <img src={send} alt="not found" /> </button> </p><p className="card-text"> if you want to report an order , just go to
                         <Link to={'/orders'} className="order"> My Orders</Link> then click on Report #[Order Id] button.</p> <p className="card-text">Our Domains are
                         <strong>sirx.pw - sirx.cc - sirx.fi - sirx.la - sirx.st - sirx.sx - sirx.to </strong>
                                Please Save them! <Link to={'/terms'} className="btn btn-primary btn-sm">Terms of Service</Link></p>
                        </div>
                        <TicketNav />
                    </div>
                    <div className="card col-lg-3 box3 box">
                        <div className="card-body">
                            <div className="card-text"><ul>
                                <li>Balance : <span className="badge">0.00</span> <Link to={'/pageBalance'}>[Add Funds]</Link></li>
                                <li>Orders : <span className="badge Green">0</span> <Link to={'/orders'}>[ Show ]</Link></li>
                                <li>Tickets : <span className="badge ">0</span> <Link to={'/tickets'}>[ Show ]</Link></li>
                                <li>Reports : <span className="badge ">0</span> <Link to={'/reports'}> [ Show ]</Link></li>
                            </ul> </div>
                        </div>
                    </div>

                    <div className="card col-lg-3 box4 box">
                        <div className="card-body">
                            <div className="card-text">Interested in becoming a <strong>Seller</strong> <img src={bitcoin} style={{ width: "11px" }} alt="not found" /> at SirX Shop ?
                        <Link className="btn Red btn-danger btn-sm" to={'/becomeSeller'}> Become a Seller <img src={bitcoinW} style={{ width: "11px" }} alt="not found" /></Link>  </div>
                            <div className="card-text">Available Payment Methods
                            <div className="imag">
                                    <Link to={'/pageBalance'}> <img src={BTC} alt="not found" /></Link>
                                    <Link to={'/pageBalance'}> <img src={BM} alt="not found" /></Link>
                                    <Link to={'/pageBalance'}> <img src={ES} alt="not found" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card col-lg-7  box5" >
                        <h5 className="card-header Header"><img src={file} alt="not found" style={{ width: "12px" }} /> Our News </h5>
                        <div className="card-body">
                            <div className="card-text"><ul>
                                <li><p>Bugz is now SirX 🆕</p>
                                    <p>New name,but same intelligence</p>
                                    <small>2024-02-15 17:35:37</small></li>
                                <li><p>📩☑️ sendgrid 📩☑️</p>
                                    <p>our sellers have added sendgrid in the accounts > marketing</p>
                                    <small>2024-01-26 12:12:36</small></li>
                                <li><p>change rdp password after purchase</p>
                                    <p>You should change the RDP password after check everything, Open CMD and type > net user "username" "newpassword" without the ("")</p>
                                    <small>2023-10-24 23:00:04</small></li>
                                <li><p>💝 Bonus</p>
                                    <p>For the first time when you pay 25$ you will automatically take $5 Free bonus</p>
                                    <small>2023-10-19 14:12:27</small></li>
                                <li><p>🎁 cashback</p>
                                    <p>Every time you pay 50$ or more, you will receive 10% automatic free cashback</p>
                                    <small>2023-10-19 14:12:40</small></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card col-lg-4 box6">
                        <div className="card-header Header ">
                            <img src={chart} alt="not found" /> Our Stuff
                </div>
                        <div className="card-body">
                            <ul className="Colors">
                                <li><span style={{ backgroundColor: "#ec8e13" }}></span> Webmails</li>
                                <li><span style={{ backgroundColor: "#0577f6" }}></span> Cpanels</li>
                                <li><span style={{ backgroundColor: "#db3641" }}></span> Leads</li>
                                <li><span style={{ backgroundColor: "#fdc011" }}></span> SSH</li>
                                <li><span style={{ backgroundColor: "#24a743" }}></span> RDP</li>
                                <li><span style={{ backgroundColor: "#de287b" }}></span> SMTP</li>
                                <li><span style={{ backgroundColor: "#541596" }}></span> Accounts</li>
                                <li><span style={{ backgroundColor: "#303038" }}></span> Shells</li>
                                <li><span style={{ backgroundColor: "#fb8bb3" }}></span> Mailers</li>
                            </ul>
                            <div>
                                <ul className="Chart">
                                    <li style={{ backgroundColor: "#ec8e13", height: "95%" }}><span> 46644</span></li>
                                    <li style={{ backgroundColor: "#0577f6", height: "85%" }}><span> 31390</span></li>
                                    <li style={{ backgroundColor: "#de287b", height: "70%" }}><span> 18679</span></li>
                                    <li style={{ backgroundColor: "#fdc011", height: "40%" }}><span> 1193</span></li>
                                    <li style={{ backgroundColor: "#303038", height: "35%" }}><span> 1276</span></li>
                                    <li style={{ backgroundColor: "#fb8bb3", height: "30%" }}><span> 895</span></li>
                                    <li style={{ backgroundColor: "#541596", height: "27%" }}><span> 648</span></li>
                                    <li style={{ backgroundColor: "#24a743", height: "25%" }}><span> 604</span></li>
                                    <li style={{ backgroundColor: "#db3641", height: "20%" }}><span> 301</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-footer Footer">Last Updated at <span>{date.getFullYear()}-{date.getMonth() + 1}-{date.getDate()}</span>
                            <span>{date.getHours() + 1}:{date.getMinutes() + 1}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Homepage; 