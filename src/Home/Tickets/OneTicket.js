import "./Tickets.css";
import Navbar from "../Navbar/Navbar";
import CardText from "./CardText";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
function OneTicket() {
    let { elementtitl } = useParams();
    const state1 = useSelector(state1 => state1.Check);
    const state2 = useSelector(state2 => state2.Ticket);
    return (
        <>
            <Navbar />

            <div className="pageTicket row container-fluid">
                <div className="col-md-7">
                    <h2>#{elementtitl} <em>by {state1.userName}</em></h2>
                    <CardText text1={state2.Textinit} />
                    <div className="response">
                        {
                            state2.Elements.map((el) => {
                                return (
                                    <>
                                        <div className="card box">
                                            <div className="card-body p-4">
                                                <p>{el.text}</p>
                                            </div>
                                            <div className="card-footer p-3">
                                                <div className="badge badge-info min-box"> buyer</div>
                                                <span>{state2.DateE}</span>
                                            </div>
                                        </div>
                                    </>
                                )
                            })

                        }
                    </div>
                </div>
                <div className="card col-md-5 box2">
                    <div className="card-body">
                        <div className="alert alert-primary alert1" role="alert">
                            <li>In order to refund ticket go to Account -> My Orders and choose the tool and click on Report button</li>
                            <li>Do not create double-tickets , create just one ticket and include all your problems then wait for your ticket to be replied.</li>
                        </div>
                    </div>
                </div>
                < div className="alert alert-dark Alert1 col-md-7" role="alert" >
                    <strong>Closed Ticket</strong>
                    <p>This ticket is closed and you can't reply to it</p>
                </div >
            </div>
        </>
    );
}
export default OneTicket;