import bcrypt from "bcryptjs";

// Hasha ett lösenord innan det sparas i databasen
export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

// Jämför ett inkommande lösenord med det hashade lösenordet i databasen
export const comparePassword = async (
  enteredPassword: string,
  storedPassword: string
): Promise<boolean> => {
  return bcrypt.compare(enteredPassword, storedPassword);
};