import slider2 from '../../../assets/img/Rectangle 34625769.png'
const Home = () => {
  return (
    <div>
      <>
  {/* Main Content */}
  <div  className="content " style={{ width: "100 %" }}>
    {/* Header */}
    <div className="header d-flex justify-content-between align-items-center">
      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
اللغة العربية  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">اللغة الانجليزية</a>
    
  </div>
</div>
      <div>
        <strong>الصفحة الرئيسية</strong>
      </div>
    </div>
    {/* Carousel */}
    <div
      id="mainCarousel"
      className="carousel slide mb-4"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="text p-4 text-white rounded">
            <h4>بورتال الأدوية - من تطوير شركة إكاد</h4>
            <p>
              تقدم شركة إكاد من خلال بوابة الأدوية منصة ذكية تدعم شركات الأدوية
              والموزعين في إدارة عمليات التسعير والمتابعة بكل احترافية وسهولة.
            </p>
          </div>
        </div>
        <div className='main-img'>
          <img  src={slider2} alt="" />
        </div>
        
       
      </div>
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
        />
      </div>
    </div>
    {/* Action Cards */}
    <div class="slids" >
      <div className="row g-3">
      <div className="col-md-6">
        <div className="card-box text-end">

          <h6>عروض الفاكسات <i style={{fontSize :"25px"}} class="fa-solid fa-newspaper "></i></h6>
          <p className="text-muted">استعراض جميع عروض الفاكسات</p>
          <a className="botton" href="#"> عروض الفاكسات
          </a>
           
        </div>
      </div>
      <div className="col-md-6">
        <div className="card-box text-end">
          <h6>إضافة فاكس جديد<i style={{fontSize :"25px"}} class="fa-solid fa-file-circle-plus"></i></h6>
          <p className="text-muted">إنشاء فاكس جديد</p>
          <a className="botton" href="#">
            إنشاء فاكس جديد
          </a>
        </div>
      </div>
    </div>
    </div>
    
  </div>
</>

    </div>
  );
};

export default Home;