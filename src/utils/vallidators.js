export const required = (value) => {
   return value ? undefined : "Field is required"
};

export const maxLength = (max) => (value) =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;

