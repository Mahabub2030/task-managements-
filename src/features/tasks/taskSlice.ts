import type { RootState } from "@/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";



interface InitialSate {
    tasks:ITask[];
    filter:"all"|"high"|"low"
}

const initialState : InitialSate ={
    tasks:[
        {
        id:"14gggggg444444444",
        title:"initialisce the page",
        description:"create initial scile",
        dueDate:"2025-12",
        isCopleted:false,
        priority:"High"
    }
    ],
    filter:"all"
}

const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{}

})

export const selectTasks = (state:RootState) =>{
    return state.todo.tasks
}
export const selectFilter = (state:RootState) =>{
    return state.todo.filter
}

export default taskSlice.reducer;