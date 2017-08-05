import React from 'react';
import { connect } from 'react-redux';


const AddTodo = (state = [], action) => {
    switch (action.type) {
    	case 'ADD_TODO':
         return [
               ... state,
               {
               	id: action.id,
               	text: action.text,
               	completed: false
               }
            ] 

    	default:
    	  return state;
    }

}

export default AddTodo;



// // let AddTodo = ({ dispatch }) => {

// // let input;

// // return (
// //       <div>
          
// //       </div>
// // 	)


// // this.props

// // event.preventDefault();
// //         this.setState({
// //             newTodo: '',
// //             todos: this.state.todos.concat({
// //                 text: this.state.newTodo,
// //                 complete: false ``
// //             })
// //         });

// }

// export default AddTodo;



