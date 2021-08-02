import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { Search } from './Search';
import {List}  from './List';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Search/>
      <List></List>
    </div>
  );
}

export default App;
