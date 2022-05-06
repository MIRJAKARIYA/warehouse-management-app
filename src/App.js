import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import ManageItems from './components/ManageItems/ManageItems';
import Header from './components/Header/Header';
import AddItem from './components/AddItem/AddItem';
import MyItems from './components/MyItems/MyItems';
import NotFound from './components/NotFound/NotFound';
import ItemInventory from './components/ItemInventory/ItemInventory';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './components/RequireAuth/RequireAuth';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/manageitems' element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>
        }></Route>
        <Route path='/additem' element={<AddItem></AddItem>}></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>
        <Route path='/inventory/:itemId' element={<ItemInventory></ItemInventory>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
