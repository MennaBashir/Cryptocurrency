import "./Tickets.css";
import { useSelector } from "react-redux";
function CardText(props) {
    const state = useSelector(state => state.Ticket);
    return (
        <div className="card box">
            <div className="card-body p-4">
                <p>{props.text1}</p>
            </div>
            <div className="card-footer p-3">
                <div className="badge badge-info min-box"> buyer</div>
                <span>{state.DateS}</span>
            </div>
        </div>
    );
}
export default CardText;