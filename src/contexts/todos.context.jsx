import { createContext, useContext } from "react";
import useTodoState from "../hooks/useTodoState";

const defaultTodosContext = {
    todos: [
        {id: 1, task: "Call Babe", completed: false}
    ]
};

export const TodosContext = createContext();

export function TodosProvider(props) {
    const todoState = useTodoState(defaultTodosContext.todos);
    console.log("TodosProvider todoState:", todoState);

    return (
        <TodosContext.Provider value={todoState}>
            {props.children}
        </TodosContext.Provider>
    );
}