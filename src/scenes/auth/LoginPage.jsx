// import React, { useState } from "react";
// import axios from "axios";
// const API_BASE_URL = "https://invitationcardbackend.onrender.com";

// function LoginPage({ onLogin, setUser }) {
//   const [view, setView] = useState("login"); // Can be "login", "signup", "forgot", "resetPassword"
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [message, setMessage] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setMessage(null);
//     try {
//       const response = await axios.post(`${API_BASE_URL}/api/users/login`, {
//         email,
//         password,
//       });
//       if (response.data.success) {
//         const userData = response.data.user; // Assuming response.data.user contains user info
//         onLogin(userData);
//       } else {
//         setMessage(response.data.message || "Invalid credentials");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       setMessage(
//         error.response?.data?.message || "An error occurred during login"
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setMessage(null);
//     try {
//       const response = await axios.post(`${API_BASE_URL}/api/users/register`, {
//         name,
//         email,
//         password,
//       });
//       if (response.data.success) {
//         setMessage("Registration successful, please login!");
//         setView("login");
//       } else {
//         setMessage(response.data.message);
//       }
//     } catch (error) {
//       setMessage("An error occurred during registration");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleForgotPassword = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setMessage(null);
//     try {
//       const response = await axios.post(
//         `${API_BASE_URL}/api/users/forgot-password`,
//         {
//           email,
//         }
//       );
//       setMessage(response.data.message);
//       setView("resetPassword"); // Switch to OTP form after sending email
//     } catch (error) {
//       setMessage("An error occurred during password reset");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleResetPassword = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setMessage(null);
//     try {
//       const response = await axios.post(
//         `${API_BASE_URL}/api/users/reset-password`,
//         {
//           email,
//           otp,
//           newPassword,
//         }
//       );
//       if (response.data.success) {
//         setMessage("Password reset successful! Please login.");
//         setView("login");
//       } else {
//         setMessage(response.data.message);
//       }
//     } catch (error) {
//       setMessage("An error occurred during password reset");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const renderForm = () => {
//     if (view === "login") {
//       return (
//         <form onSubmit={handleLogin}>
//           <h2>Login</h2>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit" disabled={isLoading}>
//             {isLoading ? "Logging in..." : "Login"}
//           </button>
//           <p onClick={() => setView("forgot")}>Forgot Password?</p>
//           <p>
//             Don't have an account?{" "}
//             <span onClick={() => setView("signup")}>Sign Up</span>
//           </p>
//         </form>
//       );
//     } else if (view === "signup") {
//       return (
//         <form onSubmit={handleRegister}>
//           <h2>Sign Up</h2>
//           <input
//             type="text"
//             placeholder="Full Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit" disabled={isLoading}>
//             {isLoading ? "Registering..." : "Sign Up"}
//           </button>
//           <p>
//             Already have an account?{" "}
//             <span onClick={() => setView("login")}>Login</span>
//           </p>
//         </form>
//       );
//     } else if (view === "forgot") {
//       return (
//         <form onSubmit={handleForgotPassword}>
//           <h2>Forgot Password</h2>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <button type="submit" disabled={isLoading}>
//             {isLoading ? "Sending..." : "Send Reset Link"}
//           </button>
//           <p>
//             Remember your password?{" "}
//             <span onClick={() => setView("login")}>Login</span>
//           </p>
//         </form>
//       );
//     } else if (view === "resetPassword") {
//       return (
//         <form onSubmit={handleResetPassword}>
//           <h2>Reset Password</h2>
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Enter new password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             required
//           />
//           <button type="submit" disabled={isLoading}>
//             {isLoading ? "Resetting..." : "Reset Password"}
//           </button>
//           <p>
//             Remember your password?{" "}
//             <span onClick={() => setView("login")}>Login</span>
//           </p>
//         </form>
//       );
//     }
//   };

//   return (
//     <div className="auth-page">
//       {renderForm()}
//       {message && <p>{message}</p>}
//     </div>
//   );
// }

// export default LoginPage;

import React, { useState } from "react";
import axios from "axios";
const API_BASE_URL = "https://invitationcardbackend.onrender.com";

function LoginPage({ onLogin, setUser }) {
  const [view, setView] = useState("login"); // Can be "login", "signup", "forgot", "resetPassword"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
useEffect(() => {
    const savedEmail = localStorage.getItem("userEmail");
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);
    try {
      const response = await axios.post(`${API_BASE_URL}/api/users/login`, {
        email,
        password,
      });
      if (response.data.success) {
        const userData = response.data.user; // Assuming response.data.user contains user info
        localStorage.setItem("userEmail", userData.email);
        onLogin(userData);
      } else {
        setMessage(response.data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage(
        error.response?.data?.message || "An error occurred during login"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);
    try {
      const response = await axios.post(`${API_BASE_URL}/api/users/register`, {
        name,
        email,
        password,
      });
      if (response.data.success) {
        setMessage("Registration successful, please login!");
        setView("login");
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage("An error occurred during registration");
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/users/forgot-password`,
        {
          email,
        }
      );
      setMessage(response.data.message);
      setView("resetPassword"); // Switch to OTP form after sending email
    } catch (error) {
      setMessage("An error occurred during password reset");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/users/reset-password`,
        {
          email,
          otp,
          newPassword,
        }
      );
      if (response.data.success) {
        setMessage("Password reset successful! Please login.");
        setView("login");
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage("An error occurred during password reset");
    } finally {
      setIsLoading(false);
    }
  };

  const renderForm = () => {
    if (view === "login") {
      return (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
          <p onClick={() => setView("forgot")}>Forgot Password?</p>
          <p>
            Don't have an account?{" "}
            <span onClick={() => setView("signup")}>Sign Up</span>
          </p>
        </form>
      );
    } else if (view === "signup") {
      return (
        <form onSubmit={handleRegister}>
          <h2>Sign Up</h2>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Registering..." : "Sign Up"}
          </button>
          <p>
            Already have an account?{" "}
            <span onClick={() => setView("login")}>Login</span>
          </p>
        </form>
      );
    } else if (view === "forgot") {
      return (
        <form onSubmit={handleForgotPassword}>
          <h2>Forgot Password</h2>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Reset Link"}
          </button>
          <p>
            Remember your password?{" "}
            <span onClick={() => setView("login")}>Login</span>
          </p>
        </form>
      );
    } else if (view === "resetPassword") {
      return (
        <form onSubmit={handleResetPassword}>
          <h2>Reset Password</h2>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Resetting..." : "Reset Password"}
          </button>
          <p>
            Remember your password?{" "}
            <span onClick={() => setView("login")}>Login</span>
          </p>
        </form>
      );
    }
  };

  return (
    <div className="relative h-screen bg-gray-50 overflow-hidden">
      {/* Animated Blob 1 */}
      <div className="absolute top-20 left-2 w-[300px] h-[500px] bg-[#D1208A80] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob"></div>

      {/* Animated Blob 2 */}
      <div className="absolute top-20 right-32 w-[500px] h-[500px] bg-[#FFB20080] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob animation-delay-2000"></div>

      {/* Animated Blob 3 - Hidden on smaller screens */}
      <div className="hidden xl:block absolute bottom-10 left-32 w-[500px] h-[500px] bg-[#FFB20080] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob animation-delay-4000"></div>

      {/* Animated Blob 4 */}
      <div className="absolute bottom-10 right-52 w-[500px] h-[500px] bg-[#CAEEF580] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob animation-delay-4000"></div>

      {/* Content Section */}
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="max-w-md w-full mx-auto bg-white p-8 rounded-lg shadow-lg">
          {/* Header Section with Image */}
          <div className="text-center mb-8">
            <img
              src="https://www.indtechmark.com/images/logo.svg"
              alt="INDTECHMARK"
              className="mx-auto w-48"
            />
          </div>

          {/* Render the appropriate form */}
          {renderForm()}

          {/* Message */}
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
