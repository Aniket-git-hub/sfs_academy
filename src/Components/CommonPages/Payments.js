import React from "react";
import Navbar from "../utilities/NavbarItems";
import Footer from "../utilities/Footer";
import "../../Assets/css/Payments.css"
import qrcode from "../../Assets/img/06fd5a73-7b26-4b35-a2d4-ef70226651f4.jpg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Payments = () => {

    const handleButtonClick = () => {
        // Show Toast Notification
        toast.info('You will be notified shortly with your confirmation', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000, // 5 seconds
        });

        // Navigate after 10 seconds
        setTimeout(() => {
            window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSc9xoUUOX5pJTzvrv9gBtl90Gw0Y8oz2nj91wZGaZEare6tTQ/viewform?usp=sf_link';
          }, 5000);
        };

    return (
        <div>
            <div className="navbar">
                <Navbar />
            </div>
            <div className="payments-main">
                <div className="upi">
                    <h1>UPI QR Code and UPI-ID</h1>
                    <img src={qrcode} alt="SFS Academy Payment QR Code" />
                    <p className="amount">Amount - ₹ 36,999/-</p>
                </div>
                <div className="bank-transfer">
                    <h1>Net Banking Details</h1>
                    <p>Name - SFS Academy</p>
                    <p>Nature of account - Current</p>
                    <p>IFSC - KKBK0000725</p>
                    <p>Branch - Empire Estate, Chinchwad, Pune</p>
                    <p className="amount">Amount - ₹ 36,999/-</p>
                </div>
            </div>
            <div className="buttoncom">
                <div className="confirm-butt">
                    <p>After completeing the payment press the button below to proceed with confirmation by uploading the payment receipt or screen-shot.</p>
                    <button onClick={handleButtonClick}>Proceed to confirm Admission</button>
                    <ToastContainer />
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default Payments;