import "../PageCommon.css";
function SeeInfo() {
    return (
        <div className="modal fade InfoM" id="exampleModal5" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title" id="exampleModalLabel">Seo Details</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="item">
                            <h5>PageRank</h5>
                            <span>2/10</span>
                        </div>

                        <div className="item">
                            <h5>cPR Score</h5>
                            <span>1.9/10</span>
                        </div>
                        <div className="item">
                            <h5>Domain Authority</h5>
                            <span>15</span>
                        </div>
                        <div className="item">
                            <h5>Domain Authority</h5>
                            <span>20</span>
                        </div>
                        <div className="item">
                            <h5>Trust Flow</h5>
                            <span>0</span>
                        </div>
                        <div className="item">
                            <h5>Trust Metric</h5>
                            <span>10</span>
                        </div>
                        <div className="item">
                            <h5>Domain Validity</h5>
                            <span>Found</span>
                        </div>
                        <div className="item">
                            <h5>Global Rank</h5>
                            <span>N/A</span>
                        </div>
                        <div className="item">
                            <h5>Alexa USA Rank</h5>
                            <span>N/A</span>
                        </div>
                        <div className="item">
                            <h5>Alexa Reach Rank</h5>
                            <span>N/A</span>
                        </div>
                        <div className="item">
                            <h5>Spam Score</h5>
                            <span>10 / 18</span>
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
export default SeeInfo;