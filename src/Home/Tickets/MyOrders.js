import "./Tickets.css";
import Navbar from "./../Navbar/Navbar";
function MyOrders() {
    return (
        <>
            <Navbar />
            <div className="report container-fluid">
                <h1>My Orders</h1>
                <div className="alert alert-primary alert1" role="alert">
                    <li>You can only report a bad tool within <strong>12 hours</strong> execpt [ rdp - ssh ]
                    <strong>24 hours </strong>by clicking on Report #[Order Id] , Otherwise we can't give you refund or replacement!</li>
                    <li>Total Orders : <span>0</span></li>
                    <li>Refunded Orders : <span>0</span></li>
                </div>
                <div className="alert alert-danger alert2" role="alert">
                    <li>No Orders</li>
                </div>
            </div>
        </>
    )
}
export default MyOrders;