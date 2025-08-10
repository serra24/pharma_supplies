import slider2 from "../../assets/img/Rectangle 34625769.png";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
const Home = () => {
  return (
    <div>
      <>
        {/* Main Content */}
        <div className="content " style={{ width: "100 %" }}>
          <BreadCrumb title="الصفحة الرئيسية" />
          {/* Carousel */}
          <div
            id="mainCarousel"
            className="carousel slide mb-4"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner" >
              <div className="carousel-item active">
                <div className="text p-4 text-white rounded ">
                  <h4>بورتال الأدوية - من تطوير شركة إيكاد</h4>
                  <p>
                    تقدم شركة إيكاد من خلال بوابة الأدوية منصة ذكية تدعم شركات
                    الأدوية والموزعين في إدارة عمليات التسعير والمتابعة بكل
                    احترافية وسهولة.
                  </p>
                </div>
              </div>
              <div className="main-img">
                <img src={slider2} alt="" />
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
          <div class="slids">
            <div className="row g-3">
              <div className="col-md-6">
                <div className="box card-box ">
                    <i
                      style={{ fontSize: "35px",position: "relative",top: "10px" }}
 
                      class="fa-solid fa-file-circle-plus"
                    ></i>
                  <div className="adding">
                   
                    <h6 >إضافة فاكس جديد </h6>
                  <p className="text-muted ">إنشاء فاكس جديد</p>
                  <a className=" botton" href="/AddNew">
                    إنشاء فاكس جديد
                  </a>
                  </div>
                    
                  
                  
                </div>
              </div>

              <div className="col-md-6">
                <div className="box card-box ">
                   <i
                     style={{ fontSize: "35px",position: "relative",top: "10px" }}
                      class="fa-solid fa-newspaper "
                    ></i>
                    <div className="adding"><h6>
                    عروض الفاكسات{" "}
                   
                  </h6>
                  <p className="text-muted">استعراض جميع عروض الفاكسات</p>
                    <a className="botton" href="/show">
                    {" "}
                    عروض الفاكسات
                  </a>
                  </div>
                  
                   
                 
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
