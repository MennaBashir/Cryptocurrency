import "./Tickets.css";
import Navbar from "../Navbar/Navbar";
import TicketNav from "./TicketNav"
import send from "./../../images/sendWhite.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function MyTickets() {
    const state = useSelector(state => state.Ticket);
    return (
        <>
            <Navbar />
            <div className="container-fluid ticket">
                <h1>My Tickets</h1>
                <div className="alert alert-primary alert1" role="alert">
                    <li>- In order to refund ticket go to Account -> My Orders and choose the tool and click on Report button</li>
                    <li>- Do not create double-tickets , create just one ticket and include all your problems then wait for your ticket to be replied.</li>
                    <li>All Tickets : <span>0</span></li>
                    <li>Closed Tickets : <span>0</span></li>
                </div>
                <button className="btn btn-success green" data-bs-toggle="modal" data-bs-target="#exampleModal">Create new Ticket <img src={send} alt=".." /></button>
                <div className="tablediv">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Created</th>
                                <th>Status</th>
                                <th>Last reply</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                state.Titleinit.map((e) => {
                                    return (
                                        <tr key={e.Id}>
                                            <td><Link to={`/specificTicket/${e.title1}`}>{e.title1}</Link></td>
                                            <td>{state.DateS}</td>
                                            <td>closed</td>
                                            <td>{state.DateE}</td>
                                        </tr>
                                    )
                                })

                            }
                        </tbody>
                    </table>
                </div>
                <TicketNav />
            </div>
        </>
    )
}
export default MyTickets;