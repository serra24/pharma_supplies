import { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { useLang } from "../../context/LanguageContext";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import { resetPreFaxState, savePreFax } from "../../redux/slices/preFaxSlice";
import { StyledTableContainer } from "../../components/AddNew/StyledComponents";
import ItemsTable from "../../components/AddNew/ItemsTable";
import ExcelUpload from "../../components/AddNew/ExcelUpload";
import DescriptionDateFields from "../../components/AddNew/DescriptionDateFields";
import NotificationSnackbar from "../../components/AddNew/NotificationSnackbar";
import { Paper } from "@mui/material";
import ErrorPopup from "../../components/ErrorPopup/ErrorPopup";
import SuccessPopup from "../../components/SuccessPopup/SuccessPopup";
const AddNew = () => {
  const [activeTab, setActiveTab] = useState("manual");
  const [uploadedFile, setUploadedFile] = useState(null);
  const navigate = useNavigate();
  const authData = useSelector((state) => state.auth.authData);
  const { t } = useLang();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    Title: "",
    ReferencNumber: "",
    Date: new Date().toISOString().split("T")[0],
    SupplierId: 0,
    Number: 0,
    Items: [],
  });

  const [manualInput, setManualInput] = useState({
    code: "",
    name: "",
    price: "",
    discount: "",
    exception: false,
  });
  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "error",
  });
  const { loading, error, success } = useSelector((state) => state.preFax);
  // console.log(" loading, error, success", loading, error, success);

  const validateInput = () => {
    const newErrors = {};
    if (!manualInput.code.trim()) newErrors.code = "Code is required";
    if (!manualInput.name.trim()) newErrors.name = "Item name is required";
    if (manualInput.price === "" || parseFloat(manualInput.price) < 0)
      newErrors.price = "Valid price is required";
    if (manualInput.discount === "" || parseFloat(manualInput.discount) < 0)
      newErrors.discount = "Valid discount is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isAddButtonDisabled = () => {
    return (
      !manualInput.code.trim() ||
      !manualInput.name.trim() ||
      manualInput.price === "" ||
      manualInput.discount === "" ||
      parseFloat(manualInput.price) < 0 ||
      parseFloat(manualInput.discount) < 0
    );
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        processExcelData(jsonData);
      };
      reader.readAsArrayBuffer(file);
      setActiveTab("manual");
    }
  };

  const processExcelData = (excelData) => {
    const newItems = excelData.map((row) => ({
      PreFaxId: 0,
      Price: parseFloat(row.Price || row.price || 0) || 0,
      Discount: parseFloat(row.Discount || row.discount || 0) || 0,
      Exception: row.Exception || row.exception || false,
      AlterNativeCode: row.ItemCode || row.code || row.ID || "",
      AlterNativeName: row.ItemName || row.name || row.Item || "",
    }));

    setFormData((prev) => ({ ...prev, Items: [...prev.Items, ...newItems] }));
    setSnackbar({
      open: true,
      message: `Successfully imported ${newItems.length} items from Excel`,
      severity: "success",
    });
  };

  const truncateFileName = (name) =>
    name.length > 20 ? name.slice(0, 20) + "..." : name;

  const handleFormChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleManualInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setManualInput((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleInputBlur = (e) => {
    const { name } = e.target;
    const newErrors = { ...errors };
    if (name === "code" && !manualInput.code.trim())
      newErrors.code = "Code is required";
    else if (name === "name" && !manualInput.name.trim())
      newErrors.name = "Item name is required";
    else if (
      name === "price" &&
      (manualInput.price === "" || parseFloat(manualInput.price) < 0)
    )
      newErrors.price = "Valid price is required";
    else if (
      name === "discount" &&
      (manualInput.discount === "" || parseFloat(manualInput.discount) < 0)
    )
      newErrors.discount = "Valid discount is required";
    else delete newErrors[name];
    setErrors(newErrors);
  };

  const addManualItem = () => {
    if (!validateInput()) {
      setSnackbar({
        open: true,
        message: "Please fix the errors before adding the item",
        severity: "error",
      });
      return;
    }

    const newItem = {
      PreFaxId: 0,
      Price: parseFloat(manualInput.price) || 0,
      Discount: parseFloat(manualInput.discount) || 0,
      Exception: manualInput.exception,
      AlterNativeCode: manualInput.code,
      AlterNativeName: manualInput.name,
    };

    setFormData((prev) => ({ ...prev, Items: [...prev.Items, newItem] }));
    setManualInput({
      code: "",
      name: "",
      price: "",
      discount: "",
      exception: false,
    });
    setErrors({});
  };

  const removeItem = (index) =>
    setFormData((prev) => ({
      ...prev,
      Items: prev.Items.filter((_, i) => i !== index),
    }));

  const handleSave = () => {
    if (formData.Items.length === 0) {
      setSnackbar({
        open: true,
        message: "Please add at least one item before saving",
        severity: "error",
      });
      return;
    }

    const preFaxData = {
      Id: 0,
      Title: formData.description,
      ReferencNumber: formData.ReferencNumber,
      Date: formData.Date,
      SupplierId: formData.SupplierId || 0,
      Number: formData.Number || 0,
      Items: formData.Items.map((item) => ({
        PreFaxId: 0,
        Price: parseFloat(item.Price) || 0,
        Discount: parseFloat(item.Discount) || 0,
        Exception: false,
        AlterNativeCode: item.AlterNativeCode || "",
        AlterNativeName: item.AlterNativeName || "",
      })),
    };

    dispatch(savePreFax(preFaxData));
  };
useEffect(() => {
  if (success) {
    setSnackbar({
      open: true,
      message: "Saved successfully!",
      severity: "success",
    });

    // ✅ Clear the table by resetting Items
    setFormData((prev) => ({
      ...prev,
      Items: [],
    }));

    // ✅ Reset manual input fields if needed
    setManualInput({
      code: "",
      name: "",
      price: "",
      discount: "",
      exception: false,
    });

    // ✅ Optionally clear uploaded file name
    setUploadedFile(null);

    dispatch(resetPreFaxState());
  }

  if (error) {
    setSnackbar({ open: true, message: error, severity: "error" });
    dispatch(resetPreFaxState());
  }
}, [success, error, dispatch]);

  useEffect(() => {
    if (!authData?.Token) navigate("/login");
  }, [authData, navigate]);

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

      {activeTab === "manual" ? (
        <StyledTableContainer component={Paper} sx={{ overflowX: "auto" }}>
          <ItemsTable
            t={t}
            items={formData.Items}
            onRemoveItem={removeItem}
            manualInput={manualInput}
            handleManualInputChange={handleManualInputChange}
            handleInputBlur={handleInputBlur}
            errors={errors}
            addManualItem={addManualItem}
            isAddButtonDisabled={isAddButtonDisabled}
          />
        </StyledTableContainer>
      ) : (
        <ExcelUpload
          t={t}
          onFileUpload={handleFileUpload}
          uploadedFile={uploadedFile}
          truncateFileName={truncateFileName}
        />
      )}

      <DescriptionDateFields
        t={t}
        formData={formData}
        handleFormChange={handleFormChange}
      />

      <button
        onClick={handleSave}
        className="save-btn"
        disabled={formData.Items.length === 0 || loading}
      >
        {" "}
        {loading ? "Saving..." : t.save}
      </button>
      {snackbar.open && snackbar.severity === "error" && (
        <ErrorPopup
          message={snackbar.message}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        />
      )}

      {snackbar.open && snackbar.severity === "success" && (
        <SuccessPopup
          message={snackbar.message}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        />
      )}

      {/* <NotificationSnackbar open={snackbar.open} message={snackbar.message} severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })} /> */}
    </div>
  );
};

export default AddNew;
