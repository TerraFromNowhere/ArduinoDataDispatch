import {createSlice,createAsyncThunk,createEntityAdapter} from '@reduxjs/toolkit';


export const GET_DATA = createAsyncThunk('fetch/data',async (unitOfTime) => {

    console.log('Triggered get data');
    try{
        const data = await fetch(`http://192.168.0.2:9000/${unitOfTime}/3`,{headers:{'Access-Control-Allow-Origin': '*'}});       
        const jsonData = await data.json();   
        return jsonData;
    }
    catch(e){
        console.log(e);
    }


    }
)
const dataSlice = createSlice({
    name:'data',
    initialState : {
        data: [],
        status:'on-air'
    },
    reducers:{
        getState : (state,action) => {
            state.data.push({a:'a'});
        },
    },
    extraReducers:{
        [GET_DATA.pending]:(state,action) => {
            state.status = 'pending';
           // state.push({a:'d'});         
        },
        [GET_DATA.fulfilled]:(state,action) => {
            state.status = 'success';
            console.log(action);
            state.data.push(action.payload);         
        },
        [GET_DATA.rejected]:(state,action) => {
            state.status = 'fail';
           // state.push({a:'d'});  
        }
    }
    
});

export const {getState} = dataSlice.actions; 
export default dataSlice.reducer;