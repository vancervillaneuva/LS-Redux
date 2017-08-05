import React from 'react';

// functional component
const ShowList = (props) => {
	return (
        <ul>
          { props.todoList.map((element, i) => {
          	return <li key={i}> {element}</li>
            })}

        </ul>
	)
};

export default ShowList;