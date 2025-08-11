
import { Form, Link } from 'react-router-dom';
import slider1 from '../../assets/img/Clip path group.png'
import { useLang } from '../../context/LanguageContext';
import { useState } from 'react';
const Sidebar = () => {
    const { t,dir } = useLang();
 const [drawerOpen, setDrawerOpen] = useState(false);
  const sidebarPosition = dir === "rtl" ? { right: 0 } : { left: 0 };
  return (
    <div style={{
      width: '250px',
      color: 'white',
      padding: '20px',
      minHeight: '50vh'
    }}>
      <div className="container-fluid mt-3">
  <div className="row">
    {/* Sidebar */}
    <div className="hight-slider col-md-2">
      <div className="sidebar ">
        <img src={slider1} alt="ekad logo" />
      </div>
      <div className="right-side main-sidebar ">
        <a href="/" className="active">
          <i className="bi bi-house" /> {t.home}
        </a>
        <a href="/AddNew">
          <i className="bi bi-file-earmark-plus" /> {t.addFax}
        </a>
        <a href="/Show">
          <i className="bi bi-card-list" /> {t.showFax}
        </a>
        <a href="/NewPass">
          <i className="bi bi-key" /> {t.changePassword}
        </a>
        <a href="/Login" className="logout">
          <i className="bi bi-box-arrow-right" /> {t.logout}
        </a>
      </div>
    </div>
   
  </div>
</div>

    </div>
  );
};

export default Sidebar;