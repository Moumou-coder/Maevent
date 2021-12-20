import {createSlice} from "@reduxjs/toolkit";
import {deleteDoc, doc, setDoc} from "firebase/firestore";
import {db} from "../../firebase-config";


export const eventSlice = createSlice({
    name: "event",
    initialState: {
        arrayState: [],
    },
    reducers: {
        postEvent: (state, action) => {
            state.arrayState = [...state.arrayState, action.payload]
            setDoc(doc(db, "event", action.payload.id), {
                id: action.payload.id,
                title: action.payload.title,
                image: action.payload.image,
                address: action.payload.address,
                country: action.payload.country,
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
            state.arrayState = state.arrayState.filter(oneEvent => oneEvent.id !== action.payload)
            deleteDoc(doc(db, "event", action.payload)).then();
        }
    }
});

//export
export const {postEvent, getEvent, deleteEvent} = eventSlice.actions;

export default eventSlice.reducer;