import "./Account.css";
function Privacy() {
    return (
        <div className="modal fade MODAL" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title" id="exampleModalLabel"> Privacy Policy</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div>
                            <h4>What data we collect</h4>
                            <p>Only last logged in ip address</p>
                        </div>
                        <div>
                            <h4>What data we save from your personal data</h4>
                            <p>Only email address and username, for registration and login, and using our site services</p>
                        </div>
                        <div>
                            <h4>We don't sell your data</h4>
                            <p>We never sell or rent your data with any one or any company</p>
                        </div>
                        <div>
                            <h4>Cookies</h4>
                            <p>The only cookies we use are those to operate and provide our Services on the web. We do not use cookies for profiling or advertising. The cookies we use are small text files that allow us to provide and customize our Services, and in doing so provide you with an enhanced user experience. Your browser should allow you to control these cookies, including whether or not to accept them and how to remove them. You may choose to block cookies with your web browser, however, if you do disable these cookies you will not be able to log in to Sirx</p>
                        </div>
                        <div>
                            <h4>No Ads Based on User Data</h4>
                            <p>Unlike other services, we do not use your data for advertising targeting or other commercial purposes. Sirx stores only the information it needs to work as a secure and premium feature</p>
                            <p>We don't accept advertising on our site</p>
                            <p>We never share your details with anyone or any entity and our servers very safe from From any data leak</p>
                            <p>Your use of our services means that you fully agree to our Privacy Policy.</p>
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
export default Privacy;