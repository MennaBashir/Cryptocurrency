import "./../PageCommon.css";
import search from "./../../../images/search.svg";
import { useState } from "react";
import {
    setId, setWebdomain, setCountry, setDetails
    , setMin, setMax, setSeller
} from "./../../../rtk/CheckReducer"
import { useDispatch } from "react-redux";
function FormAccounts() {
    const [val1, setVal1] = useState(0);
    const [val2, setVal2] = useState("");
    const [val3, setVal3] = useState("");
    const [val4, setVal4] = useState("");
    const [val5, setVal5] = useState(0);
    const [val6, setVal6] = useState(0);
    const [val7, setVal7] = useState("");
    const dispatch = useDispatch();
    const FilterData = (e) => {
        e.preventDefault();
        dispatch(setId(val1));
        dispatch(setWebdomain(val2));
        dispatch(setCountry(val3));
        dispatch(setDetails(val4));
        dispatch(setMin(val5));
        dispatch(setMax(val6));
        dispatch(setSeller(val7));
    }
    return (
        <form className="formPage" onSubmit={(e) => FilterData(e)}>
            <div className="row mb-3">
                <div className="col-md-1">
                    <label className="form-label" htmlFor="ID">ID:</label>
                    <input type="number" id="ID" name="ID" className="form-control" onChange={(e) => setVal1(e.target.value)} />
                </div>
                <div className="col-md-2">
                    <label className="form-label" htmlFor="dels">Details:</label>
                    <input type="text" id="dels" name="details" className="form-control" onChange={(e) => setVal4(e.target.value)} />
                </div>
                <div className="col-md-2">
                    <label className="form-label" htmlFor="webdomain">Website Domain:</label>
                    <input type="text" id="webdomain" name="WebsiteDomain" className="form-control" onChange={(e) => setVal2(e.target.value)} />
                </div>
                <div className="col-md-2">
                    <label className="form-label" htmlFor="country">Country:</label>
                    <select id="country" name="country" className="form-control" onChange={(e) => setVal3(e.target.value)}>
                        <option value="">All Countries</option>
                        <option value="FR">French Republic</option>
                        <option value="DE">Germany</option>
                        <option value="Japan">Japan</option>
                        <option value="US">United States of America</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label className="form-label" htmlFor="seller">Seller:</label>
                    <select id="seller" name="seller" className="form-control" onChange={(e) => setVal7(e.target.value)}>
                        <option value="">Select Seller</option>
                        <option value="seller1">seller1</option>
                        <option value="seller3">seller3</option>
                        <option value="seller6">seller6</option>
                        <option value="seller7">seller7</option>
                        <option value="seller9">seller9</option>
                        <option value="seller10">seller10</option>
                        <option value="seller11">seller11</option>
                        <option value="seller15">seller15</option>
                        <option value="seller21">seller21</option>
                        <option value="seller27">seller27</option>
                        <option value="seller33">seller33</option>
                        <option value="seller34">seller34</option>
                        <option value="seller39">seller39</option>
                        <option value="seller43">seller43</option>
                        <option value="seller45">seller45</option>
                        <option value="seller49">seller49</option>
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
export default FormAccounts;