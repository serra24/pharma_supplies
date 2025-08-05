import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';


const MainLayout = () => (
  <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar/>
      <main style={{ flex: 1, padding: '20px' }}>
        <Outlet />
      </main>
    </div>
);
export default MainLayout;
