let nextTodo = 0;


export const addTodo = text => {
        type: 'ADDTODO',
        id: nextTodo++,
        text,

};
