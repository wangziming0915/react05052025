export const users = [
  {
    name: "Leanne Graham",
    username: "Bret",
    email: "leanne.graham@email.com",
    password: "1drowssapencoded",
  },
  {
    name: "Ervin Howell",
    username: "Antonette",
    email: "ervin.howell@email.com",
    password: "2drowssapencoded",
  },
];

export const encodePassword = (password) => {
  // encode the password by reversing it and add "encoded" at the end
  // for example, "password1" => "1drowssapencoded"
  return password.split("").reverse().join("") + "encoded";
};

export const decodePassword = (encrypted) => {
  // decode the password
  // for example, "1drowssapencoded" => "password1"
  if (!encrypted.endsWith("encoded")) throw new Error("Invalid encrypted password");
  const reversed = encrypted.slice(0, -7);
  return reversed.split("").reverse().join("");
};

export const getUserByEmail = async (email) => {
  // fetch a user by email
  const user = users.find(u => u.email === email);
  if (!user) throw new Error("User not found");
  return user;
};

export const verifyPassword = async (password, encrypted) => {
  // verify the password
  const decoded = decodePassword(encrypted);
  if (decoded !== password) throw new Error("Invalid password");
  return true;
};

export const login = async (email, password) => {
  try {
    const user = await getUserByEmail(email);
    await verifyPassword(password, user.password);
    // Return user info and a token
    const { password: _, ...userInfo } = user;
    return { ...userInfo, token: "token" };
  } catch (err) {
    return err.message;
  }
};
