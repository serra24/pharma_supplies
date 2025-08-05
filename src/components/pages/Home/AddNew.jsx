
const AddNew = () => {
  return (
    <div>
      <>
      
    <div  className="content " style={{ width: "100 %" }}>
    {/* Header */}
    <div className="header d-flex justify-content-between align-items-center">
      <div class="dropdown">
  <button class="btn  dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
اللغة العربية  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">اللغة الانجليزية</a>
    
  </div>
</div>
      <div>
        <strong>إضافة فاكس جديد</strong>
      </div>
      </div>
      </div>
    
<div className="container ">
  <div className="top-bar d-flex justify-content-between align-items-center">
    <button>ادخال يدوي</button>
    <button>رفع ملف Excel</button>
  </div>
  <table>
    <thead>
      <tr>
        <th>الاكواد</th>
        <th>اسم العنصر</th>
        <th>السعر</th>
        <th>خصم</th>
        <th>إجراءات</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>3718</td>
        <td>إبنس أفراص</td>
        <td>6.7</td>
        <td>38</td>
        <td>
          <button className="action-btn delete-btn">❌ حذف</button>
        </td>
      </tr>
      <tr>
        <td>3718</td>
        <td>إبنس أفراص</td>
        <td>6.7</td>
        <td>38</td>
        <td>
          <button className="action-btn delete-btn">❌ حذف</button>
        </td>
      </tr>
      <tr>
        <td>3718</td>
        <td>إبنس أفراص</td>
        <td>6.7</td>
        <td>38</td>
        <td>
          <button className="action-btn delete-btn">❌ حذف</button>
        </td>
      </tr>
      <tr className="input-row">
        <td>
          <input type="text" placeholder="الكود" />
        </td>
        <td>
          <input type="text" placeholder="اسم العنصر" />
        </td>
        <td>
          <input type="number" placeholder="السعر" />
        </td>
        <td>
          <input type="number" placeholder="خصم" />
        </td>
        <td>
          <button className="action-btn add-btn">➕ إضافة</button>
        </td>
      </tr>
    </tbody>
  </table>
  <div className="form-footer">
    <div>
      <label htmlFor="description">الوصف</label>
      <br />
      <textarea
        id="description"
        rows={3}
        placeholder="يمكنك كتابة الوصف ..."
        defaultValue={""}
      />
    </div>
    <div>
      <label htmlFor="date">تاريخ اليوم</label>
      <br />
      <input type="date" id="date" defaultValue="2025-08-04" />
    </div>
  </div>
  <button className="save-btn">حفظ</button>
</div>








     </>
    </div>
  )}
  export default AddNew ;