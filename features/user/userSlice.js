import {createSlice} from "@reduxjs/toolkit";
import {deleteDoc, doc} from "firebase/firestore";
import {db} from "../../firebase-config";


const initialStateValue = {email: "", pseudo: ""};

export const userSlice = createSlice({
    name: "user",
    initialState: {value: initialStateValue},
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = initialStateValue;
        },
        deleteCurrentUser: (state, action) => {
            deleteDoc(doc(db, "users", action.payload)).then();
            state.value = initialStateValue;
        }
    }
});

//export
export const {login, logout, deleteCurrentUser} = userSlice.actions;
export default userSlice.reducer;