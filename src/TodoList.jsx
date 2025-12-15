import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Todo from './Todo';

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
    if (todos.length)
    return (
        <Paper>
            <List>
                {todos.map((todo, i) => (
                    <>
                        <Todo
                          key={todo.id}
                          {...todo}
                          removeTodo={removeTodo}
                          toggleTodo={toggleTodo}
                          editTodo={editTodo}
                        />
                        {i < todos.length - 1 && <Divider />}
                    </>
                ))}
            </List>
        </Paper>
    );
    return (
        <Paper style={{marginTop: "1rem", padding: "1rem"}}>
            <Typography variant='h6' align='center'>
                You have no todos yet! Add one?
            </Typography>
        </Paper>
    )
}

export default TodoList;