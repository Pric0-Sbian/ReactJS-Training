import React from 'react'
import ReactDOM from 'react-dom';

export default function CompProps() {
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  // let welcome = React.createElement(
    //     "div",
    //     {id: "header"},
    //     "<h2>Welcome to react world</h2>"
    //   );
      
    //   ReactDOM.render(welcome, document.getElementById('root'));
    // function Welcome(props) {
    //   return <h1>Hello, {props.name}</h1>;
    // }
    
    // const element = <Welcome name="Sara" />;
    // ReactDOM.render(
    //   element,
    //   document.getElementById('root')
    // );
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
    
}
