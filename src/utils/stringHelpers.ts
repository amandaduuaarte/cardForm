export const CardNumberFormat = (value: string): string => {
  const inputWithoutHyphens = value.replace(/-/g, '');
  const formattedNumber = inputWithoutHyphens.replace(/\d{4}(?=\d)/g, '$&-');
  return formattedNumber;
};

export const DateFormat = (value: string): string => {
  const inputWithoutSlashes = value.replace(/\//g, '');
  const formattedNumber = inputWithoutSlashes.replace(/\d{2}(?=\d)/g, '$&/');
  return formattedNumber;
};
