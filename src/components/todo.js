import React, { Component } from 'react';
import { ListGroup, ListGroupItem , Button, Table} from 'reactstrap';
//import { CSSTransition, TransitionGroup} from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.css';
import './todo.css';
import '../App.css';

class Todo extends Component {


    constructor(props) {
        super(props);
        this.state = {
            todo: {
                description: '', 
                date: '',
            },

            todoList: []
        };
    }
        
        // inserts new todo to todoList
        addTodo = (event) => {
          event.preventDefault();
          this.setState({
            todoList: [...this.state.todoList, this.state.todo]
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
          this.setState({ [event.target.name]: event.target.value });
        }

        onChange(value, key) {
            this.setState((previousState) => {
              const todo = previousState.todo
              return { todo: {...todo, [key]: value} }
              
            })
          }
      
      render() {
        return (
    
          <div>
            <h2>Todolist</h2>
            <div>
              <form onSubmit={this.addTodo}>

                <input type="text" value={this.state.todo.description} onChange={(e) => {
                    this.onChange(e.target.value, 'description')
                }}/>
                
                <input type="text" value={this.state.todo.date} onChange={(e) => {
                    this.onChange(e.target.value, 'date')
                }}/>

                <input type="submit" value="Add"/>
              </form>
            </div>

                   <Table striped bordered condensed hover>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Description</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.todoList.map((todo, index) => (        
                                <tr>
                                    <td>
                                        <Button
                                            className="remove-btn"
                                            color="danger"
                                            size="sm"                          
                                            onClick={() => this.deleteTodo(index)}>&times;
                                        </Button>
                                    </td>
                                    <td>{todo.description}</td>
                                    <td>{todo.date}</td>
                                </tr>
                            ))}
                        </tbody>
                </Table>

  
          

          </div>
    
        );
      }
    }
    
    export default Todo;