import React from 'react';

const TodoListItem = props => {
  return (
    <div className="TodoListItem" onClick={() => props.delete(props.id)}>
      {props.text}
    </div>
  );
};

export default TodoListItem;
