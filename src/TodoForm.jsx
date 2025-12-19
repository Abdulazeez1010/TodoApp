import {useContext} from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import useInputState from './hooks/useInputState';
import { DispatchContext } from './contexts/todos.context';

function TodoForm() {
  const [value, handleChange, reset] = useInputState('');
  const dispatch = useContext(DispatchContext);
  return (
    <Paper style={{margin: "1rem 0", padding: "0 1rem"}}>
        <form action="" onSubmit={(e) => {
            e.preventDefault();
            dispatch({type: "ADD", task: value});
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