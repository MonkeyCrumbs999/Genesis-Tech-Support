// Function to handle login requests
export const login = async (username, password, setUser, setError) => {
  try {
    // Create a POST request to your own server's '/users/login' endpoint
    const response = await fetch(
      "https://genesis-tech-support-2159e5e25391.herokuapp.com/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // The data we're sending is in JSON format
        },
        // Include the user's username and password in the body of the request
        body: JSON.stringify({ username, password }),
      }
    );

    // Wait for the server to respond and convert the JSON response into an object
    const result = await response.json();

    // If result.user does not exist, set the error message to result.message
    if (!result.user) {
      setError(result.message);
      return false; // Login unsuccessful
    }

    // Update the current user in the React component state (if login successful)
    setUser(result.user);
    // Store the user's info in the browser's localStorage for persistence
    localStorage.setItem("user", JSON.stringify(result.user));
    return true; // Login successful
  } catch (error) {
    // If any error occurs in the above process, display a generic error message
    setError("Error signing in");
    return false; // Login unsuccessful due to error
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
    // Log the data being sent to the server for debugging (can be removed in production)
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

    // Create a POST request to the '/users/register' endpoint of your server
    const response = await fetch(
      "https://genesis-tech-support-2159e5e25391.herokuapp.com/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // The data we're sending is JSON format
        },
        // Include the user's registration info in the body of the request
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

    // Log the response status for debugging
    console.log("Response status:", response.status);
    const result = await response.json();

    // Log the data received from the server for debugging
    console.log("Response data:", result);

    // Handle unsuccessful registration (when response.ok is false)
    if (!response.ok) {
      setError(result.message); // Display the server's error message
      console.error(result.message); // Log the error message to the console
      return false; // Registration unsuccessful
    }

    // Update the current user in your React component state (if registration successful)
    setUser(result.user);
    // Store the user info in the browser's localStorage for persistence
    localStorage.setItem("user", JSON.stringify(result.user));
    return true; // Registration successful
  } catch (error) {
    // If any errors occur in the above process, display a generic error message
    console.error("Error registering:", error);
    setError("Error registering");
    return false; // Registration unsuccessful due to error
  }
};

// Function to handle logout requests
export const logout = async (setUser) => {
  // Call your API to invalidate the user session here, if needed

  // Update the current user in your React component state to null (indicating no user is logged in)
  setUser(null);
  // Remove the user info from the browser's localStorage
  localStorage.removeItem("user");
};
