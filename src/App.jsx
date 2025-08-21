import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home/Home';
import AddNew from './pages/AddNew/AddNew';
import Show from './pages/Home/Show';
import NewPass from './pages/Home/NewPass';
import Details from './pages/Home/Details';
import Edit from './pages/Home/Edit';
import Login from './pages/Home/Login';

function App() {
  // const isLoggedIn = false; 

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={ <MainLayout />  }
        >
          <Route index element={<Home />} />
          <Route path="addnew" element={<AddNew />} />
          <Route path="show" element={<Show />} />
          <Route path="newpass" element={<NewPass />} />
          <Route path="details" element={<Details />} />
          <Route path="edit" element={<Edit />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
