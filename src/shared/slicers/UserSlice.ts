import { createSlice, type PayloadAction} from '@reduxjs/toolkit';

import type { Users } from '../models/User.model';

const defaultValue: Users = {
    id: 0,
    name:'',
    email:'',
    phone:'',
    website:'',
    
};

const userslice = createSlice({
    name: 'Users',
    initialState: defaultValue,
    reducers:{
        setUserData: (State: Users, data: PayloadAction<Users>) => {
            State.id= data.payload.id;
            State.name= data.payload.name;
            State.email=data.payload.email;
            State.phone=data.payload.phone;
            State.website=data.payload.website;
        }
    }
});

export const { setUserData } = userslice.actions;
export default userslice.reducer;

