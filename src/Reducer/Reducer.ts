
export interface NoteState {
  notes: string[]

}

const initialState = {
  notes: [],
};
export const notesReducer = (
  state :any= initialState,action :any
  ) => {
  
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state , notes: [...state.notes, action.payload] };
      
      case "DELETE_NOTE":
      return { notes : state.notes.filter((val:any) => val.id !== action.payload)}
      
      case "UPDATE_NOTE" :
        // const note :any = state.notes.find((val:any) => {
        //   if(val.id !== action.payload){
        //     return val.note
        //   }})
        //  return note
        break
        default:
          return state;
  }
};
