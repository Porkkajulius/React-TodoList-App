import React, { Component } from 'react';
import Todo from './components/todo';



class App extends Component {


    render() {
      return (
       <div className="App">
          <header className="App-header">
               <h1 className="App-title">Welcome to Todo app</h1>
          </header>
          <div></div>
          <Todo/>

      </div>

      );
    }
  }

export default App;
