import "./../PageCommon.css";
import search from "./../../../images/search.svg";
import { useState } from "react";
import {
    setId, setDescription, setProvider, setType, setCountry, setSeller
    , setMin, setMax
} from "./../../../rtk/CheckReducer"
import { useDispatch } from "react-redux";
function FormLead() {
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
        dispatch(setDescription(val2));
        dispatch(setProvider(val3));
        dispatch(setType(val4));
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
                    <label className="form-label" htmlFor="desc">Description:</label>
                    <input type="text" id="desc" name="description" className="form-control" onChange={(e) => setVal2(e.target.value)} />
                </div>
                <div className="col-md-2">
                    <label className="form-label" htmlFor="prov">Provider:</label>
                    <input type="text" id="prov" name="provider" className="form-control" onChange={(e) => setVal3(e.target.value)} />
                </div>
                <div className="col-md-2">
                    <label className="form-label" htmlFor="type">type:</label>
                    <select name="type" id="type" className="form-control" onChange={(e) => setVal4(e.target.value)}>
                        <option value="">All</option>
                        <option value="100% Checked Email list">100% Checked Email list</option>
                        <option value="Email Only">Email Only</option>
                        <option value="Combo Email:Password">Combo Email:Password</option>
                        <option value="Combo Username:Password">Combo Username:Password</option>
                        <option value="Email Access">Email Access</option>
                        <option value="Combo Email:Hash">Combo Email:Hash</option>
                        <option value="Phone Number Only">Phone Number Only</option>
                        <option value="Combo Phone:Password">Combo Phone:Password</option>
                        <option value="Full Data">Full Data</option>
                        <option value="Social Media Data">Social Media Data</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label className="form-label" htmlFor="country">Country:</label>
                    <select id="country" name="country" className="form-control" onChange={(e) => setVal5(e.target.value)}>
                        <option value="">All Countries</option>
                        <option value="Arab Republic of Egypt">Arab Republic of Egypt</option>
                        <option value="Argentine Republic">Argentine Republic</option>
                        <option value="Australia">Australia</option>
                        <option value="Canada">Canada</option>
                        <option value="China">China</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Federative Republic of Brazil">Federative Republic of Brazil</option>
                        <option value="French Guiana">French Guiana</option>
                        <option value="French Republic">French Republic</option>
                        <option value="Germany">Germany</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Islamic Republic of Iran">Islamic Republic of Iran</option>
                        <option value="Italian Republic">Italian Republic</option>
                        <option value="JP">Japan</option>
                        <option value="Kingdom of Bemdium">Kingdom of Bemdium</option>
                        <option value="Kingdom of Spain">Kingdom of Spain</option>
                        <option value=">Kingdom of Thailand">Kingdom of Thailand</option>
                        <option value="Republic of Austria">Republic of Austria</option>
                        <option value="Republic of China, Taiwan (TW1)">Republic of China, Taiwan (TW1)</option>
                        <option value="Republic of Guatemala">Republic of Guatemala</option>
                        <option value="Republic of Hungary">Republic of Hungary</option>
                        <option value="Republic of India">Republic of India</option>
                        <option value="Republic of Korea">Republic of Korea</option>
                        <option value="Republic of Poland">Republic of Poland</option>
                        <option value="Republic of South Africa">Republic of South Africa</option>
                        <option value="Russian Federation">Russian Federation</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States of America">United States of America</option>
                    </select>
                </div>
                <div className="col-md-1">
                    <label className="form-label" htmlFor="seller">Seller:</label>
                    <select id="seller" name="seller" className="form-control" onChange={(e) => setVal6(e.target.value)}>
                        <option value=""> All</option>
                        <option value="seller2">seller2</option>
                        <option value="seller8">seller8</option>
                        <option value="seller22">seller22</option>
                        <option value="seller33">seller33</option>
                        <option value="seller38">seller38</option>
                        <option value="seller39">seller39</option>
                        <option value="seller45">seller45</option>
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
export default FormLead;