import { useState } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import slider3 from "../../assets/img/Upload icon@2x.png";

const AddNew = () => {
  const [activeTab, setActiveTab] = useState("manual");
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };


  const truncateFileName = (name) => {
    return name.length > 20 ? name.slice(0, 20) + "..." : name;
  };
  return (
    <div>
      <>
        <BreadCrumb title="إضافة فاكس جديد" />
       

        <div className="top-bar d-flex justify-content-between align-items-center">
            <button
              className={activeTab === "manual" ? "active" : ""}
              onClick={() => setActiveTab("manual")}
            >
              ادخال يدوي
            </button>
            <button
              className={activeTab === "excel" ? "active" : ""}
              onClick={() => setActiveTab("excel")}
            >
              رفع ملف Excel
            </button>
          </div>
        <div className=" tablee ">
         
          {activeTab === "manual" ? (
           <section className="section-title">
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
          ) : (
            // Excel Rows
            // excelData.map((item, index) => (
          <div
      style={{
        flex: 1,
        border: "2px dashed #ccc",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: 150,
        p: 3,
        textAlign: "center",
        cursor: "pointer",
        backgroundColor: "#fff",
      }}
      onClick={() => document.getElementById("fileInput").click()}
    >
      <img
        src={slider3}
        alt="رفع ملف"
        style={{ width: "40px", marginBottom: "10px" }}
      />

      <p
        sx={{
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        رفع ملف{" "}
        <span style={{ color: "#004080", textDecoration: "underline" }}>
          Excel
        </span>
      </p>

      <p
        sx={{
          fontSize: "12px",
          color: "#666",
          mt: 1,
        }}
      >
        اختر ملف Excel يحتوي على بيانات التصنيف
      </p>

      <form action="upload.php" method="post" encType="multipart/form-data">
        <input
          id="fileInput"
          type="file"
          name="excelFile"
          accept=".xlsx,.xls"
          onChange={handleFileUpload}
          style={{ display: "none" }}
        />
      </form>

      {uploadedFile && (
        <div
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
            width: "100%",
            px: 2,
          }}
        >
         
            <p
              sx={{
                fontSize: "13px",
                color: "#333",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "200px",
              }}
            >
              {truncateFileName(uploadedFile.name)}
            </p>
         

       
        </div>
      )}
    </div>
            // ))
          )}
        </div>
        <div class="end">
          <div>
            <label htmlFor="description">الوصف</label>
            <br />
            <textarea
              id="description"
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
        <input type="submit" className="save-btn" name="save" id="savee" value="حفظ" />
      </>
    </div>
  );
};
export default AddNew;
