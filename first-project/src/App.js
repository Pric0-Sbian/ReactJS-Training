//51 minutes in video
import './App.css';
import React from 'react';
import Header from './todos/Header';
import Footer from './todos/Footer';
import Todos from './todos/Todos';

// import Click from './myComponents/class';
// import ReactDOM from 'react-dom';

//import Toggle from './myComponents/eventHandleClass';
//import Form from './myComponents/eventHandling';
//import CompProps from './myComponents/CompProps';
//import Blogs from './myComponents/Blogs';
//import Tick from './myComponents/date';
//import logo from './logo.svg';

function App() {
  let data = [
    {
      title: 'hello brother',
      body: 'there are things in my heart only you could see'
    },
    {
      title: 'hello second brother',
      body: 'there are things in my x-ray only you could see'
    },
    {
      title: 'hello third brother',
      body: 'there are things in my head only you could see'
    }
  ];
  const onDelete = (data)=>{
    console.log('I am onDelete of todo', data);
  }
  return (
    <>
      <Header title="MyTodoList" searchBar={true} />
      <Todos data={data} onDelete={onDelete}/>
      <Footer />
    </>
  );
}
export default App;