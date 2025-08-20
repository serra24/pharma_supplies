import { useState } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import slider3 from "../../assets/img/Upload icon@2x.png";
import { useLang } from "../../context/LanguageContext";
import { saveExcel } from "../../redux/slices/saveslice";
import axios from "axios";

const AddNew = () => {
  const [activeTab, setActiveTab] = useState("manual");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [formData, setFormData] = useState({
      publicId :"{ get; set; }" ,
    massag: "",
    data: "",
  });
  const [message, setMessage] = useState("");

  const { t } = useLang();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const truncateFileName = (name) => {
    return name.length > 20 ? name.slice(0, 20) + "..." : name;
  };

  // لما يحصل تغيير في أي input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // حفظ الداتا للـ API
  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/PreFaxes/SavePreFax");
      
      console.log("Response:", response.data);
    } catch (error) {
      console.error(" خطأ:", error);
      
    }
  };

  return (
    <div>
      <BreadCrumb title={t.addNewFax} />

      {/* Tabs */}
      <div className="top-bar d-flex justify-content-between align-items-center col-lg-12 col-md-6 col-sm-3">
        <button
          className={activeTab === "manual" ? "active" : ""}
          onClick={() => setActiveTab("manual")}
        >
          {t.manualEntry}
        </button>
        <button
          className={activeTab === "excel" ? "active" : ""}
          onClick={() => setActiveTab("excel")}
        >
          {t.uploadExcelFile}
        </button>
      </div>

      {/* Manual Tab */}
      {activeTab === "manual" ? (
        <section className="section-title col-lg-12 col-md-10 col-sm-6">
          <table className="table-container">
            <thead>
                <tr>
                  <th>{t.code}</th>
                  <th>{t.itemName} </th>
                  <th>{t.price}</th>
                  <th>{t.discount}</th>
                  <th>{t.actions}</th>
                </tr>
              </thead>
              <tbody>
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
                    <button className="btn w-100 btn-outline-danger">
                      <i class="bi bi-x-circle-fill"></i> {t.delete}
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
                    <button className="btn  w-100   btn-outline-danger">
                      <i class="bi bi-x-circle-fill"></i> {t.delete}
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
                    <button className="btn w-100 btn-outline-danger">
                      <i class="bi bi-x-circle-fill"></i> {t.delete}
                    </button>
                  </td>
                </tr>
                
              </tbody>
            
            <tbody>
              {/* هنا هتضيف صفوف من API لو عندك */}
              <tr className="input-row">
                <td>
                  <input
                    type="text"
                    placeholder={t.code}
                    name="code"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder={t.itemName}
                    name="name"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    placeholder={t.price}
                    name="price"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    placeholder={t.discount}
                    name="discount"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <button className="add w-100">
                    <i className="bi bi-plus-circle-fill"></i> {t.add}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      ) : (
        // Excel Tab
        <div
          className="move"
          style={{
            flex: 1,
            border: "2px dashed #ccc",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: 250,
            cursor: "pointer",
            backgroundColor: "#fff",
          }}
          onClick={() => document.getElementById("fileInput").click()}
        >
          <img src={slider3} alt="رفع ملف" style={{ width: "68px", height: "60px" }} />
          <p>
            {t.uploadFile}{" "}
            <span style={{ color: "#143C7C", textDecoration: "underline" }}>Excel</span>
          </p>
          <input
            id="fileInput"
            type="file"
            name="excelFile"
            accept=".xlsx,.xls"
            onChange={handleFileUpload}
            style={{ display: "none" }}
          />
          {uploadedFile && <p>{truncateFileName(uploadedFile.name)}</p>}
        </div>
      )}

      {/* Description + Date */}
      <div className="end">
        <div>
          <label htmlFor="description">{t.description}</label>
          <textarea
            id="description"
            name="description"
            placeholder={t.descriptionPlaceholder}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="date">{t.todayDate}</label>
          <input
            type="date"
            id="date"
            name="date"
            defaultValue="2025-08-04"
            onChange={handleChange}
          />
        </div>
      </div>

      {/* زرار الحفظ */}
      <button onClick={handleSave} className="save-btn">
        {t.save}
      </button>

      {/* رسالة */}
      {message && <p>{}</p>}
    </div>
  );
};

export default AddNew;
