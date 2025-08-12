import { NavLink, Link } from 'react-router-dom';
import slider1 from '../../assets/img/Clip path group.png';
import { useLang } from '../../context/LanguageContext';
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ArticleIcon from '@mui/icons-material/Article';
import LockIcon from '@mui/icons-material/Lock';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  const { t, dir } = useLang();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const sidebarPosition = dir === 'rtl' ? { right: 0 } : { left: 0 };

  return (
    <div
      style={{
        width: '250px',
        color: 'white',
        padding: '20px',
        minHeight: '50vh'
      }}
    >
      <div className="container-fluid mt-3">
        <div className="row">
          {/* Sidebar */}
          <div className="hight-slider col-md-2">
            <div className="sidebar">
              <Link to="/">
                <img
                  src={slider1}
                  alt="ekad logo"
                  style={{ cursor: 'pointer' }}
                />
              </Link>
            </div>

            <div className="right-side main-sidebar">
              <NavLink to="/" end>
                <HomeIcon /> {t.home}
              </NavLink>
              <NavLink to="/AddNew">
                <PostAddIcon /> {t.addFax}
              </NavLink>
              <NavLink to="/Show">
                <ArticleIcon /> {t.showFax}
              </NavLink>
              <NavLink to="/NewPass">
                <LockIcon /> {t.changePassword}
              </NavLink>
              <NavLink to="/Login" className="logout">
                <LogoutIcon /> {t.logout}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
