
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
const Edit = () => {
  return (
    <div>
      <>
       
        <BreadCrumb title="لرجوع إلي الفاكسات" />
 
 <>
  
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
  {/* Start table section  */}
  <section className="section-title flex: 1 1 0%;">
    <h5>تعديل الأصناف</h5>
    <table className="table-container ">
      <thead>
        <tr>
          <th >الكود</th>
          <th >أسم العنصر</th>
          <th >السعر</th>
          <th >خصم</th>
          <th >اجراءات</th>
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