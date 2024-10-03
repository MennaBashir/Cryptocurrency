import { createSlice } from "@reduxjs/toolkit";
const item1 = localStorage.getItem("username") !== null ? localStorage.getItem("username") : "";
const item2 = localStorage.getItem("email") !== null ? localStorage.getItem("email") : "";
const item3 = localStorage.getItem("password") !== null ? localStorage.getItem("password") : "";
const item4 = localStorage.getItem("datein") !== null ? localStorage.getItem("datein") : "";;
const item5 = localStorage.getItem("dateup") !== null ? localStorage.getItem("dateup") : "";
const item6 = localStorage.getItem("method") !== null ? localStorage.getItem("method") : "";
const item7 = localStorage.getItem("amount") !== null ? localStorage.getItem("amount") : "";
const item8 = localStorage.getItem("adress") !== null ? localStorage.getItem("adress") : "";
const initialState = {
    userName: item1,
    emailValue: item2,
    passValue: item3,
    Datein: item4,
    Dateup: item5,
    Method: item6,
    Amount: item7,
    RandomUrl: item8,
    Id: 0,
    Host: "",
    Website: "",
    Webmail: "",
    Webdomain: "",
    Details: "",
    Country: "",
    Ssl: "",
    Ram: "",
    Seller: "",
    Description: "",
    Provider: "",
    Type: "",
    Whm: "",
    Window: "",
    Min: 0,
    Max: 0,
};
export const CheckReducer = createSlice({
    initialState,
    name: "CheckReducer",
    reducers: {
        GetEmail: (state, action) => {
            state.emailValue = action.payload;
            localStorage.setItem('email', state.emailValue);
        },
        GetMethod: (state, action) => {
            state.Method = action.payload;
            localStorage.setItem('method', state.Method);
        },
        GetAmount: (state, action) => {
            state.Amount = action.payload;
            localStorage.setItem('amount', state.Amount);
        },
        GetRandomUrl: (state, action) => {
            state.RandomUrl = action.payload;
            localStorage.setItem('adress', state.RandomUrl);
        },
        GetDateup: (state, action) => {
            state.Dateup = action.payload;
            localStorage.setItem('dateup', state.Dateup);
        },
        GetDatein: (state, action) => {
            state.Datein = action.payload;
            localStorage.setItem('datein', state.Datein);
        },
        GetName: (state, action) => {
            state.userName = action.payload;
            localStorage.setItem('username', state.userName);
        },
        GetPassword: (state, action) => {
            state.passValue = action.payload;
            localStorage.setItem('password', state.passValue);
        },
        setId: (state, action) => {
            state.Id = action.payload;
        },
        setRam: (state, action) => {
            state.Ram = action.payload;
        },
        setSsl: (state, action) => {
            state.Ssl = action.payload;
        },
        setHost: (state, action) => {
            state.Host = action.payload;
        },
        setWebsite: (state, action) => {
            state.Website = action.payload;
        },
        setWebmail: (state, action) => {
            state.Webmail = action.payload;
        },
        setWebdomain: (state, action) => {
            state.Webdomain = action.payload;
        },
        setDetails: (state, action) => {
            state.Details = action.payload;
        },
        setDescription: (state, action) => {
            state.Description = action.payload;
        },
        setProvider: (state, action) => {
            state.Provider = action.payload;
        },
        setType: (state, action) => {
            state.Type = action.payload;
        },
        setCountry: (state, action) => {
            state.Country = action.payload;
        },
        setMin: (state, action) => {
            state.Min = action.payload;
        },
        setMax: (state, action) => {
            state.Max = action.payload;
        },
        setSeller: (state, action) => {
            state.Seller = action.payload;
        },
        setWhm: (state, action) => {
            state.Whm = action.payload;
        },
        setWindow: (state, action) => {
            state.Window = action.payload;
        },
    }
})
export const { GetEmail, GetMethod, GetRandomUrl, GetAmount, GetName, GetPassword, GetDateup, GetDatein, setId, setHost, setWindow, setWebsite, setCountry, setSsl, setType, setRam, setWhm
    , setMin, setMax, setSeller, setWebdomain, setDetails, setDescription, setProvider, setWebmail } = CheckReducer.actions;
export default CheckReducer.reducer;