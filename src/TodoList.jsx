import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Todo from './Todo';

function TodoList({ todos }) {
    return (
        <Paper>
            <List>
                {todos.map(todo => (
                    <>
                        <Todo
                          key={todo.id}
                          id={todo.id}
                          task={todo.task}
                          completed={todo.completed}
                        />
                        <Divider/>
                    </>
                ))}
            </List>
        </Paper>
    );
}

export default TodoList;