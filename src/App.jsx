import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home/Home';
import AddNew from './pages/Home/AddNew';
import Show from './pages/Home/Show';
import NewPass from './pages/Home/NewPass';
import Details from './pages/Home/Details';
import Edit from './pages/Home/Edit';
import Login from './pages/Home/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="addnew" element={<AddNew />}/>
          <Route path="show" element={< Show/>}/>
          <Route path="newpass" element={<NewPass/>}/>
          <Route path="Details" element={<Details/>}/>
          <Route path="Edit" element={<Edit/>}/>
          <Route index element={<Login/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
