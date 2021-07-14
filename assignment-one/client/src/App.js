import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './myComponents/Header';
import Footer from './myComponents/Footer';
import UserLogin from './myComponents/UserLogin';
import UserRegister from './myComponents/UserRegister';
import UserList from './myComponents/UserList';
import EditUser from './myComponents/EditUser';

 function App() {
  return (
    <>
    <Router>
      <Header searchBar={false} title="UI"/>
      <Switch>
      <Route path="/" exact><UserList /></Route>
      <Route path="/login" exact><UserLogin /></Route>
      <Route path="/user/register" exact ><UserRegister /></Route>
      <Route path="/user/edit/:id" exact ><EditUser /></Route>
      </Switch>
      <Footer />
    </Router>
    </>   
  );
}

export default App;
