
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { useLang } from "../../context/LanguageContext";
const Edit = () => {
  const { t } = useLang();
  return (
    <div>
      <>
       
        <BreadCrumb title="" />
        <div className="back">
                    <a href="/Show">{t.BacktoFaxes} <i class="fa-solid fa-caret-right"></i></a>

          </div>
 
 <>
  
  {/* Start information section  */}
  <section className="information">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h4>{t.ModifyFaxNumber3781}</h4>
        </div>
        <div className="col-lg-3 col-md-4 ">
          <h6>{t.Faxdisplaynumber}</h6>
          <h5 className="number-fax">3718</h5>
        </div>
        <div className="col-lg-3 col-md-4 ">
          <h6>{t.Date}</h6>
          <h5>2-8-2025</h5>
        </div>
        <div className="col-lg-3 col-md-12">
          <h6>{t.Description}</h6>
          <h5 className="discription-information">   {t.Faxdisplayofessentialmedicines}</h5>
        </div>
      </div>
    </div>
  </section>
  {/* End information section  */}
  {/* Start table section  */}
  <section className="section-title flex: 1 1 0%;">
    <h5 className="mt-3 mb-3">{t.Itemdetails} </h5>
    <table className="table-container ">
      <thead>
        <tr>
          <th >{t.code}</th>
          <th > {t.itemName}</th>
          <th >{t.price}</th>
          <th >{t.discount}</th>
          <th >{t.procedures}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td >
            <h6>3781</h6>
          </td>
          <td>
            <h6>ابيتينس أقراص</h6>
          </td>
          <td>
            <h6>6.7</h6>
          </td>
          <td>
            <h6>38</h6>
          </td>
          <td>
            <button className="btn btn-outline-danger">
              حذف
              <i className="fa-solid fa-xmark" />{" "}
            </button>
          </td>
        </tr>
        <tr>
          <td >
            <h6>3781</h6>
          </td>
          <td>
            <h6>ابيتينس أقراص</h6>
          </td>
          <td>
            <h6>6.7</h6>
          </td>
          <td>
            <h6>38</h6>
          </td>
          <td>
            <button className="btn btn-outline-danger">
              حذف <i className="fa-solid fa-xmark" />
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <h6>3781</h6>
          </td>

          <td>
            <h6>ابيتينس أقراص</h6>
          </td>
          <td>
            <h6>6.7</h6>
          </td>
          <td>
            <h6>38</h6>
          </td>
          <td>
            <button className="btn btn-outline-danger">
              حذف <i className="fa-solid fa-xmark" />
            </button>
          </td>
        </tr>
        <tr>
          <td >
            <h6>3781</h6>
          </td>
          <td>
            <h6>ابيتينس أقراص</h6>
          </td>
          <td>
            <h6>6.7</h6>
          </td>
          <td>
            <h6>38</h6>
          </td>
          <td>
            <button className="btn btn-outline-danger">
              حذف
              <i className="fa-solid fa-xmark" />
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <h6>3781</h6>
          </td>
          <td>
            <h6>ابيتينس أقراص</h6>
          </td>
          <td>
            <h6>6.7</h6>
          </td>
          <td>
            <h6>38</h6>
          </td>
          <td>
            <button className="btn btn-outline-danger">
              حذف <i className="fa-solid fa-xmark" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
  {/* End table section  */}
</>

 
 
   </>
    </div>
  );
};

export default Edit;