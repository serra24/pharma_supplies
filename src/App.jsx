import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './components/pages/Home/Home';
import AddNew from './components/pages/Home/AddNew';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="addnew" element={<AddNew />}>
          </Route>
      
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
