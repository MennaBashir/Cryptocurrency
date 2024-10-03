import "./../PageCommon.css";
import search from "./../../../images/search.svg";
import { useState } from "react";
import {
    setId, setHost, setCountry, setWebmail, setSeller
    , setMin, setMax
} from "./../../../rtk/CheckReducer"
import { useDispatch } from "react-redux";
function FormSmtp() {
    const [val1, setVal1] = useState(0);
    const [val2, setVal2] = useState("");
    const [val3, setVal3] = useState("");
    const [val4, setVal4] = useState("");
    const [val5, setVal5] = useState("");
    const [val6, setVal6] = useState(0);
    const [val7, setVal7] = useState(0);
    const dispatch = useDispatch();
    const FilterData = (e) => {
        e.preventDefault();
        dispatch(setId(val1));
        dispatch(setHost(val2));
        dispatch(setCountry(val3));
        dispatch(setWebmail(val4));
        dispatch(setSeller(val5));
        dispatch(setMin(val6));
        dispatch(setMax(val7));
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
                    <select id="country" name="country" className="form-control" onChange={(e) => setVal3(e.target.value)} >
                        <option value="All Countries">All Countries</option>
                        <option value="818">Arab Republic of Egypt</option>
                        <option value="32">Argentine Republic</option>
                        <option value="533">Aruba</option>
                        <option value="36">Australia</option>
                        <option value="862">Bolivarian Republic of Venezuela</option>
                        <option value="70">Bosnia and Herzegovina</option>
                        <option value="124">Canada</option>
                        <option value="156">China</option>
                        <option value="203">Czech Republic</option>
                        <option value="180">Democratic Republic of the Congo</option>
                        <option value="144">Democratic Socialist Republic of Sri Lanka</option>
                        <option value="214">Dominican Republic</option>
                        <option value="858">Eastern Republic of Uruguay</option>
                        <option value="231">Ethiopia</option>
                        <option value="566">Federal Republic of Nigeria</option>
                        <option value="76">Federative Republic of Brazil</option>
                        <option value="250">French Republic</option>
                        <option value="268">Georgia</option>
                        <option value="276">Germany</option>
                        <option value="292">Gibraltar</option>
                        <option value="442">Grand Duchy of Luxembourg</option>
                        <option value="400">Hashemite Kingdom of Jordan</option>
                        <option value="300">Hellenic Republic</option>
                        <option value="344">Hong Kong</option>
                        <option value="598">Independent State of Papua New Guinea</option>
                        <option value="372">Ireland (IE1)</option>
                        <option value="4">Islamic Republic of Afghanistan</option>
                        <option value="364">Islamic Republic of Iran</option>
                        <option value="586">Islamic Republic of Pakistan</option>
                        <option value="380">Italian Republic</option>
                        <option value="392">Japan</option>
                        <option value="56">Kingdom of Belgium</option>
                        <option value="116">Kingdom of Cambodia</option>
                        <option value="208">Kingdom of Denmark</option>
                        <option value="504">Kingdom of Morocco</option>
                        <option value="578">Kingdom of Norway</option>
                        <option value="682">Kingdom of Saudi Arabia</option>
                        <option value="724">Kingdom of Spain</option>
                        <option value="752">Kingdom of Sweden</option>
                        <option value="764">Kingdom of Thailand</option>
                        <option value="418">Lao People’s Democratic Republic</option>
                        <option value="458">Malaysia</option>
                        <option value="496">Mongolia</option>
                        <option value="499">Montenegro</option>
                        <option value="524">Nepal</option>
                        <option value="528">Netherlands</option>
                        <option value="554">New Zealand</option>
                        <option value="275">Palestine</option>
                        <option value="12">People’s Democratic Republic of Algeria</option>
                        <option value="50">People’s Republic of Bangladesh</option>
                        <option value="68">Plurinational State of Bolivia</option>
                        <option value="620">Portuguese Republic</option>
                        <option value="24">Republic of Angola</option>
                        <option value="40">Republic of Austria</option>
                        <option value="31">Republic of Azerbaijan</option>
                        <option value="112">Republic of Belarus</option>
                        <option value="100">Republic of Bulgaria</option>
                        <option value="132">Republic of Cape Verde</option>
                        <option value="152">Republic of Chile</option>
                        <option value="158">Republic of China, Taiwan (TW1)</option>
                        <option value="170">Republic of Colombia</option>
                        <option value="188">Republic of Costa Rica</option>
                        <option value="384">Republic of Côte d’Ivoire</option>
                        <option value="191">Republic of Croatia</option>
                        <option value="196">Republic of Cyprus</option>
                        <option value="218">Republic of Ecuador</option>
                        <option value="222">Republic of El Salvador</option>
                        <option value="233">Republic of Estonia</option>
                        <option value="246">Republic of Finland</option>
                        <option value="340">Republic of Honduras</option>
                        <option value="348">Republic of Hungary</option>
                        <option value="352">Republic of Iceland</option>
                        <option value="356">Republic of India</option>
                        <option value="360">Republic of Indonesia</option>
                        <option value="398">Republic of Kazakhstan</option>
                        <option value="404">Republic of Kenya</option>
                        <option value="410">Republic of Korea</option>
                        <option value="428">Republic of Latvia</option>
                        <option value="440">Republic of Lithuania</option>
                        <option value="450">Republic of Madagascar</option>
                        <option value="454">Republic of Malawi</option>
                        <option value="466">Republic of Mali</option>
                        <option value="498">Republic of Moldova</option>
                        <option value="508">Republic of Mozambique</option>
                        <option value="591">Republic of Panama</option>
                        <option value="600">Republic of Paraguay</option>
                        <option value="604">Republic of Peru</option>
                        <option value="616">Republic of Poland</option>
                        <option value="646">Republic of Rwanda</option>
                        <option value="688">Republic of Serbia</option>
                        <option value="690">Republic of Seychelles</option>
                        <option value="702">Republic of Singapore</option>
                        <option value="705">Republic of Slovenia</option>
                        <option value="710">Republic of South Africa</option>
                        <option value="740">Republic of Suriname</option>
                        <option value="608">Republic of the Philippines</option>
                        <option value="788">Republic of Tunisia</option>
                        <option value="792">Republic of Turkey</option>
                        <option value="800">Republic of Uganda</option>
                        <option value="860">Republic of Uzbekistan</option>
                        <option value="894">Republic of Zambia</option>
                        <option value="716">Republic of Zimbabwe</option>
                        <option value="638">Réunion</option>
                        <option value="642">Romania</option>
                        <option value="643">Russian Federation</option>
                        <option value="703">Slovak Republic</option>
                        <option value="434">Socialist People’s Libyan Arab Jamahiriya</option>
                        <option value="704">Socialist Republic of Vietnam</option>
                        <option value="376">State of Israel</option>
                        <option value="634">State of Qatar</option>
                        <option value="512">Sultanate of Oman</option>
                        <option value="756">Swiss Confederation</option>
                        <option value="760">Syrian Arab Republic</option>
                        <option value="807">the former Yugoslav Republic of Macedonia</option>
                        <option value="768">Togolese Republic</option>
                        <option value="795">Turkmenistan</option>
                        <option value="804">Ukraine</option>
                        <option value="104">Union of Myanmar/</option>
                        <option value="784">United Arab Emirates</option>
                        <option value="826">United Kingdom</option>
                        <option value="484">United Mexican States</option>
                        <option value="834">United Republic of Tanzania</option>
                        <option value="840">United States of America</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label className="form-label" htmlFor="webmail">Has Webmail:</label>
                    <select name="HasWebmail" id="webmail" className="form-control" onChange={(e) => setVal4(e.target.value)} >
                        <option value="">All</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="col-md-1">
                    <label className="form-label" htmlFor="source">Source:</label>
                    <select name="source" id="source" className="form-control" >
                        <option value="">All</option>
                        <option value="pre_owned">Pre Owned</option>
                        <option value="created">Created</option>
                    </select>
                </div>

                <div className="col-md-1">
                    <label className="form-label" htmlFor="seller">Seller:</label>
                    <select id="seller" name="seller" className="form-control" onChange={(e) => setVal5(e.target.value)} >
                        <option value="">All </option>
                        <option value="seller1">seller1</option>
                        <option value="seller3">seller3</option>
                        <option value="seller4">seller4</option>
                        <option value="seller6">seller6</option>
                        <option value="seller7">seller7</option>
                        <option value="seller8">seller8</option>
                        <option value="seller9">seller9</option>
                        <option value="seller11">seller11</option>
                        <option value="seller12">seller12</option>
                        <option value="seller13">seller13</option>
                        <option value="seller14">seller14</option>
                        <option value="seller15">seller15</option>
                        <option value="seller16">seller16</option>
                        <option value="seller17">seller17</option>
                        <option value="seller20">seller20</option>
                        <option value="seller21">seller21</option>
                        <option value="seller22">seller22</option>
                        <option value="seller23">seller23</option>
                        <option value="seller24">seller24</option>
                        <option value="seller26">seller26</option>
                        <option value="seller30">seller30</option>
                        <option value="seller31">seller31</option>
                        <option value="seller32">seller32</option>
                        <option value="seller33">seller33</option>
                        <option value="seller35">seller35</option>
                        <option value="seller37">seller37</option>
                        <option value="seller38">seller38</option>
                        <option value="seller39">seller39</option>
                        <option value="seller41">seller41</option>
                        <option value="seller43">seller43</option>
                        <option value="seller44">seller44</option>
                        <option value="seller45">seller45</option>
                        <option value="seller47">seller47</option>
                        <option value="seller48">seller48</option>
                        <option value="seller49">seller49</option>
                    </select>
                </div>
                <div className="col-md-1">
                    <label className="form-label" htmlFor="priceMin">Price Min:</label>
                    <input type="number" id="priceMin" name="Minprice" placeholder="$ Min" className="form-control" onChange={(e) => setVal6(e.target.value)} />
                </div>
                <div className="col-md-1">
                    <label className="form-label" htmlFor="priceMax">Price Max:</label>
                    <input type="number" id="priceMax" name="Maxprice" placeholder="$ Max" className="form-control" onChange={(e) => setVal7(e.target.value)} />
                </div>
            </div>
            <button type="submit" className="btn btn-success">Filter <img src={search} style={{ width: "15px" }} alt=".." /></button>
        </form>

    )
}
export default FormSmtp;