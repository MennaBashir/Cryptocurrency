import "./PageBalance.css";
function AllDeposite() {
    return (
        <div className="deposite">
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>#id</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Method</th>
                        <th>Before Balance</th>
                        <th>After Balance</th>
                        <th>Bonus</th>
                        <th>Payment Id</th>
                        <th>Paid At</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    )
}
export default AllDeposite