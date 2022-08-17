interface LoginData {
  email: string;
  password: string;
}

interface SignupData extends LoginData {
  confirmPassword: string;
}

const validateEmail = (email: string) => {
  const regEmail =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  return regEmail.test(email);
};

const hasLength = (value: string, min: number) => {
  return value.length >= min;
};

export const validatePassword = (password: string, confirmPassword: string) => {
  return password === confirmPassword ? true : false;
};

export const loginValidator = ({ email, password }: LoginData) => {
  return {
    isValidEmail: validateEmail(email),
    isValidPassword: hasLength(password, 8),
  };
};

export const signupValidator = ({
  email,
  password,
  confirmPassword,
}: SignupData) => {
  return {
    isValidEmail: validateEmail(email),
    isValidPassword: hasLength(password, 8),
    isValidConfirmPassword: hasLength(confirmPassword, 8),
    isSamePassword: validatePassword(password, confirmPassword),
  };
};
