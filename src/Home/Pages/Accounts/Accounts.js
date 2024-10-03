import "./../PageCommon.css";
import FormAccounts from "./FormAccounts";
import Navbar from "../../Navbar/Navbar";
import TableAccount from "./TableAccount";
function Accounts(props) {
    let Title = props.category === "emailMarketing" ? "Email Marketing" :
        props.category === "webmailBusiness" ? "Webmail Business" : props.category === "hosting" ? "Hosting/Domain"
            : props.category === "vpn" ? "VPN/Socks Proxy" : props.category === "shopping" ? "Shopping"
                : props.category === "stream" ? "Shopping" : props.category === "learning" ? "Learning"
                    : props.category === "torrent" ? "Torrent / File Host" : props.category === "socialAccount" ? "Social Media" : "Other";
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                {<h1>Accounts - {Title}</h1>}
                <div className="alert alert-primary" role="alert">
                    <li>If you face any problem for account after buy just open report and seller will fix it or replace or refund.</li>
                    <li>Use a multiple purchase option if you need to make more orders at the same time.</li>
                    <li>There is <b>1</b> Accounts [{props.category}] Available .</li>
                </div>
                <FormAccounts />
                <TableAccount setCategory={props.category} />
            </div>
        </>
    )
}
export default Accounts;