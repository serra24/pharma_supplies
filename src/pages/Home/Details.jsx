import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { useLang } from "../../context/LanguageContext";
const Details = () => {
   const { t } = useLang();
  return (
    <div>
      <>
        <>
          <BreadCrumb title="" />
          <div className="back">
                    <a href="/Show"> <i class="fa-solid fa-right-long"></i> {t.BacktoFaxes} </a>

          </div>

  {/* Start information section  */}
  <section className="information">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h4>{t.ModifyFaxNumber3781}</h4>
        </div>
        <div className="col-lg-3 col-md-4 ">
          <h6> {t.Faxdisplaynumber}</h6>
          <h5 className="number-fax">3718</h5>
        </div>
        <div className="col-lg-3 col-md-4 ">
          <h6>{t.Date}:</h6>
          <h5>2-8-2025</h5>
        </div>
        <div className="col-lg-3 col-md-12">
          <h6>  {t.Description} </h6>
          <h5 className="discription-information">{t.Faxdisplayofessentialmedicines}</h5>
        </div>
      </div>
    </div>
  </section>
  {/* End information section  */}

          <div className="section-title m-3">{t.Itemdetails} </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>{t.code}</th>
                  <th>{t.itemName}</th>
                  <th>{t.price}</th>
                  <th>{t.discount}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3718</td>
                  <td>إيبينيس أقراص</td>
                  <td>6.7</td>
                  <td>38</td>
                </tr>
                <tr>
                  <td>3718</td>
                  <td>إيبينيس أقراص</td>
                  <td>6.7</td>
                  <td>38</td>
                </tr>
                <tr>
                  <td>3718</td>
                  <td>إيبينيس أقراص</td>
                  <td>6.7</td>
                  <td>38</td>
                </tr>
                <tr>
                  <td>3718</td>
                  <td>إيبينيس أقراص</td>
                  <td>6.7</td>
                  <td>38</td>
                </tr>

              </tbody>
            </table>
          </div>
        </>
      </>
    </div>
  );
};

export default Details;
