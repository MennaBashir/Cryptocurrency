import "./../PageCommon.css";
import search from "./../../../images/search.svg";
import { useState } from "react";
import {
    setId, setHost, setRam, setWindow, setCountry, setSeller
    , setMin, setMax
} from "./../../../rtk/CheckReducer"
import { useDispatch } from "react-redux";
function FormRdp() {
    const [val1, setVal1] = useState(0);
    const [val2, setVal2] = useState("");
    const [val3, setVal3] = useState("");
    const [val4, setVal4] = useState("");
    const [val5, setVal5] = useState("");
    const [val6, setVal6] = useState("");
    const [val7, setVal7] = useState(0);
    const [val8, setVal8] = useState(0);

    const dispatch = useDispatch();
    const FilterData = (e) => {
        e.preventDefault();
        dispatch(setId(val1));
        dispatch(setHost(val2));
        dispatch(setRam(val3));
        dispatch(setWindow(val4));
        dispatch(setCountry(val5));
        dispatch(setSeller(val6));
        dispatch(setMin(val7));
        dispatch(setMax(val8));
    }
    return (
        <form className="formPage" onSubmit={(e) => FilterData(e)}>
            <div className="row mb-3">
                <div className="col-md-1">
                    <label className="form-label" htmlFor="ID">ID:</label>
                    <input type="number" id="ID" name="ID" className="form-control" onChange={(e) => setVal1(e.target.value)} />
                </div>
                <div className="col-md-2">
                    <label className="form-label" htmlFor="host">Hosting:</label>
                    <input type="text" id="host" name="hosting" className="form-control" onChange={(e) => setVal2(e.target.value)} />
                </div>
                <div className="col-md-1">
                    <label className="form-label" htmlFor="ram">Ram:</label>
                    <input type="text" id="ram" name="Ram" className="form-control" onChange={(e) => setVal3(e.target.value)} />
                </div>
                <div className="col-md-1">
                    <label className="form-label" htmlFor="windows">Windows:</label>
                    <select name="Windows" id="windows" className="form-control" onChange={(e) => setVal4(e.target.value)} >
                        <option value="">All</option>
                        <option value="Win xp">Win xp</option>
                        <option value="Win Vista">Win Vista</option>
                        <option value="Win 2003">Win 2003</option>
                        <option value="Win 2008">Win 2008</option>
                        <option value="Win 7">Win 7</option>
                        <option value="Win 8">Win 8</option>
                        <option value="Win 10">Win 10</option>
                        <option value="Win Server 2012">Win Server 2012</option>
                        <option value="Win Server 2016">Win Server 2016</option>
                        <option value="Win Server 2019">Win Server 2019</option>
                        <option value="Win Server 2022">Win Server 2022</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label className="form-label" htmlFor="country">Country:</label>
                    <select id="country" name="country" className="form-control" onChange={(e) => setVal5(e.target.value)} >
                        <option value="">All Countries</option>
                        <option value="36">Australia</option>
                        <option value="124">Canada</option>
                        <option value="76">Federative Republic of Brazil</option>
                        <option value="250">French Republic</option>
                        <option value="276">Germany</option>
                        <option value="344">Hong Kong</option>
                        <option value="586">Islamic Republic of Pakistan</option>
                        <option value="380">Italian Republic</option>
                        <option value="392">Japan</option>
                        <option value="56">Kingdom of Belgium</option>
                        <option value="724">Kingdom of Spain</option>
                        <option value="752">Kingdom of Sweden</option>
                        <option value="528">Netherlands</option>
                        <option value="152">Republic of Chile</option>
                        <option value="158">Republic of China, Taiwan (TW1)</option>
                        <option value="246">Republic of Finland</option>
                        <option value="356">Republic of India</option>
                        <option value="360">Republic of Indonesia</option>
                        <option value="410">Republic of Korea</option>
                        <option value="616">Republic of Poland</option>
                        <option value="702">Republic of Singapore</option>
                        <option value="710">Republic of South Africa</option>
                        <option value="376">State of Israel</option>
                        <option value="634">State of Qatar</option>
                        <option value="756">Swiss Confederation</option>
                        <option value="826">United Kingdom</option>
                        <option value="840">United States of America</option>
                    </select>
                </div>
                <div className="col-md-1">
                    <label className="form-label" htmlFor="type">Type:</label>
                    <select name="Type" id="type" className="form-control">
                        <option value="">All</option>
                        <option value="pre_owned">Pre Owned</option>
                        <option value="created">Created</option>
                    </select>
                </div>
                <div className="col-md-1">
                    <label className="form-label" htmlFor="access">Access:</label>
                    <select name="Access" id="access" className="form-control">
                        <option value="">All</option>
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>

                    </select>
                </div>
                <div className="col-md-1">
                    <label className="form-label" htmlFor="seller">Seller:</label>
                    <select id="seller" name="seller" className="form-control" onChange={(e) => setVal6(e.target.value)} >
                        <option value="">All </option>
                        <option value="seller3">seller3</option>
                        <option value="seller4">seller4</option>
                        <option value="seller16">seller16</option>
                        <option value="seller21">seller21</option>
                        <option value="seller33">seller33</option>
                        <option value="seller35">seller35</option>
                        <option value="seller43">seller43</option>
                    </select>
                </div>
                <div className="col-md-1">
                    <label className="form-label" htmlFor="priceMin">Price Min:</label>
                    <input type="number" id="priceMin" name="Minprice" placeholder="$ Min" className="form-control" onChange={(e) => setVal7(e.target.value)} />
                </div>
                <div className="col-md-1">
                    <label className="form-label" htmlFor="priceMax">Price Max:</label>
                    <input type="number" id="priceMax" name="Maxprice" placeholder="$ Max" className="form-control" onChange={(e) => setVal8(e.target.value)} />
                </div>
            </div>
            <button type="submit" className="btn btn-success">Filter <img src={search} style={{ width: "15px" }} alt=".." /></button>
        </form>
    )
}
export default FormRdp;