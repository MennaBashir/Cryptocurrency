import AddBalance from "./AddBalance";
import AllDeposite from "./AllDeposite";
import "./PageBalance.css";
import Payment from "./Payment";
import { useState } from "react";
import Navbar from "./../Navbar/Navbar";
function PageBalance() {
    let [balance, setBalance] = useState(true);
    let [deposite, setDeposite] = useState(false);
    let goBalance = () => {
        setBalance(true);
        setDeposite(false);
    }
    let goDeposite = () => {
        setDeposite(true);
        setBalance(false);
    }
    return (
        <>
        <Navbar/>
        <div className="container-fluid balance">
            <h1>Add Balance</h1>
            <div className="add">
                <button className="btn btn-primary" onClick={() => goBalance()}>Add balance</button>
                <button className="btn btn-success" onClick={() => goDeposite()}>All Deposits History</button>
            </div>
                {balance ? <AddBalance /> : <AllDeposite />}
        </div>
        </>
    )
}
export default PageBalance;