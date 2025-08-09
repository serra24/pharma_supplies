import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
const Details = () => {
  return (
    <div>
      <>
        <>
          <BreadCrumb title="" />
          <div className="back">
                    <a href="/Show">الرجوع الي الفكسات</a>

          </div>

  {/* Start information section  */}
  <section className="information">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h4>تعديل الفاكس رقم 3718</h4>
        </div>
        <div className="col-lg-3 col-md-4 ">
          <h6>رقم عرض الفاكس:</h6>
          <h5 className="number-fax">3718</h5>
        </div>
        <div className="col-lg-3 col-md-4 ">
          <h6>التاريخ:</h6>
          <h5>2-8-2025</h5>
        </div>
        <div className="col-lg-3 col-md-12">
          <h6>الوصف:</h6>
          <h5 className="discription-information">عرض فاكس للادويه الأساسيه</h5>
        </div>
      </div>
    </div>
  </section>
  {/* End information section  */}

          <div className="section-title">تفاصيل الأصناف</div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>الكود</th>
                  <th>اسم العنصر</th>
                  <th>السعر</th>
                  <th>خصم</th>
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
