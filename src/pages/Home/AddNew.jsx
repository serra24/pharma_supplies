import { useState } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import slider3 from "../../assets/img/Upload icon@2x.png";
import { useLang } from "../../context/LanguageContext";

const AddNew = () => {
  const [activeTab, setActiveTab] = useState("manual");
  const [uploadedFile, setUploadedFile] = useState(null);
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
  return (
    <div>
      <>
        <BreadCrumb title={t.addNewFax} />

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
        
          {activeTab === "manual" ? (
            
            <section className="section-title  col-lg-12 col-md-10 col-sm-6  flex: 1 1 0%; " style={{overflowX:"hidden"}}>
              <table className= "table-container  ">
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
                      <button className="btn btn-outline-danger">
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
                      <button className="btn btn-outline-danger">
                      <i class="bi bi-x-circle-fill"></i> {" "}{t.delete} 
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
                       <i class="bi bi-x-circle-fill"></i>{" "} {t.delete} 
                      </button>
                    </td>
                  </tr>
                  {/* Input Row */}
                  <tr className="input-row">
                    <td>
                      <input type="text" placeholder={t.code}/>
                    </td>
                    <td>
                      <input type="text" placeholder={t.itemName} />
                    </td>
                    <td>
                      <input type="number" placeholder={t.price} />
                    </td>
                    <td>
                      <input type="number" placeholder={t.discount}/>
                    </td>
                    <td>
                      <button className=" add"> <i class="bi bi-plus-circle-fill"></i> {t.add}</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          ) : (
            // Excel Rows
            // excelData.map((item, index) => (
            <div className="move"
              style={{
                flex: 1,
                border: "2px dashed #ccc",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: 250,
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
                style={{ width: "68px", marginBottom: "10px",height:"60px" }}
              />

              <p
                style={{
                  fontWeight: 700,
                  fontSize: "16px",
                }}
              >
                {t.uploadFile}{" "}
                <span style={{ color: "#143C7C", textDecoration: "underline" ,fontWeight:700,fontSize:16}}>
                  Excel
                </span>
              </p>

              <p
                style={{
                  fontSize: "12px",
                  color: "#343A4099",
                  mt: 1,
                }}
              >
               {t.chooseExcelFile}
              </p>

              <form
                action="upload.php"
                method="post"
                encType="multipart/form-data"
              >
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
        
        <div class="end">
          <div>
            <label htmlFor="description">{t.description}</label>
            <br />
            <textarea
              id="description"
              placeholder={t.descriptionPlaceholder}
              defaultValue={""}
            />
          </div>
          <div>
            <label htmlFor="date">{t.todayDate} </label>
            <br />
            <input type="date" id="date" defaultValue="2025-08-04" />
          </div>
        </div>
        <input
          type="submit"
          className="save-btn"
          name="save"
          id="savee"
          value={t.save}
        />
      </>
    </div>
  );
};
export default AddNew;
