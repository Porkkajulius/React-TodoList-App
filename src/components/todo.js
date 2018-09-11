import React, { Component } from 'react';
import '../App.css';

class Todo extends Component {


    constructor(props) {
        super(props);
        this.state = {description: '', todoList: []};
        }
        
        // inserts new todo to todoList
        addTodo = (event) => {
          event.preventDefault();
          this.setState({
            todoList: [...this.state.todoList, this.state.description]
          });
        }
    
        // deletes todo from todoList with index parameter
        deleteTodo = (index) => {
          let {todoList} = this.state;
          todoList.splice(index, 1);
          this.setState({
            todoList: todoList
          })
        }
        
        // value in the input field
        inputChanged = (event) => {
          this.setState({description: event.target.value});
        }
      
      render() {
        return (
    
          <div>
            <h2>Todolist</h2>
            <div>
              <form onSubmit={this.addTodo}>
                <input type="text" onChange={this.inputChanged} value={this.state.description}/>
                <input type="submit" value="Add"/>
              </form>
            </div>
    
            <table align="center">
              <tbody>

                {this.state.todoList.map((todo, index) =>
                  <tr key={index}>
                    <td>{todo}</td>
                    <td><button onClick={() => this.deleteTodo(index)}>Delete</button></td>               
                  </tr>
                )}
    
              </tbody>
            </table>
    
          </div>
    
        );
      }
    }
    
    export default Todo;