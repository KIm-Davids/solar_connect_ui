// import React, { useState } from 'react';
// import axios from 'axios';  // Import axios
// import { toast, ToastContainer } from 'react-toastify'; // Correct import for ToastContainer
// import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify
// import './TechnicianOnBoarding.css';
//
// import user_icon from '../../Assets/person.png';
// import email_icon from '../../Assets/email.png';
// import password_icon from '../../Assets/password.png';
//
// // Function to generate a unique ID
// const generateUniqueId = () => {
//     return 'id_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
// };
//
// const TechnicianOnBoarding = () => {
//     const [action, setAction] = useState("Login");
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [email, setEmail] = useState("");
//     const [location, setLocation] = useState("");
//     const [password, setPassword] = useState("");
//
//     // Handle sign up form submission
//     const handleSignUp = async () => {
//         const id = generateUniqueId();  // Generate a unique ID for the user
//
//         try {
//             const response = await axios.post('http://localhost:8080/register-technician', {
//                 id,
//                 firstName,
//                 lastName,
//                 phoneNumber,
//                 email,
//                 location,
//                 password
//             });
//
//             // Store user details (excluding password) in localStorage
//             localStorage.setItem('SignUpUserDetails', JSON.stringify({
//                 id,
//                 firstName,
//                 lastName,
//                 phoneNumber,
//                 email,
//                 location
//             }));
//
//             console.log("Sign Up Success:", response.data);
//             toast.success("Sign Up Successful!"); // Show success toast
//         } catch (error) {
//             console.error("Sign Up Error:", error.response ? error.response.data : error.message);
//             toast.error("Sign Up Failed! Please try again."); // Show error toast
//         }
//     };
//
//     // Handle login form submission
//     const handleLogin = async () => {
//         const id = generateUniqueId();  // Generate a unique ID for the login attempt (optional)
//
//         try {
//             const response = await axios.patch('http://localhost:8080/login-technician', {
//                 id,  // You can pass the ID for logging purposes if required
//                 email,
//                 password
//             });
//
//             // Store login details (you can store only email here or any other required details)
//             localStorage.setItem('LoginUserDetails', JSON.stringify({
//                 email
//             }));
//
//             console.log("Login Success:", response.data);
//             toast.success("Login Successful!"); // Show success toast
//         } catch (error) {
//             console.error("Login Error:", error.response ? error.response.data : error.message);
//             toast.error("Login Failed! Please check your credentials."); // Show error toast
//         }
//     };
//
//     return (
//         <div className='container'>
//             <div className='header'>
//                 <div className='text'>{action}</div>
//                 <div className='underline'></div>
//             </div>
//             <div className="inputs">
//                 {action === "Login" ? (
//                     <div></div>
//                 ) : (
//                     <>
//                         {/* First Name Input */}
//                         <div className="input">
//                             <img src={user_icon} alt='' />
//                             <input
//                                 type='text'
//                                 placeholder="First Name"
//                                 value={firstName}
//                                 onChange={(e) => setFirstName(e.target.value)}
//                             />
//                         </div>
//
//                         {/* Last Name Input */}
//                         <div className="input">
//                             <img src={user_icon} alt='' />
//                             <input
//                                 type='text'
//                                 placeholder="Last Name"
//                                 value={lastName}
//                                 onChange={(e) => setLastName(e.target.value)}
//                             />
//                         </div>
//
//                         {/* Phone Number Input */}
//                         <div className="input">
//                             <img src={user_icon} alt='' />
//                             <input
//                                 type='text'
//                                 placeholder="Phone Number"
//                                 value={phoneNumber}
//                                 onChange={(e) => setPhoneNumber(e.target.value)}
//                             />
//                         </div>
//
//                         {/* Location Input */}
//                         <div className="input">
//                             <img src={user_icon} alt='' />
//                             <input
//                                 type='text'
//                                 placeholder="Location"
//                                 value={location}
//                                 onChange={(e) => setLocation(e.target.value)}
//                             />
//                         </div>
//                     </>
//                 )}
//
//                 {/* Email Input */}
//                 <div className="input">
//                     <img src={email_icon} alt='' />
//                     <input
//                         type='email'
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                 </div>
//
//                 {/* Password Input */}
//                 <div className="input">
//                     <img src={password_icon} alt='' />
//                     <input
//                         type='password'
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>
//             </div>
//
//             {action === "Sign Up" ? <div></div> :
//                 <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
//
//             {/* Toggle Buttons for Sign Up / Login */}
//             <div className="submit-container">
//                 <div
//                     className={action === "Login" ? "submit gray" : "submit"}
//                     onClick={() => setAction("Sign Up")}  // Switch to Sign Up form
//                 >
//                     Sign Up
//                 </div>
//                 <div
//                     className={action === "Sign Up" ? "submit gray" : "submit"}
//                     onClick={() => setAction("Login")}  // Switch to Login form
//                 >
//                     Login
//                 </div>
//             </div>
//
//             {/* Submit Button for Sign Up / Login */}
//             <div className="submit-container">
//                 <div
//                     className="submit"
//                     onClick={() => {
//                         if (action === "Sign Up") {
//                             handleSignUp();  // Call handleSignUp if action is "Sign Up"
//                         } else {
//                             handleLogin();  // Call handleLogin if action is "Login"
//                         }
//                     }}
//                 >
//                     Submit
//                 </div>
//             </div>
//
//             {/* ToastContainer to render the toasts */}
//             <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
//         </div>
//     );
// };
//
// export default TechnicianOnBoarding;
