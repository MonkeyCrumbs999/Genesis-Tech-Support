const BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://genesis-tech-support-2159e5e25391.herokuapp.com";

export const login = async (username, password, setUser, setError) => {
  try {
    const response = await fetch(`${BASE_URL}/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // Include credentials
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      if (response.status === 401) {
        setError("Invalid username or password");
      } else {
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
  city,
  state,
  zipCode,
  phone,
  setUser,
  setError
) => {
  try {
    const response = await fetch(`${BASE_URL}/user/register`, {
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
        city,
        state,
        zipCode,
        phone,
      }),
    });

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
export const logout = async () => {
  try {
    const response = await fetch(`${BASE_URL}/user/logout`, {
      method: "GET",
      credentials: "include", // Include credentials
    });

    if (!response.ok) {
      throw new Error("Error logging out");
    }

    localStorage.removeItem("user");
    sessionStorage.clear(); // Clear the session storage
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
