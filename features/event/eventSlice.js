import {createSlice} from "@reduxjs/toolkit";
import {db} from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore";

export const eventSlice = createSlice({
    name: "event",
    initialState: {
        arrayState:[],
    },
    reducers: {
        postEvent: (state, action) => {
            state.arrayState = [...state.arrayState, action.payload]
            addDoc(collection(db, "event"), {
                title: action.payload.title,
                image: action.payload.image,
                address: action.payload.address,
                date: action.payload.date,
                hours: action.payload.hours,
                price: action.payload.price,
                description: action.payload.description,
            }).then();
        },
        getEvent: (state, action) => {
            state.arrayState = [...action.payload]
        },
        deleteEvent: (state, action) => {
            let newDeleteArray = state.arrayState.filter(oneEvent=>oneEvent.id!==action.payload.id)
            state.arrayState = [...newDeleteArray]
        }
    }
});

//export
export const {postEvent, getEvent, deleteEvent} = eventSlice.actions;

export default eventSlice.reducer;