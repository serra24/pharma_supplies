import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import { useLang } from '../context/LanguageContext';


const MainLayout = () => {
    const { t,dir } = useLang();
  return (
  <div style={{ display: 'flex', minHeight: '100vh',  }}>
      <Sidebar/>
      <main style={{ flex: 1, padding: '20px' }}>
        <Outlet />
      </main>
    </div>
)};
export default MainLayout;
