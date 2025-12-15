import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import useInputState from './hooks/useInputState';

function EditTodoForm({ id, editTodo, task, toggleIsEditing }) {
    const [value, handleChange, reset] = useInputState(task);
    return (
        <form onSubmit={
          e => {
          e.preventDefault();
          editTodo(id, value);
          reset();
          toggleIsEditing();
          }}
          style={{marginLeft: "1rem", width: "100%"}}
        >
        <TextField
          margin='normal'
          value={value}
          onChange={handleChange}
          fullWidth
          autoFocus
        />
        </form>
    )
}

export default EditTodoForm;