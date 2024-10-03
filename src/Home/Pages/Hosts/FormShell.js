import "./../PageCommon.css";
import search from "./../../../images/search.svg";
import { useState } from "react";
import {
    setId, setHost, setWebdomain, setCountry, setSeller, setSsl
    , setMin, setMax
} from "./../../../rtk/CheckReducer"
import { useDispatch } from "react-redux";
function FormShell() {
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
        dispatch(setWebdomain(val3));
        dispatch(setCountry(val4));
        dispatch(setSeller(val5));
        dispatch(setSsl(val6));
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
                    <label className="form-label" htmlFor="os">Os:</label>
                    <input type="text" id="os" name="OS" className="form-control" />
                </div>
                <div className="col-md-1">
                    <label className="form-label" htmlFor="tld">Domain Tld:</label>
                    <input type="text" id="tld" name=">DomainTld" className="form-control" onChange={(e) => setVal3(e.target.value)} />
                </div>
                <div className="col-md-1">
                    <label className="form-label" htmlFor="ssl">SSL:</label>
                    <select name="SSL" id="ssl" className="form-control" onChange={(e) => setVal6(e.target.value)}>
                        <option value="">All</option>
                        <option value="http">Http</option>
                        <option value="https">Https</option>
                    </select>
                </div>
                <div className="col-md-1">
                    <label className="form-label" htmlFor="country">Country:</label>
                    <select id="country" name="country" className="form-control" onChange={(e) => setVal4(e.target.value)}>
                        <option value="">All </option>
                        <option value="32">Argentine Republic</option>
                        <option value="36">Australia</option>
                        <option value="862">Bolivarian Republic of Venezuela</option>
                        <option value="124">Canada</option>
                        <option value="156">China</option>
                        <option value="203">Czech Republic</option>
                        <option value="76">Federative Republic of Brazil</option>
                        <option value="250">French Republic</option>
                        <option value="276">Germany</option>
                        <option value="442">Grand Duchy of Luxembourg</option>
                        <option value="364">Islamic Republic of Iran</option>
                        <option value="380">Italian Republic</option>
                        <option value="392">Japan</option>
                        <option value="208">Kingdom of Denmark</option>
                        <option value="724">Kingdom of Spain</option>
                        <option value="752">Kingdom of Sweden</option>
                        <option value="764">Kingdom of Thailand</option>
                        <option value="458">Malaysia</option>
                        <option value="528">Netherlands</option>
                        <option value="554">New Zealand</option>
                        <option value="50">People’s Republic of Bangladesh</option>
                        <option value="100">Republic of Bulgaria</option>
                        <option value="120">Republic of Cameroon</option>
                        <option value="152">Republic of Chile</option>
                        <option value="170">Republic of Colombia</option>
                        <option value="233">Republic of Estonia</option>
                        <option value="246">Republic of Finland</option>
                        <option value="356">Republic of India</option>
                        <option value="360">Republic of Indonesia</option>
                        <option value="398">Republic of Kazakhstan</option>
                        <option value="440">Republic of Lithuania</option>
                        <option value="600">Republic of Paraguay</option>
                        <option value="604">Republic of Peru</option>
                        <option value="616">Republic of Poland</option>
                        <option value="690">Republic of Seychelles</option>
                        <option value="702">Republic of Singapore</option>
                        <option value="710">Republic of South Africa</option>
                        <option value="792">Republic of Turkey</option>
                        <option value="860">Republic of Uzbekistan</option>
                        <option value="642">Romania</option>
                        <option value="643">Russian Federation</option>
                        <option value="703">Slovak Republic</option>
                        <option value="704">Socialist Republic of Vietnam</option>
                        <option value="826">United Kingdom</option>
                        <option value="840">United States of America</option>
                    </select>
                </div>
                <div className="col-md-1">
                    <label className="form-label" htmlFor="seller">Seller:</label>
                    <select id="seller" name="seller" className="form-control" onChange={(e) => setVal5(e.target.value)}>
                        <option value="">Select Seller</option>
                        <option value="seller18">seller18</option>
                        <option value="seller23">seller23</option>
                        <option value="seller29">seller29</option>
                        <option value="seller30">seller30</option>
                        <option value="seller31">seller31</option>
                        <option value="seller32">seller32</option>
                        <option value="seller34">seller34</option>
                    </select>
                </div>
                <div className="col-md-1">
                    <label className="form-label" htmlFor="source">Source:</label>
                    <select name="Source" id="source" className="form-control">
                        <option value="">All</option>
                        <option value="pre_owned">Pre Owned</option>
                        <option value="created">Created</option>
                    </select>
                </div>
                <div className="col-md-1">
                    <label className="form-label" htmlFor="seo">Seo Filter:</label>
                    <select name="SeoFilter" id="seo" className="form-control">
                        <option value="">Default </option>
                        <option value="best_seo">Best Seo </option>
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
export default FormShell;