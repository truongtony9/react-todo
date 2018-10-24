import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';

class ToDoList extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      todos: ''
    };
  }

  addHandler = e => {
    e.preventDefault();
    let list = this.state.list.slice();
    if (this.state.list !== '') {
      list.push(this.state.todos);
      this.setState({ todos: '', list });
    }
  };

  deleteHandler = item => {
    let list = this.state.list.slice();
    list.splice(item, 1);
    this.setState({ list });
  };

  render() {
    return (
      <div className="Todo_App">
        <div
          classsName="Todo_App_Title"
          style={{
            color: '#000000'
          }}
        >
          <h1>To-Do List</h1>
        </div>
        <div>
          <form onSubmit={e => this.addHandler(e)}>
            <TextField
              id="standard-name"
              label="Add To-Do"
              margin="normal"
              className="Todo_App_Input"
              type="text"
              value={this.state.todos}
              onChange={e => this.setState({ todos: e.target.value })}
              helperText="Click on each To-Do item when completed"
            />
            <button
              style={{
                backgroundColor: '#00008B',
                color: '#F8F8FF',
                width: '40px',
                height: '40px',
                margin: '20px',
                borderRadius: '50%'
              }}
              variant="fab"
              color="primary"
            >
              <AddIcon />
            </button>
          </form>
          <div>
            {this.state.list.map((todo, item) => {
              return (
                <Card
                  className="Todo_App_Input"
                  type="text"
                  value={this.state.todos}
                  style={{
                    color: '#000000',
                    width: '40vw',
                    margin: '20px',
                    padding: '10px',
                    textAlign: 'left'
                  }}
                >
                  <TodoListItem
                    delete={this.deleteHandler}
                    key={item}
                    text={todo}
                    id={item}
                  />
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoList;
