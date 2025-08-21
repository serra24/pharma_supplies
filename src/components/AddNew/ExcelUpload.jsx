import slider3 from "../../assets/img/Upload icon@2x.png";

const ExcelUpload = ({ t, onFileUpload, uploadedFile, truncateFileName }) => {
  return (
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
        onChange={onFileUpload}
        style={{ display: "none" }}
      />
      {uploadedFile && <p>{truncateFileName(uploadedFile.name)}</p>}
    </div>
  );
};

export default ExcelUpload;
