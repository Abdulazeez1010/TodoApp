import { useContext, memo } from 'react';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DispatchContext } from './contexts/todos.context';

function Todo({ id, task, completed }) {
    const [isEditing, toggleIsEditing] = useToggleState(false);
    const dispatch = useContext(DispatchContext);
    return (
        <ListItem
          key={id}
          secondaryAction={
            <>
              <IconButton aria-label="Delete" onClick={() => dispatch({type: "REMOVE", id: id})}>
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
              toggleIsEditing={toggleIsEditing}
            />
          ) : (
            <>
              <Checkbox       
                tabIndex={-1}
                checked={completed}
                onClick={() => dispatch({type: "TOGGLE", id: id})}
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

export default memo(Todo);