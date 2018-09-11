import React, { Component } from 'react';
import { ListGroup, ListGroupItem , Button} from 'reactstrap';
//import { CSSTransition, TransitionGroup} from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.css';
import './todo.css';
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
            
            <ListGroup align="left">

                    {this.state.todoList.map((todo, index) => (                 
                        <ListGroupItem key={index}>
                            <Button
                                className="remove-btn"
                                color="danger"
                                size="sm"                          
                                onClick={() => this.deleteTodo(index)}>&times;
                            </Button>
                            {todo}
                        </ListGroupItem>
                    ))}
            </ListGroup>
            
          </div>
    
        );
      }
    }
    
    export default Todo;