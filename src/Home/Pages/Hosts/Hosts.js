import "./../PageCommon.css";
import Navbar from "../../Navbar/Navbar";
import FormRdp from "./FormRdp";
import FormCpanel from "./FormCpanel";
import FormWhm from "./FormWhm";
import FormShell from "./FormShell";
import { useSelector } from "react-redux";
import { useState } from "react";
import Swal from 'sweetalert2';
import cart from "./../../../images/shopping.svg"
import TapleCpanel from "./TapleCpanel";
import TapleShell from "./TapleShell";
import TapleWhm from "./TapleWhm";
import TapleRdp from "./TapleRdp";
function Hosts(props) {
    let Title = props.category === "cpanels" ? "Cpanels" : props.category === "shells" ? "Shells" :
        props.category === "ssh" ? "SSH\\WHM" : props.category === "rdp" ? "Rdp" : "";
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
                    <li>Click on check button before purchasing any RDP to check if it works or not.</li>
                    <li>Click on the check blacklist button to check blacklisted ip or not.</li>
                    <li>Use a multiple purchase option if you need to make more orders at the same time.</li>
                    <li>There is <b>579</b> {props.category} Available.</li>
                </div>
                {props.category === "cpanels" ? <FormCpanel /> : props.category === "shells" ? <FormShell /> :
                    props.category === "ssh" ? <FormWhm /> : <FormRdp />}
                <form className="formEmail" onSubmit={(e) => btnCheck(e)}>
                    <label htmlFor="email">Test Email:</label>
                    <input id="email" name="TestEmail" type="email" onChange={(e) => setEmail(e.target.value)} value={email} required className="form-control" />
                    <button type="submit" className="btn btn-success" >Save</button>
                </form>
                {props.category === "cpanels" ? <TapleCpanel /> : props.category === "shells" ? <TapleShell /> :
                    props.category === "ssh" ? <TapleWhm /> : <TapleRdp />}
            </div>
        </>
    )
}
export default Hosts;

