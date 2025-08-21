const DescriptionDateFields = ({ t, formData, handleFormChange }) => {
  return (
    <div className="end">
      <div>
        <label htmlFor="description">{t.description}</label>
        <textarea
          id="description"
          name="description"
          placeholder={t.descriptionPlaceholder}
          onChange={handleFormChange}
        />
      </div>
      <div>
        <label htmlFor="date">{t.todayDate}</label>
        <input
          type="date"
          id="date"
          name="Date"
          value={formData.Date}
          onChange={handleFormChange}
        />
      </div>
    </div>
  );
};

export default DescriptionDateFields;
