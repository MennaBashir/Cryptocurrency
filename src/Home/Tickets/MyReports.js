import "./Tickets.css";
import Navbar from "./../Navbar/Navbar";
function MyReports() {
    return (
        <>
            <Navbar />
            <div className="report container-fluid">
                <h1>My Reports</h1>
                <div className="alert alert-primary alert1" role="alert">
                    <h4 className="alert-heading">How to report a bad item ?</h4>
                    <li>Account > My Orders then choose the item you want to report and click on Report button You only have 12 hour to report a bad item</li>
                    <li>Total Report : <span>0</span></li>
                    <li>Pending Report : <span>0</span></li>
                    <li>Rejected Report : <span>0</span></li>
                    <li>Refunded Report : <span>0</span></li>
                </div>
                <div className="alert alert-danger alert2" role="alert">
                    <li>No Reports</li>
                </div>
            </div>
        </>
    )
}
export default MyReports;