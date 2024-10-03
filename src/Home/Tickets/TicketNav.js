import "./TicketNav.css";
import sendB from "./../../images/sendBlack.svg";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router";
import { GetTextI, dateStart, GetTitleI } from "./../../rtk/TicketReducer";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
function TicketNav() {
    const state = useSelector(state => state.Ticket)
    const titles = JSON.parse(localStorage.getItem('items'));
    const [title, setTitle] = useState(titles || []);
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(title))
    }, [title])
    let navigate = useNavigate();
    let deposite = useDispatch();
    let [num, setNum] = useState(0);
    let InputRef1 = useRef();
    let TextRef = useRef();
    let formSubmit = (e) => {
        deposite(GetTextI(TextRef.current.value));
        const Input = InputRef1.current.value;
        const newTitle = { title1: Input, Id: num }
        setTitle([...title, newTitle]);
        deposite(GetTitleI(newTitle));
        let date = new Date().toLocaleString('en-US');
        deposite(dateStart(date));
        Swal.fire({
            title: "Loading ..",
            icon: "info"
        }).then(() => {
            Swal.fire({
                title: "Redirecting ..",
                text: "Ticket Sent Successfuly Redirecting...",
                icon: "info",
            }).then((x) => {
                if (x.isConfirmed) {
                    navigate(`/createTicket/${num}`)
                }
            })
        });
        setNum(num + 1);
        e.preventDefault();
    }
    return (
        <div className="Ticket">
            <div className="modal  fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="exampleModalLabel">Create Support Ticket <img style={{ width: "22px" }} src={sendB} alt=".." /></h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body bodyDiv">
                            <form onSubmit={(e) => formSubmit(e)}>
                                <input name="title" type="text" placeholder="Title" required className="form-control Input" ref={InputRef1} />
                                <select required name="selectReason" className="form-control Input">
                                    <option value="">Select Reason</option>
                                    <option value="Balance Not Added">Balance Not Added</option>
                                    <option value="I Want To Be Seller">I Want To Be Seller</option>
                                    <option value="Order/Report Problem">Order/Report Problem</option>
                                    <option value="Item Request">Item Request</option>
                                    <option value="Technical Issue">Technical Issue</option>
                                    <option value="Features Request">Features Request</option>
                                    <option value="Other">Other</option>
                                </select>
                                <textarea placeholder="Message" required className="form-control Input" ref={TextRef}></textarea>
                                <button type="submit" className="btn btn-success green">Submit</button>
                            </form>
                        </div>
                        <div className="modal-footer close">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TicketNav;