export const login = async (username, password, setUser, setError) => {
  try {
    const response = await fetch("/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const result = await response.json();

    if (!response.ok) {
      setError(result.message);
      return false;
    }

    setUser(result.user);
    localStorage.setItem("user", JSON.stringify(result.user)); // Store the user info in localStorage
    return true;
  } catch (error) {
    setError("Error signing in");
    return false;
  }
};

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
    }); // Log the data being sent

    const response = await fetch("/users/register", {
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
    });

    console.log("Response status:", response.status); // Log the response status

    const result = await response.json();

    console.log("Response data:", result); // Log the response data

    if (!response.ok) {
      setError(result.message);
      console.error(result.message); // log the error message
      return false;
    }

    setUser(result.user);
    localStorage.setItem("user", JSON.stringify(result.user)); // Store the user info in localStorage
    return true;
  } catch (error) {
    console.error("Error registering:", error); // This should log any error messages
    setError("Error registering");
    return false;
  }
};

export const logout = async (setUser) => {
  // Call your API to invalidate the user session here, if needed
  setUser(null);
  localStorage.removeItem("user"); // Remove the user info from localStorage
};
