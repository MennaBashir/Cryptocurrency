import "./PageCommon.css";
import money from "./../../images/moneybag.jpg";
import { Link } from "react-router-dom";
function Buymodal() {
    return (
        <div className="modal fade money" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p style={{color:"black"}}>No Funds .. Add balance To buy this item</p>
                        <img src={money} alt=".." />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary cancel" data-bs-dismiss="modal">Cancel</button>
                        <Link to={'/pageBalance'} type="button" className="btn btn-primary">Add Balance</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Buymodal;