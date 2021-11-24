export type Action = {type: 'ADD_NOTE' ;payload :string}
export type DeleteAction = {type: 'DELETE_NOTE' ;payload :string}
export type UpdateAction = {type: 'UPDATE_NOTE' ;payload :string}

export const addNote:any = (note:any): Action => ({
    type: "ADD_NOTE",
    payload: note,
})


export const deleteNote : any =(note:any):DeleteAction =>{
    return {
        type:"DELETE_NOTE",
        payload: note ,
    }
}


export const updateNote:any = (note:any):UpdateAction =>{
    return {
        type:"UPDATE_NOTE",
        payload: note,
    }
}