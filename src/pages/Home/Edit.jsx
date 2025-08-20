
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { useLang } from "../../context/LanguageContext";
const Edit = () => {
  const { t } = useLang();
  return (
    <div>
      <>
       
        <BreadCrumb title="" />
        <div className="back">
                    <a href="/Show"> <i class="fa-solid fa-right-long"></i> {t.BacktoFaxes} </a>

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
            <input type="text" class="custom-input" placeholder="3718"/>              
          </td>
          <td>
                                <input type="text" class="custom-input" placeholder="ابيتينس أقراص" />              
          </td>
          <td>
                        <input type="text" class="custom-input" placeholder="6.7" />              

          </td>
          <td>
                           <input type="text" class="custom-input" placeholder="38" />              

          </td>
          <td>
            <button className="btn w-100 btn-outline-danger">
                      <i class="bi bi-x-circle-fill"></i> {t.delete}
                    </button>
          </td>
        </tr>
        <tr>
          <td >
            <input type="text" class="custom-input" placeholder="3718" />              
          </td>
          <td>
                                <input type="text" class="custom-input" placeholder="ابيتينس أقراص" />              
          </td>
          <td>
                        <input type="text" class="custom-input" placeholder="6.7" />              

          </td>
          <td>
                           <input type="text" class="custom-input" placeholder="38" />              

          </td>
          <td>
            <button className="btn w-100 btn-outline-danger">
                      <i class="bi bi-x-circle-fill"></i> {t.delete}
                    </button>
          </td>
        </tr>
        <tr>
          <td >
            <input type="text" class="custom-input" placeholder="3718" />              
          </td>
          <td>
                                <input type="text" class="custom-input" placeholder="ابيتينس أقراص" />              
          </td>
          <td>
                        <input type="text" class="custom-input" placeholder="6.7" />              

          </td>
          <td>
                           <input type="text" class="custom-input" placeholder="38" />              

          </td>
          <td>
            <button className="btn w-100 btn-outline-danger">
                      <i class="bi bi-x-circle-fill"></i> {t.delete}
                    </button>
          </td>
        </tr>
        <tr>
          <td >
            <input type="text" class="custom-input" placeholder="3718" />              
          </td>
          <td>
                                <input type="text" class="custom-input" placeholder="ابيتينس أقراص" />              
          </td>
          <td>
                        <input type="text" class="custom-input" placeholder="6.7" />              

          </td>
          <td>
                           <input type="text" class="custom-input" placeholder="38" />              

          </td>
          <td>
            <button className="btn w-100 btn-outline-danger">
                      <i class="bi bi-x-circle-fill"></i> {t.delete}
                    </button>
          </td>
        </tr>
        <tr>
          <td >
            <input type="text" class="custom-input" placeholder="3718" />              
          </td>
          <td>
                                <input type="text" class="custom-input" placeholder="ابيتينس أقراص" />              
          </td>
          <td>
                        <input type="text" class="custom-input" placeholder="6.7" />              

          </td>
          <td>
                           <input type="text" class="custom-input" placeholder="38" />              

          </td>
          <td>
            <button className="btn w-100 btn-outline-danger">
                      <i class="bi bi-x-circle-fill"></i> {t.delete}
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