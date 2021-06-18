import './App.css';
import React from 'react';
import CompProps from './myComponents/CompProps';
import Blogs from './myComponents/Blogs';
//import logo from './logo.svg';
//import ReactDOM from 'react-dom';

// React.createElement(
//   'h1',
//   {className: 'name'}
// );
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const userDefined = <Welcome name="Sara" />;
// ReactDOM.render(
//   userDefined,
//   document.getElementsByClassName('name')
// );
function App() { 
    // const element = <p><i>this is a html tag passed in a react element</i></p>;
    // ReactDOM.render(element, document.getElementById("root"));
  return (
    <>
    <CompProps />
    <Blogs />
    </>
  );
}
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('new'));
// }

// setInterval(tick, 1000);

export default App;
/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */