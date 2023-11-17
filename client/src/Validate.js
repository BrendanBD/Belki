export const isFormValid = (formData) => {
    // Check if all form fields have values
    for (const key in formData) {
      if (!formData[key]) {
        return false;
      }
    }
    return true;
  };
  