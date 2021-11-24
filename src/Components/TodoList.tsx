import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteNote } from "../Action/Action";

const TodoList = ({ value,updateNote }: any) => {
  const data: any = useSelector((state) => state);
  const dispatch = useDispatch();
  const editHandler = (e: React.MouseEvent) => {
    dispatch(deleteNote(value.id));
    const noteForEdit = data.notes.find((elem: any) => {
      return elem.id === value.id;
    });
    updateNote(noteForEdit.note)
  };

  return (
    <>
      <Box
        component="div"
        display="block"
        fontSize={20}
        borderRadius={3}
        bgcolor="white.main"
        position="relative"
        p="1rem"
        boxShadow={4}
        m="1rem"
      >
        <Box
          overflow="hidden"
          textOverflow="ellipsis"
          width="30rem"
          whiteSpace="normal"
        >
          {value.note}
        </Box>
        <div style={{ position: "absolute", right: "0.2rem", top: "1rem" }}>
          <EditIcon onClick={editHandler} />
          <DeleteIcon
            onClick={(e: React.MouseEvent) => dispatch(deleteNote(value.id))}
          />
        </div>
      </Box>
    </>
  );
};
export default TodoList;
