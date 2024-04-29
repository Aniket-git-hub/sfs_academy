import { React, useState } from "react";
import FormFields from "../Common/FormFields";
import "../../Assets/css/CounsellingForm.css";
import Navbar from "../utilities/NavbarItems";
import Footer from "../utilities/Footer";
import "../../Assets/css/LoginForm.css";
import { useNavigate } from 'react-router-dom';
import instance from "../../Config/axiosconfig.js";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Password from "../Common/Password";

const LoginForm = () => {

    const [label, setLabel] = useState(''); // Set your default label here
    const [error, setErrors] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    // const handleGotoRegister = () => {
    //     /DeviceMotionEventnother page
    //     navigate('/login');
    // }; 

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await instance.post("auth/login", { email, password });
            console.log(response);
            toast.success('Login successful!', { position: "top-right" });
            // Add any further logic you need after successful login
            setTimeout(() => {
                navigate('/course');
            }, 3000); // 3000 milliseconds (3 seconds)
        } catch (e) {
            console.log(e);
            toast.error('Invalid email or password. Please try again.', { position: "top-right" });
        }
    };

    return (
        <>
            <div>
                <div className="navbar">
                    <Navbar />
                </div>
                <div>
                    {/* ... (your other components) */}
                    <ToastContainer />
                </div>
                <div className="py-6 bg-surface-secondary ">
                    <div className="container-fluid justify-content-center d-flex">
                        {/* Card show */}
                        <div className="col-xl-6 col-lg-6 login-main">
                            <div className="card shadow mb-4" >

                                {/* Card Body */}
                                <div className="card-body logincard">
                                    <div className="justify-content-center d-flex">
                                        <div className='card-title'>
                                            <h3>Login to your Account</h3>
                                        </div>
                                    </div>
                                    <form>
                                        <div id="pnlCompanyDetails">
                                            <div className="row d-flex justify-content-center">
                                                <div className="col-lg-6">

                                                    <FormFields
                                                        fieldName="TextInput"
                                                        id="email"
                                                        name="email"
                                                        label={label ? label : "E-Mail"}
                                                        requiredInd={true}
                                                        value={email}
                                                        placeholder={label ? label : "Enter your Mail-ID"}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        showErrorMsg={error && !email.trim() ? "Required!" : ""}
                                                    />
                                                    <Password
                                                        id="password"
                                                        label="Password"
                                                        requiredInd={true}
                                                        placeholder="Enter your password"
                                                        onChange={(value) => setPassword(value)}
                                                    // Add other necessary props
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="login-submit">
                                            <button
                                                className="button-submit"
                                                onClick={handleLoginSubmit}>Login</button>
                                        </div>
                                        <div className="existing-user">
                                            <a href="/register">Are you a new user? Click here</a>

                                        </div>
                                        <div className="existing-user">
                                            <a href="/forgetpassword">Forgot Password? Click here to Reset.</a>

                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div >
                    </div >
                </div>
                <div className="rl-footer">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default LoginForm;