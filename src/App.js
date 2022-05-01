import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import 'flowbite';
import ManageItems from './components/ManageItems/ManageItems';
import Header from './components/Header/Header';
import AddItem from './components/AddItem/AddItem';
import MyItems from './components/MyItems/MyItems';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/manageitems' element={<ManageItems></ManageItems>}></Route>
        <Route path='/additem' element={<AddItem></AddItem>}></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
