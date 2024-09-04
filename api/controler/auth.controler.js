import bcryct from "bcrypt"; //tạo mã hash

export const register = async (req, res) => {
  const { username, password, email } = req.body;
  console.log(req.body);

  //HASH PASSWORD
  const hasedPassword = await bcryct.hash(password, 10);

  //NEW USER
};

export const login = (req, res) => {
  console.log(req.body);
};

export const logout = (req, res) => {
  console.log(req.body);
};
