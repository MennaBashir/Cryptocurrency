import "./../PageCommon.css";
import search from "./../../../images/search.svg";
import { useState } from "react";
import {
    setId, setHost, setCountry, setSeller
    , setMin, setMax
} from "./../../../rtk/CheckReducer"
import { useDispatch } from "react-redux";
function FormMailer() {
    const [val1, setVal1] = useState(0);
    const [val2, setVal2] = useState("");
    const [val3, setVal3] = useState("");
    const [val4, setVal4] = useState("");
    const [val5, setVal5] = useState(0);
    const [val6, setVal6] = useState(0);
    const dispatch = useDispatch();
    const FilterData = (e) => {
        e.preventDefault();
        dispatch(setId(val1));
        dispatch(setHost(val2));
        dispatch(setCountry(val3));
        dispatch(setSeller(val4));
        dispatch(setMin(val5));
        dispatch(setMax(val6));
    }
    return (
        <form className="formPage" onSubmit={(e) => FilterData(e)}>
            <div className="row mb-3">
                <div className="col-md-1">
                    <label className="form-label" htmlFor="ID">ID:</label>
                    <input type="number" id="ID" name="ID" className="form-control" onChange={(e) => setVal1(e.target.value)} />
                </div>
                <div className="col-md-3">
                    <label className="form-label" htmlFor="host">Hosting:</label>
                    <input type="text" id="host" name="Hosting" className="form-control" onChange={(e) => setVal2(e.target.value)} />
                </div>
                <div className="col-md-2">
                    <label className="form-label" htmlFor="country">Country:</label>
                    <select id="country" name="country" className="form-control" onChange={(e) => setVal3(e.target.value)}>
                        <option value="">All Countries</option>
                        <option value="32">Argentine Republic</option>
                        <option value="36">Australia</option>
                        <option value="124">Canada</option>
                        <option value="156">China</option>
                        <option value="76">Federative Republic of Brazil</option>
                        <option value="250">French Republic</option>
                        <option value="276">Germany</option>
                        <option value="300">Hellenic Republic</option>
                        <option value="344">Hong Kong</option>
                        <option value="372">Ireland (IE1)</option>
                        <option value="364">Islamic Republic of Iran</option>
                        <option value="586">Islamic Republic of Pakistan</option>
                        <option value="380">Italian Republic</option>
                        <option value="392">Japan</option>
                        <option value="56">Kingdom of Belgium</option>
                        <option value="116">Kingdom of Cambodia</option>
                        <option value="724">Kingdom of Spain</option>
                        <option value="764">Kingdom of Thailand</option>
                        <option value="458">Malaysia</option>
                        <option value="496">Mongolia</option>
                        <option value="524">Nepal</option>
                        <option value="528">Netherlands</option>
                        <option value="620">Portuguese Republic</option>
                        <option value="112">Republic of Belarus</option>
                        <option value="100">Republic of Bulgaria</option>
                        <option value="152">Republic of Chile</option>
                        <option value="158">Republic of China, Taiwan (TW1)</option>
                        <option value="170">Republic of Colombia</option>
                        <option value="246">Republic of Finland</option>
                        <option value="348">Republic of Hungary</option>
                        <option value="356">Republic of India</option>
                        <option value="360">Republic of Indonesia</option>
                        <option value="410">Republic of Korea</option>
                        <option value="440">Republic of Lithuania</option>
                        <option value="616">Republic of Poland</option>
                        <option value="702">Republic of Singapore</option>
                        <option value="710">Republic of South Africa</option>
                        <option value="792">Republic of Turkey</option>
                        <option value="642">Romania</option>
                        <option value="643">Russian Federation</option>
                        <option value="703">Slovak Republic</option>
                        <option value="704">Socialist Republic of Vietnam</option>
                        <option value="756">Swiss Confederation</option>
                        <option value="804">Ukraine</option>
                        <option value="826">United Kingdom</option>
                        <option value="484">United Mexican States</option>
                        <option value="840">United States of America</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label className="form-label" htmlFor="source">Source:</label>
                    <select name="source" id="source" className="form-control">
                        <option value="">All</option>
                        <option value="pre_owned">Pre Owned</option>
                        <option value="created">Created</option>
                    </select>
                </div>

                <div className="col-md-2">
                    <label className="form-label" htmlFor="seller">Seller:</label>
                    <select id="seller" name="seller" className="form-control" onChange={(e) => setVal4(e.target.value)}>
                        <option value="">Select Seller</option>
                        <option value="seller9">seller9</option>
                        <option value="seller22">seller22</option>
                        <option value="seller23">seller23</option>
                        <option value="seller26">seller26</option>
                        <option value="seller31">seller31</option>
                        <option value="seller41">seller41</option>
                    </select>
                </div>
                <div className="col-md-1">
                    <label className="form-label" htmlFor="priceMin">Price Min:</label>
                    <input type="number" id="priceMin" name="Minprice" placeholder="$ Min" className="form-control" onChange={(e) => setVal5(e.target.value)} />
                </div>
                <div className="col-md-1">
                    <label className="form-label" htmlFor="priceMax">Price Max:</label>
                    <input type="number" id="priceMax" name="Maxprice" placeholder="$ Max" className="form-control" onChange={(e) => setVal6(e.target.value)} />
                </div>
            </div>
            <button type="submit" className="btn btn-success">Filter <img src={search} style={{ width: "15px" }} alt=".." /></button>
        </form>

    )

}
export default FormMailer;