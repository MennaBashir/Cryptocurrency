import "./../PageCommon.css";
import cart from "./../../../images/shopping.svg";
import Navbar from "../../Navbar/Navbar";
import FormSmtp from "./FormSmtp";
import FormMailer from "./FormMailer";
import { useSelector } from "react-redux";
import { useState } from "react";
import Swal from 'sweetalert2';
import TableMailer from "./TableMailer";
import TableSmtp from "./TableSmtp";
function Send(props) {
    let Title = props.category === "smtp" ? "SMTP" : props.category === "mailers" ? "Mailers" : "";
    const state = useSelector(state => state.Check);
    const [email, setEmail] = useState(state.emailValue)
    const btnCheck = (e) => {
        Swal.fire({
            icon: "info",
            title: "Loading ...",
        }).then(() => {
            Swal.fire({
                icon: "success",
                title: "Success",
                text: "Saved Successfully",
            })
        }).catch(() => {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Error",
            })
        });
        e.preventDefault()
    }
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                {<h1>{Title}</h1>}
                <div className="alert alert-primary" role="alert">
                    <li>Click on the send button and then check your e-mail box received or not.</li>
                    <li>Use the id filter option to select which SMTP you want to buy.</li>
                    <li>Use a multiple purchase option if you need to make more orders at the same time.</li>
                    <li>There is <b>18657</b> {props.category} Available.</li>
                </div>
                {props.category === "smtp" ? <FormSmtp /> : <FormMailer />}
                <form className="formEmail" onSubmit={(e) => btnCheck(e)}>
                    <label htmlFor="email">Test Email:</label>
                    <input id="email" name="TestEmail" type="email" onChange={(e) => setEmail(e.target.value)} value={email} required className="form-control" />
                    <button type="submit" className="btn btn-success" >Save</button>
                </form>
                {props.category === "smtp" ? <TableSmtp /> : <TableMailer />}
            </div>
        </>
    )
}
export default Send;