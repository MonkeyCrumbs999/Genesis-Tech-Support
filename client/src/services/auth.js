export const login = async (username, password, setUser, setError) => {
  try {
    const response = await fetch(
      "https://genesis-tech-support-2159e5e25391.herokuapp.com/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }
    );

    const result = await response.json();

    if (result) {
      if (typeof setError === "function") {
        if (!result.user) {
          setError(result.message);
        }
      }

      if (typeof setUser === "function") {
        setUser(result.user);
      }
      localStorage.setItem("user", JSON.stringify(result.user));
    }
    return true;
  } catch (error) {
    if (typeof setError === "function") {
      setError("Error signing in");
    }
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
    console.log({
      username,
      email,
      password,
      firstName,
      lastName,
      address,
      phone,
      zipCode,
    });

    const response = await fetch(
      "https://genesis-tech-support-2159e5e25391.herokuapp.com/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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

    console.log("Response status:", response.status);
    const result = await response.json();

    console.log("Response data:", result);

    if (!response.ok) {
      setError(result.message);
      console.error(result.message);
      return false;
    }

    setUser(result.user);
    localStorage.setItem("user", JSON.stringify(result.user));
    return true;
  } catch (error) {
    console.error("Error registering:", error);
    setError("Error registering");
    return false;
  }
};

// Function to handle logout requests
export const logout = (setUser) => {
  setUser(null);
  localStorage.removeItem("user");
};
