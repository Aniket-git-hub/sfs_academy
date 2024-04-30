import { React, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../Assets/css/CounsellingForm.css";
import "../../Assets/css/LoginForm.css";
import instance from "../../Config/axiosconfig.js";
import FormFields from "../Common/FormFields";
import Footer from "../utilities/Footer";
import Navbar from "../utilities/NavbarItems";

const LoginForNotes = () => {

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
            const response = await instance.post("auth/forgotpassword", { email });
            console.log(response);
            toast.success('Login successful! You now have access to the Resources', { position: "top-right" });
            // Add any further logic you need after successful login
            setTimeout(() => {
                navigate('/otp');
            });  
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
                                            <h4>Enter Registred Mail-ID to get password and Reset OTP</h4>
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
                                                </div>
                                            </div>
                                        </div>
                                        <div className="login-submit">
                                            <button
                                                className="button-submit"
                                                onClick={handleLoginSubmit}>Get OTP</button>
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

export default LoginForNotes;