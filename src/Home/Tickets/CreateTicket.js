import "./Tickets.css";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import Swal from 'sweetalert2'
import CardText from "./CardText";
import { GetElements, dateRespons } from "./../../rtk/TicketReducer";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
function CreateTicket() {
    let { elementtitl } = useParams();
    const elements = JSON.parse(localStorage.getItem('element'));
    const [element, setElement] = useState(elements || []);
    useEffect(() => {
        localStorage.setItem('element', JSON.stringify(element));
    }, [element]);
    let deposite = useDispatch();
    let inputRef = useRef();
    let [id, setId] = useState(1);
    let [task, setTask] = useState([]);
    const state1 = useSelector(state1 => state1.Check);
    const state2 = useSelector(state2 => state2.Ticket);
    const formSubmit = ((e) => {
        let text = inputRef.current.value;
        const Newtask = { text, id };
        setTask([...task, Newtask]);
        const newElement = { text };
        setElement([...element, newElement]);
        deposite(GetElements(newElement));
        let date = new Date().toLocaleString('en-US');
        deposite(dateRespons(date));
        inputRef.current.value = "";
        setId(id + 1);
        e.preventDefault();

    });

    const closeBtn = (() => {
        Swal.fire({
            icon: "info",
            title: "Are You Sure?",
            showCancelButton: true,
            confirmButtonText: "Yes!",
        }).then((res) => {
            if (res.isConfirmed) {
                document.querySelector(".pageTicket form ").style.display = "none";
                document.querySelector(".pageTicket form + button").style.display = "none";
                document.querySelector(".pageTicket .Alert ").style.display = "block";
            }

        });
    })
    return (
        <>
            <Navbar />

            <div className="pageTicket row container-fluid">
                <div className="col-md-7">
                    <h2>#{elementtitl} <em>by {state1.userName}</em></h2>
                    <CardText text1={state2.Textinit} />
                    <div className="response">
                        {


                            task.map((el) => {
                                return (
                                    <>
                                        <div className="card box" key={el.id}>
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
                    <form onSubmit={(e) => formSubmit(e)}>
                        <textarea placeholder="Reply..." required className="form-control" ref={inputRef}></textarea>
                        <button type="submit" className="btn btn-primary green mt-4 me-3 mb-3" >Submit</button>
                    </form>
                    <button onClick={() => closeBtn()} className="btn btn-primary blue mt-4 mb-3">Close Ticket</button>
                </div>
                <div className="card col-md-5 box2">
                    <div className="card-body">
                        <div className="alert alert-primary alert1" role="alert">
                            <li>In order to refund ticket go to Account -> My Orders and choose the tool and click on Report button</li>
                            <li>Do not create double-tickets , create just one ticket and include all your problems then wait for your ticket to be replied.</li>
                        </div>
                    </div>
                </div>
                < div className="alert alert-dark Alert col-md-7" role="alert" >
                    <strong>Closed Ticket</strong>
                    <p>This ticket is closed and you can't reply to it</p>
                </div >
            </div>
        </>
    )
}
export default CreateTicket