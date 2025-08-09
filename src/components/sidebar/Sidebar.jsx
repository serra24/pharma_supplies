// src/components/Sidebar/Sidebar.jsx
import { Form, Link } from 'react-router-dom';
import slider1 from '../../assets/img/Clip path group.png'
const Sidebar = () => {
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
          <i className="bi bi-house" /> الصفحة الرئيسية
        </a>
        <a href="/AddNew">
          <i className="bi bi-file-earmark-plus" /> إضافة فاكس جديد
        </a>
        <a href="/Show">
          <i className="bi bi-card-list" /> عروض الفاكسات
        </a>
        <a href="/NewPass">
          <i className="bi bi-key" /> تغيير كلمة المرور
        </a>
        <a href="#" className="logout">
          <i className="bi bi-box-arrow-right" /> تسجيل الخروج
        </a>
      </div>
    </div>
   
  </div>
</div>

    </div>
  );
};

export default Sidebar;