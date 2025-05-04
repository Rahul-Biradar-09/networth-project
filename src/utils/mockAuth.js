export const mockLogin = (email, password) => {
    if (email === "admin@shop.com" && password === "123456") {
      return { email, name: "Admin" };
    }
    return null;
  };
  