import "./Homepage.css";
import Navbar from "./../Navbar/Navbar";
import { Link } from "react-router-dom"
function Terms() {
    return (
        <>
            <Navbar />
            <div className="container-fluid term">
                <p><strong>Terms of Service</strong></p>
                <p>You agree with all the rules and terms prior to use our service.</p>
                <h4>Who we are?</h4>
                <p className="mb-4">We are just an intermediary between sellers and buyers and neutrally guarantee the rights of both parties in exchange for a small percentage deducted from sellers.</p>
                <h4>What we sell?</h4>
                <p className="mb-4">All available tools are for academic, marketing or legal use only and we are not responsible for any unethical or illegal use.</p>
                <h4>Our terms</h4>
                <p className="mb-4">We do not allow cheating, profanity or communication outside our site to ensure your rights and not be exposed to fraud.</p>
                <h4>Why we are here ?</h4>
                <p className="mb-4">We are here to help you and ensure your rights, so if you want to inquire about anything, you are welcome to contact us through our ticket system.</p>
                <p>We only on this domain,<Link to={'/home'}> https://sirx.sx </Link>don't trust or contract out our site or any other domain.</p>
                <p>Our system accept refunds if the order already damaged and seller can't fix or replace, so you will get refund within 12 hours.</p>
                <p className="mb-4">Your use of our services means that you fully agree to our Terms and conditions.</p>
                <p><strong>Terms may be updated or changed in future...</strong></p>
            </div>
        </>
    );
}
export default Terms;