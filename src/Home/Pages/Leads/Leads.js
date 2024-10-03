import Navbar from "../../Navbar/Navbar";
import FormLead from "./FormLead";
import "./../PageCommon.css";
import TableLead from "./TableLead";
function Leads(props) {
    let Title = props.category === "emailOnly" ? "Email Only" : props.category === "compoEmail" ? "Combo Email:Password" :
        props.category === "emailAccess" ? "Email Access" : props.category === "phoneNumber" ? "Phone Number Only" :
            props.category === "fullData" ? "Full Data" : "Social Media Data";
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                {<h1>Leads - {Title}</h1>}
                <div className="alert alert-primary" role="alert">
                    <li>We have fresh email lists for different countries (you can use it for marketing or anything else).</li>
                    <li>Our email lists guaranteed for you good results because most of them are from shops and big sites with legit source.</li>
                    <li>Use a multiple purchase option if you need to make more orders at the same time.</li>
                    <li>There is <b>257</b> {props.category} Available.</li>
                </div>
                <FormLead />
                <TableLead subCategory={props.category} />
            </div>
        </>
    )
}
export default Leads;