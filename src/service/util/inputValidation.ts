type InputValidation = {
  [key: string]: string | number;
};

export const inputValidation = (inputData: InputValidation): boolean => {
  let check = true;

  Object.values(inputData).forEach((input: string | number) => {
    if (!input) {
      check = false;
      return check;
    }
  });

  return check;
};
