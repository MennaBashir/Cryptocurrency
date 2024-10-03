import "./Account.css";
import { Link } from "react-router-dom";
function TermServices() {
    return (
        <div className="modal fade MODAL" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title" id="exampleModalLabel2">Terms of Services</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div>
                            <h4>Who we are?</h4>
                            <p>We are just an intermediary between sellers and buyers and neutrally guarantee the rights of both parties in exchange for a small percentage deducted from sellers.</p>
                        </div>
                        <div>
                            <h4>What we sell?</h4>
                            <p>All available tools are for academic, marketing or legal use only and we are not responsible for any unethical or illegal use.</p>
                        </div>
                        <div>
                            <h4>Our terms</h4>
                            <p>We do not allow cheating, profanity or communication outside our site to ensure your rights and not be exposed to fraud.</p>
                        </div>
                        <div>
                            <h4>Why we are here ?</h4>
                            <p>We are here to help you and ensure your rights, so if you want to inquire about anything, you are welcome to contact us through our ticket system.</p>
                            <p>We only on this domain, <Link to={'/'}>https://sirx.sx</Link> don't trust or contract out our site or any other domain.</p>
                            <p>Our system accept refunds if the order already damaged and seller can't fix or replace, so you will get refund within 12 hours.</p>
                            <p>Your use of our services means that you fully agree to our Terms and conditions.</p>

                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TermServices;