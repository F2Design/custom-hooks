

const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false
}];

const todoReducer = ( state = initialState, action = {} ) => {

    if ( action.type === '[ TODO ] add todo' ) {
        return [ ...state, action.payload ];
    }

    return state;
}

let todos = todoReducer();

//Si voy a hacerle una modificacion al Reducer, tengo que mandarle una accion que le dice como va a modificarse
const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false
}

// asi lucen las acciones
const addTodoAction = {
    type:'[ TODO ] add todo',
    payload: newTodo,
}

todos = todoReducer( todos, addTodoAction );

console.log({state:todos});

// * Important
// ! Deprecated
// ?
// TODO: Alert