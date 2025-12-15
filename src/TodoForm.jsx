import React from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import useInputState from './hooks/useInputState';

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState('');
  return (
    <Paper style={{margin: "1rem 0", padding: "0 1rem"}}>
        <form action="" onSubmit={(e) => {
            e.preventDefault();
            addTodo(value);
            reset();
        }}>
            <TextField 
              label="Add a new todo"
              fullWidth
              value={value}
              onChange={handleChange}
              margin='normal'
            />
        </form>
    </Paper>
  )
}
export default TodoForm;