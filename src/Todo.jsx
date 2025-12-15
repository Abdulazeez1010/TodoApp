import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
    const [isEditing, toggleIsEditing] = useToggleState(false);

    return (
        <ListItem
          key={id}
          secondaryAction={
            <>
              <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label="Edit" onClick={toggleIsEditing}>
                <EditIcon />
              </IconButton>
            </>
          }
          style={{height: "64px"}}
          disablePadding
        >
          {isEditing ? (
            <EditTodoForm
              id={id}
              task={task}
              editTodo={editTodo}
              toggleIsEditing={toggleIsEditing}
            />
          ) : (
            <>
              <Checkbox       
                tabIndex={-1}
                checked={completed}
                onClick={() => toggleTodo(id)}
              />
              <ListItemText
                style={{ textDecoration: completed ? "line-through" : "none" }}
              >
                {task}
              </ListItemText>
            </>
          )}
        </ListItem>
    )
}

export default Todo;