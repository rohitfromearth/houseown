export const loginService = async (email, password) => {
  return { success: true, user: { email } };
};

export const registerService = async (email) => {
  return { success: true, otpSent: true };
};
