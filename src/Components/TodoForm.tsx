import React, { useState,ChangeEvent } from "react";
import { Box, Input, Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { addNote } from "../Action/Action";
import { useDispatch,useSelector } from "react-redux";
import TodoList from "./TodoList";
const classes = {
  form: {
    marginLeft: "1.1rem",
    marginTop: "2rem",
  },
  Input: {
    width: "25rem",
    marginBottom: "1rem",
  },
};


export const TodoForm : React.FC = () => {
  const [note , setNote] = useState('');
  const dispatch = useDispatch()
  const data :any = useSelector(state => state)


const submitHandler = (e: React.FormEvent) => {
  e.preventDefault()
  dispatch(  addNote({
    id: Math.floor(Math.random()*1000000),
    note
}));
  setNote('')
}
const noteValue = (val : any) =>{
  setNote(val)
}

  return (
    <>
    <Box
      border={1}
      borderColor="grey.500"
      borderRadius={5}
      bgcolor="white.main"
      boxShadow={3}
      width={450}
      height={150}
      mx="auto"
      mt="2rem"
    >
      <form style={classes.form} onSubmit={submitHandler}>
        <Input
          style={classes.Input}
          type="text"
          required
          className="form-control"
          placeholder="Add today's plan "
          onChange={(event: ChangeEvent<HTMLInputElement>) => setNote(event.target.value)}
          value={note}
        />
        <Button
          style={{ marginTop: "1rem", marginLeft: "8.5rem" }}
          type="submit"
          variant="contained"
          color= "primary"
          startIcon={ <EditIcon />}
        >
       Add Plan
        </Button>
      </form>
    </Box>
    {data.notes.map((val: any) => {
        return <TodoList key={val.id} value ={val} updateNote = {noteValue}  />;
      })}
    </>
  );
};

export default TodoForm;
