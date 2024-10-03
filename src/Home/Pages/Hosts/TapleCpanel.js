import "./../PageCommon.css";
import circle from "./../../../images/circle.svg";
import { DataHost } from "./../Data/data";
import { useSelector } from "react-redux";
import send from "./../../../images/sendWhite.svg";
import Buymodal from "./../Buymodal";
import Swal from 'sweetalert2';
import { useState, useEffect } from "react";
import cart from "./../../../images/shopping.svg";
import SeeInfo from "./SeeInfo";
function TapleCpanel() {
    const state = useSelector(state => state.Check);
    const Checkall = () => {
        let all = document.querySelectorAll("table tbody td input");
        let x = document.querySelector("table th input");
        if (x.checked) {
            all.forEach((el) => {
                el.checked = 'checked'
            })
        }
        else {
            all.forEach((el) => {
                el.checked = '';
            })
        }
    };
    const CheckWork = (e) => {
        let a = document.getElementById(`${e}`);
        let ele = a.getElementsByTagName("button")[2];
        ele.innerText = "Loading";
        ele.style.opacity = ".8";
        setTimeout(() => {
            ele.innerText = "Working";
            ele.style.cssText = "background-color:#2db74c;opacity:1";
        }, 2000)
    }
    const CheckSent = (e) => {
        let a = document.getElementById(`${e}`);
        let ele = a.getElementsByTagName("button")[1];
        ele.innerText = "Loading";
        ele.style.opacity = ".8";
        setTimeout(() => {
            ele.innerText = "Done";
            ele.style.cssText = "background-color:#2db74c;opacity:1";
        }, 2000)
    }
    const CheckInfo = (e) => {
        let a = document.getElementById(`${e}`);
        let ele = a.getElementsByTagName("button")[0];
        ele.innerText = "Loading";
        ele.style.opacity = ".8";
        setTimeout(() => {
            ele.innerText = "#Seo Info";
            ele.style.opacity = "1";
        }, 3000);

    }
    // btn selectBuy start
    let [newPrice, setnewPrice] = useState(0);
    let [num, setNum] = useState(0);
    const BuySelect = (eId) => {
        let ele = document.getElementById(`${eId}`);
        let Input = ele.querySelector("td input");
        let Price = ele.getElementsByTagName("td")[10];
        if (Input.checked) {
            setnewPrice(newPrice + Number(Price.innerText));
            setNum(num + 1)
        }
        else {
            setnewPrice(newPrice - Number(Price.innerText));
            setNum(num - 1)
        }
    }
    useEffect(() => {
        let ele = document.querySelector(".sells");
        if (newPrice !== 0) {
            ele.classList.add("sellsActive");
        }
        else {
            ele.classList.remove("sellsActive");
        }
    });
    const SellSelected = () => {
        if (newPrice !== 0) {
            Swal.fire({
                title: "Are You Sure! You Will Buy All Selected Items ?",
                text: `Items Count :(${num}) Total Price: ${newPrice}$`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#dd6b55",
                cancelButtonColor: "#294d73",
                confirmButtonText: "Yes!"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Loading..",
                    }).then(() => {
                        Swal.fire({
                            title: "Success",
                            icon: "success",
                            text: "Items Bought Successfully [0] And you spent 0$"
                        })
                    }).catch(() => {
                        Swal.fire({
                            title: "Error !",
                            icon: "error"
                        })
                    })
                }
            })
        }
    }
    // btn selectBuy End
    return (
        <>
            <div className="sells">
                <button className="btn btn-success" onClick={() => SellSelected()}>
                    Buy Sellected ({num}) [{newPrice}$] <img src={cart} alt=".." />
                </button>
            </div>
            <div className="table1">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th><input type="checkbox" onChange={() => Checkall()} /></th>
                            <th>ID</th>
                            <th>Location</th>
                            <th>SSL</th>
                            <th>Source</th>
                            <th>TLD</th>
                            <th>Seo Rank/Da</th>
                            <th>#Seo Info</th>
                            <th>Hosting</th>
                            <th>Test Send <span>{state.emailValue}</span></th>
                            <th> Price</th>
                            <th>Seller</th>
                            <th>Check</th>
                            <th>Buy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            DataHost.filter((ele) => state.Host.toLowerCase() !== "" ? ele.hosting.toLowerCase().includes((state.Host).toLowerCase())
                                : state.Seller.toLowerCase() !== "" ? ele.sellerText.toLowerCase().includes((state.Seller).toLowerCase())
                                    : state.Country.toLowerCase() !== "" ? ele.locationText.toLowerCase().includes((state.Country).toLowerCase())
                                        : state.Webdomain !== "" ? ele.tld === state.Webdomain
                                            : state.Min !== 0 ? ele.price <= state.Min
                                                : state.Max !== 0 ? ele.price <= state.Max
                                                    : state.Id !== 0 ? ele.id === state.Id
                                                        : ele)
                                .map((el) => {
                                    if (el.category === "cpanels") {
                                        return (
                                            <tr key={el.id} id={`${el.id}`}>
                                                <td><input type="checkbox" onChange={() => BuySelect(el.id)} /> </td>
                                                <td>{el.id}</td>
                                                <td>
                                                    <img src={el.locationImage} style={{ width: "25px" }} alt=".." />
                                                    {el.locationText}
                                                </td>
                                                <td className={el.ssl === "https" ? "secure" : null}>
                                                    <img src={el.sslImage} alt=".." />
                                                    {el.ssl}
                                                </td>
                                                <td className="circle">
                                                    <img src={circle} alt="..." />
                                                Pre Owned
                                        </td>
                                                <td>{el.tld}</td>
                                                <td>N/A / N/A</td>
                                                <td><button className="btn btn-secondary btn-sm orange" data-bs-toggle="modal" data-bs-target="#exampleModal5" onClick={(e) => CheckInfo(el.id)}>#Seo Info</button></td>
                                                <td>{el.hosting}</td>
                                                <td><button className="btn btn-primary btn-sm Trans" onClick={(e) => CheckSent(el.id)}>Check Send <img src={send} alt="not" /> </button></td>
                                                <td>{el.price}</td>
                                                <td><span style={{ display: "block" }}>{el.sellerText} </span>
                                                    <img src={el.sellerimg1} alt=".." />
                                                    <img src={el.sellerimg2} alt=".." />
                                                    <img src={el.sellerimg3} alt=".." />
                                                    <img src={el.sellerimg4} alt=".." />
                                                    <img src={el.sellerimg5} alt=".." />
                                                </td>
                                                <td><button className="btn btn-sm btn-primary Trans" onClick={(e) => CheckWork(el.id)}>Check</button></td>
                                                <td><button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-success btn-sm green">Buy</button></td>
                                            </tr>
                                        )
                                    }
                                })
                        }
                    </tbody>
                </table>
                <Buymodal />
                <SeeInfo />

            </div>
        </>
    );
}
export default TapleCpanel;