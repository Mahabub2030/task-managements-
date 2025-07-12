import { createSlice } from "@reduxjs/toolkit";

const initialState={
    task:[
        {
        id:"14gggggg444444444",
        title:"initialisce the page",
        description:"create initial scile",
        dueDate:"2025-12",
        isCopleted:false,
        priority:"High"
    },
        {
        id:"14gggggg444444445",
        title:"initialisce the page",
        description:"create initial scile",
        dueDate:"2025-12",
        isCopleted:false,
        priority:"High"
    },
    ]
}

const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{}

})

export default taskSlice.reducer;