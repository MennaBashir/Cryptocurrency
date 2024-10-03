import "./../PageCommon.css";
import { DataLeads } from "./../Data/data";
import { useSelector } from "react-redux";
import Buymodal from "./../Buymodal";
import Swal from 'sweetalert2';
import { useState, useEffect } from "react";
import cart from "./../../../images/shopping.svg";
function TapleLead(props) {
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
        console.log(ele)
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
                            <th>Description</th>
                            <th>Niche</th>
                            <th>Website</th>
                            <th>Provider</th>
                            <th>Password</th>
                            <th>Emails Number</th>
                            <th>Proof</th>
                            <th>Price</th>
                            <th>Seller</th>
                            <th>Buy</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            DataLeads.filter((ele) => state.Description.toLowerCase() !== "" ? ele.description.toLowerCase().includes((state.Description).toLowerCase())
                                : state.Seller.toLowerCase() !== "" ? ele.sellerText.toLowerCase().includes((state.Seller).toLowerCase())
                                    : state.Country.toLowerCase() !== "" ? ele.locationText.toLowerCase().includes((state.Country).toLowerCase())
                                        : state.Provider.toLowerCase() !== "" ? ele.provider.toLowerCase().includes((state.Provider).toLowerCase())
                                            : state.Min !== 0 ? ele.price <= state.Min
                                                : state.Max !== 0 ? ele.price <= state.Max
                                                    : state.Id !== 0 ? ele.id == state.Id
                                                        : ele)
                                .map((el) => {
                                    if (el.category === props.subCategory) {
                                        return (
                                            <tr key={el.id} id={`${el.id}`}>
                                                <td><input type="checkbox" onChange={() => BuySelect(el.id)} /> </td>
                                                <td>{el.id}</td>
                                                <td>
                                                    <img src={el.locationImage} style={{ width: "25px" }} alt=".." />
                                                    {el.locationText}
                                                </td>
                                                <td>{el.description}</td>
                                                <td>N/A </td>
                                                <td>{el.website}</td>
                                                <td>{el.provider}</td>
                                                <td>{el.password}</td>
                                                <td>{el.emailNum}</td>
                                                <td><button className="btn btn-sm blue btn-primary" onClick={() => window.open("https://i.imgur.com/Gu72k5c.png", "_blank")}>View Proof</button></td>
                                                <td>{el.price}</td>
                                                <td><span style={{ display: "block" }}>{el.sellerText} </span>
                                                    <img src={el.sellerimg1} alt=".." />
                                                    <img src={el.sellerimg2} alt=".." />
                                                    <img src={el.sellerimg3} alt=".." />
                                                    <img src={el.sellerimg4} alt=".." />
                                                    <img src={el.sellerimg5} alt=".." />
                                                </td>
                                                <td><button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-success btn-sm green">Buy</button></td>
                                                <td>{el.date}</td>
                                            </tr>
                                        )
                                    }
                                })
                        }
                    </tbody>
                </table>
                <Buymodal />
            </div>
        </>
    );
}
export default TapleLead;