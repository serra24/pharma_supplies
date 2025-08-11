import slider2 from "../../assets/img/Rectangle 34625769.png";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { useLang } from "../../context/LanguageContext";
const Home = () => {
     const { t } = useLang();
  
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
                  <h4>{t.MedicinesPortalDevelopedbyEkad}</h4>
                  <p>
                    {t.all}
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
                   
                    <h6 >{t.Addanewfax} </h6>
                  <p className="text-muted ">{t.Createanewfax}</p>
                  <a className=" botton w-80" href="/AddNew">
                        {t.Createanewfax}
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
                    <div className="adding">
                     <h6> {t.Faxoffers} {" "}
                   
                  </h6>
                  <p className="text-muted"> {t.Viewallfaxoffers} </p>
                    <a className="botton" href="/show">
                    {" "}
                    {t.Faxoffers} 
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
