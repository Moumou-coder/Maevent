import {createSlice} from "@reduxjs/toolkit";
import {db} from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore";

export const eventSlice = createSlice({
    name: "event",
    initialState: {
        value: {
            title: "",
            image: null,
            address: "",
            date: "",
            hours: "",
            price: "",
            description: "",
        }
    },
    reducers: {
        postEvent: (state, action) => {
            state.value = action.payload
            addDoc(collection(db, "events"), {
                title: state.value.title,
                image: state.value.image,
                address: state.value.address,
                date: state.value.date,
                hours: state.value.hours,
                price: state.value.price,
                description: state.value.description,
            }).then();
        },
        // getEvent: (state, action) => {
        //
        // }
    }
});

//export
export const {postEvent} = eventSlice.actions;

export default eventSlice.reducer;