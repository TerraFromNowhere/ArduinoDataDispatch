import {createSlice,createAsyncThunk,createEntityAdapter} from '@reduxjs/toolkit';


const sensorAdapter = createEntityAdapter({
    sortComparer: (a, b) => a.data.localeCompare(b.data)
});



const GET_DATA = createAsyncThunk('fetch/data',() => {

   return fetch(`http://192.168.0.2:9000/${unitOfTime}/${id}`,{headers:{
        'Access-Control-Allow-Origin': '*'
    }})
    .then(result => {
        result.json().then(res => res);
    })
    .catch(e => {console.log(e)});
    
}
)

const dataSlice = createSlice({
    name:'data',
    initialState : sensorAdapter.getInitialState({
        data: []
    }),
    reducers:{},
    extraReducers:{
        [GET_DATA]:(state,action) => {
            state.status = 'success';
            sensorAdapter.updateMany(state,action.payload)
        }
    }
    
});

export const {FETCH_DATA} = dataSlice.actions; 
export default dataSlice.reducer;