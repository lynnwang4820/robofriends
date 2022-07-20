// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

class App extends Component{
  constructor(){
    super();
    this.state = {
      robots: robots,
      searchField:''
    }
  }

  onSearchChange = (event) =>{
    this.setState({searchField:event.target.value})
   
    
  }
  
  render(){
    const filterRobots = this.state.robots.filter(robot=>{
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    return(
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchChange = {this.onSearchChange}/>
        <Scroll>
          <CardList robots={filterRobots}/>
        </Scroll>
        
      </div>
      
    );
  }
  
}

export default App;