import { configureStore } from "@reduxjs/toolkit";
import CheckReducer from "./CheckReducer";
import TicketReducer from "./TicketReducer";

export const store = configureStore({
    reducer: {
        Check: CheckReducer,
        Ticket: TicketReducer,
    },
})