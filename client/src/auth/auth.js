export const login = async (username, password, setUser, setError) => {
  try {
    const response = await fetch(
      "https://genesis-tech-support-2159e5e25391.herokuapp.com/user/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // Include credentials
        body: JSON.stringify({ username, password }),
      }
    );

    if (!response.ok) {
      try {
        const result = await response.json();
        setError(result.message); // Set error message from server
      } catch (error) {
        setError("An error occurred during login");
      }
      return false;
    }

    const result = await response.json();
    setUser(result.user);
    localStorage.setItem("user", JSON.stringify(result.user));
    return true;
  } catch (error) {
    setError("An error occurred during login");
    return false;
  }
};

// Function to handle register requests
export const register = async (
  username,
  email,
  password,
  firstName,
  lastName,
  address,
  phone,
  zipCode,
  setUser,
  setError
) => {
  try {
    const response = await fetch(
      "https://genesis-tech-support-2159e5e25391.herokuapp.com/user/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // Include credentials
        body: JSON.stringify({
          username,
          email,
          password,
          firstName,
          lastName,
          address,
          phone,
          zipCode,
        }),
      }
    );

    if (!response.ok) {
      const result = await response.json();
      setError(result.message);
      return false;
    }

    const result = await response.json();
    setUser(result.user);
    localStorage.setItem("user", JSON.stringify(result.user));
    return true;
  } catch (error) {
    setError("Error registering");
    return false;
  }
};

// Function to handle logout requests
export const logout = async (setUser) => {
  try {
    const response = await fetch(
      "https://genesis-tech-support-2159e5e25391.herokuapp.com/user/logout",
      {
        method: "GET",
        credentials: "include", // Include credentials
      }
    );

    if (!response.ok) {
      throw new Error("Error logging out");
    }

    setUser(null);
    localStorage.removeItem("user");
  } catch (error) {
    console.error(error);
  }
};
