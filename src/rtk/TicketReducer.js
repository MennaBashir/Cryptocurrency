import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const text1 = localStorage.getItem("initalText") !== null ? localStorage.getItem("initalText") : "";
const date1 = localStorage.getItem("datestart") !== null ? localStorage.getItem("datestart") : "";
const date2 = localStorage.getItem("dateresponse") !== null ? localStorage.getItem("dateresponse") : "";
const initialState = {
    DateS: date1,
    DateE: date2,
    Titleinit: [],
    Textinit: text1,
    Elements: [],
};
export const TicketReducer = createSlice({
    initialState,
    name: "TicketReducer",
    reducers: {
        dateStart: (state, action) => {
            state.DateS = action.payload;
            localStorage.setItem('datestart', state.DateS);
        },
        dateRespons: (state, action) => {
            state.DateE = action.payload;
            localStorage.setItem('dateresponse', state.DateE);
        },
        GetTitleI: (state, action) => {
            const Titleadd = { ...action.payload };
            state.Titleinit.push(Titleadd);
        },
        GetTextI: (state, action) => {
            state.Textinit = action.payload;
            localStorage.setItem('initalText', state.Textinit);
        },
        GetElements: (state, action) => {
            const ElementAdd = { ...action.payload }
            state.Elements.push(ElementAdd);
        },
    }
})
export const { dateStart, dateRespons, GetTitleI, GetTextI, GetElements } = TicketReducer.actions
export default TicketReducer.reducer;