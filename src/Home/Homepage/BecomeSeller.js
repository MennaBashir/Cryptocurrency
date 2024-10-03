import "./Homepage.css";
import bitcoin from "./../../images/bitcoinBlack.svg";
import global from "./../../images/globe.svg";
import send from "./../../images/sendWhite.svg";
import bitcoinWhit from "./../../images/bitcoinWhite.svg";
import Navbar from "../Navbar/Navbar";
import TicketNav from "../Tickets/TicketNav";
function BecomeSeller() {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-lg-12">
                        <div className="card box">
                            <div className="card-header chead">
                            <img src={bitcoinWhit} alt=".." style={{width:"11px"}}/> Become Seller
                            </div>
                            <div className="card-body px-5 cbody">
                                <h2>Interested in becoming a seller at <img style={{ width: "20px" }} src={bitcoin} alt="..." /> SirX Shop ?</h2>
                               
                                Okay then let us explain your Features and tell you some rules .
                        <h4><img src={global} alt=".." style={{ width: "25px" }} /> Your Features</h4>
                                <ul>
                                    <li>You get paid any time you like no delay !</li>
                                    <li>You can sell any tool you like with no limit and choose your price!</li>
                                    <li>You will have your own Panel with tons of options</li>
                                </ul>
                                <h4><span>i</span> Our Rules</h4>
                                <ul>
                                    <li>All the tools have to be <strong>Fresh</strong> and not used or sold before .</li>
                                    <li>Don't try XSS/ Sql Injection /add <abbr title="Under 0!">(minus)</abbr> price and buy it - it will not work</li>
                                    <li>Do not put links of other stores (e-mails) or any ads</li>
                                    <li>Don't try to contact with buyer and if this happened, you will banned automatically.</li>
                                </ul>
                                <h4><span>?</span> How to Apply ?</h4>
                                <ul>
                                    <li><button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-success btn-sm openT">Open a Ticket <img src={send} alt=".." /></button>
                                        with a title of <abbr title="in order to reply faster !">seller request</abbr></li>
                                    <li>Make sure to mention what tools you have and include a <appr title="We don't accept sellers with 20 cpanels and etc.">mass example</appr> for each.</li>
                                    <li>Make sure all of your tools work before sending them to us.</li>
                                    <li>We should reply to you as soon as we see the request !</li>
                                </ul>
                                <TicketNav />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BecomeSeller;