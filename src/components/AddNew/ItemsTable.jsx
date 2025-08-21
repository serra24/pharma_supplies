import { Table, TableBody, TableCell, TableRow, Box, InputAdornment } from "@mui/material";
import { Error as ErrorIcon } from "@mui/icons-material";
import { InputTableRow, CustomTextField, StyledTableHead, StyledTableRow } from "./StyledComponents";

const ItemsTable = ({
  t,
  items,
  onRemoveItem,
  manualInput,
  handleManualInputChange,
  handleInputBlur,
  errors,
  addManualItem,
  isAddButtonDisabled
}) => {
  return (
    <Table sx={{ minWidth: 650 }}>
      <StyledTableHead>
        <TableRow>
          <TableCell>{t.code}</TableCell>
          <TableCell>{t.itemName}</TableCell>
          <TableCell>{t.price}</TableCell>
          <TableCell>{t.discount}</TableCell>
          <TableCell>{t.actions}</TableCell>
        </TableRow>
      </StyledTableHead>
      <TableBody>
        {items.map((item, index) => (
          <StyledTableRow key={index}>
            <TableCell><Box component="h6">{item.AlterNativeCode || "N/A"}</Box></TableCell>
            <TableCell><Box component="h6">{item.AlterNativeName || "N/A"}</Box></TableCell>
            <TableCell><Box component="h6">{item.Price}</Box></TableCell>
            <TableCell><Box component="h6">{item.Discount}</Box></TableCell>
            <TableCell>
              <button className="btn w-100 btn-outline-danger d-flex gap-2" onClick={() => onRemoveItem(index)}>
                <i className="bi bi-x-circle-fill"></i> {t.delete}
              </button>
            </TableCell>
          </StyledTableRow>
        ))}

        {/* Manual input row */}
        <InputTableRow>
          {["code", "name", "price", "discount"].map((field) => (
            <TableCell key={field}>
              <CustomTextField
                size="small"
                placeholder={t[field]}
                name={field}
                type={field === "price" || field === "discount" ? "number" : "text"}
                value={manualInput[field]}
                onChange={handleManualInputChange}
                onBlur={handleInputBlur}
                error={!!errors[field]}
                helperText={errors[field]}
                fullWidth
                inputProps={field === "price" || field === "discount" ? { min: 0 } : {}}
                InputProps={{
                  endAdornment: errors[field] && (
                    <InputAdornment position="end">
                      <ErrorIcon color="error" fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            </TableCell>
          ))}
          <TableCell>
            <button className="add w-100 gap-2 d-flex" onClick={addManualItem} disabled={isAddButtonDisabled()}>
              <i className="bi bi-plus-circle-fill"></i> {t.add}
            </button>
          </TableCell>
        </InputTableRow>
      </TableBody>
    </Table>
  );
};

export default ItemsTable;
