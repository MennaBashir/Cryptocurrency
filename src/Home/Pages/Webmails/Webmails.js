import FormWebmail from "./FormWebmail";
import cart from "./../../../images/shopping.svg";
import Navbar from "../../Navbar/Navbar";
import { useSelector } from "react-redux";
import { useState } from "react";
import Swal from 'sweetalert2';
import TableWebmail from "./TableWebmail";
function Webmails(props) {
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
        })
        e.preventDefault()
    }
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <h1>Webmail</h1>
                <div className="alert alert-primary" role="alert">
                    <li>Webmail is used for Social engineering, It's not used for mass send (penetration test).</li>
                    <li>Click on check button before purchasing any cpanel to check if it works or not.</li>
                    <li>Use a multiple purchase option if you need to make more orders at the same time.</li>
                    <li>We don't have email receive checker on the webmail section, so if it's working, buying it.</li>
                    <li>There is <b>46609 </b>Webmail Available</li>
                </div>
                <FormWebmail />
                <form className="formEmail" onSubmit={(e) => btnCheck(e)}>
                    <label htmlFor="email">Test Email:</label>
                    <input id="email" name="TestEmail" type="email" onChange={(e) => setEmail(e.target.value)} value={email} required className="form-control" />
                    <button type="submit" className="btn btn-success" >Save</button>
                </form>
                <TableWebmail subCategory={props.category} />
            </div>
        </>
    )
}
export default Webmails;