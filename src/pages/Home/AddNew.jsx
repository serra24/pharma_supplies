import { useState } from "react";

const AddNew = () => {
   const [activeTab, setActiveTab] = useState("manual");
  const excelData = [
    { code: "4000", name: "Excel دواء", price: "7.5", discount: "20" },
    { code: "4001", name: "Excel دواء 2", price: "9.2", discount: "10" },
  ];
  return (
    <div>
      <>
        <div className="content " style={{ width: "100 %" }}>
          {/* Header */}
          <div className="header d-flex justify-content-between align-items-center">
            <div class="dropdown">
              <button
                class="btn  dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                اللغة العربية{" "}
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">
                  اللغة الانجليزية
                </a>
              </div>
            </div>
            <div>
              <strong>إضافة فاكس جديد</strong>
            </div>
          </div>
        </div>

        <div className="container ">
          <div className="top-bar d-flex justify-content-between align-items-center">
            <button  className={activeTab === "manual" ? "active" : ""}
            onClick={() => setActiveTab("manual")}>ادخال يدوي</button>
            <button  className={activeTab === "excel" ? "active" : ""}
            onClick={() => setActiveTab("excel")}>رفع ملف Excel</button>
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
          <tbody className="text-center">
            {activeTab === "manual" ? (
              <>
                {/* Manual Rows */}
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
                {/* Input Row */}
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
              </>
            ) : (
              // Excel Rows
              excelData.map((item, index) => (
                <tr key={index}>
                  <td>{item.code}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.discount}</td>
                  <td>
                    <button className="action-btn delete-btn">❌ حذف</button>
                  </td>
                </tr>
              ))
            )}
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
  );
};
export default AddNew;
