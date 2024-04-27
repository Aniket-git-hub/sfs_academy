import React, { useState } from 'react';
import NavbarItems from "../utilities/NavbarItems";
import Footer from "../utilities/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Assets/css/Admin.css";
import logo from "../../Assets/img/SFS Academy Logo (14).png";
import instance from "../../Config/axiosconfig.js";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

const Admin = () => {
    const [contentType, setContentType] = useState('videos');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [file, setFile] = useState(null);
    const [caption, setCaption] = useState('');
    const [categoryId, setCategoryId] = useState('');

    const handleContentTypeChange = (event) => {
        setContentType(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here
    };

    const handleUploadDoc = async (event) => {
        
        console.log("click");
        setSelectedCategory(event.target.value);
        setCategoryId(event.target.value);

        event.preventDefault();
        const formData = new FormData();

        formData.append('caption', caption);
        formData.append('file', file);
        formData.append('categoryId', categoryId);
        try {
            const response = await instance.post("/document", formData);
            console.log(response);
            toast.success('Doc Upload Success', { position: "top-right" });
        } catch (e) {
            console.log(e);
            toast.error('fail', { position: "top-right" });
        }
    };

    return (
        <div>
            <div className="navbar-admin">
                <img src={logo} width={200} />
                <h1>Admin Panel</h1>
            </div>
            <div className="upload-main">
                <div className="col-lg-12 upload-content">
                    <h1>Upload your content here</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="radio-container">
                            <label>
                                <input
                                    type="radio"
                                    value="videos"
                                    checked={contentType === 'videos'}
                                    onChange={handleContentTypeChange}
                                />
                                Videos
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="notes"
                                    checked={contentType === 'notes'}
                                    onChange={handleContentTypeChange}
                                />
                                Notes
                            </label>
                        </div>
                        {contentType === 'videos' && (
                            <>
                                <div>
                                    <label>
                                        Select Category:
                                        <select value={selectedCategory}>
                                            <option value="">Select Video Category</option>
                                            <option value="recordedLectures">Recorded Lectures</option>
                                            <option value="demoLectures">Demo Lectures</option>
                                            <option value="guestLectures">Guest Lectures</option>
                                        </select>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        Thumbnail Image:
                                        <input type="file" accept="image/*" />
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        Title:
                                        <input type="text" />
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        Upload Video:
                                        <input type="file" accept="video/*" />
                                    </label>
                                </div>
                                <div>
                                    <button type="submit">Upload Video</button>
                                </div>
                            </>
                        )}
                        {contentType === 'notes' && (
                            <>
                                <div>
                                    <label>
                                        Select Category:
                                        <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} id="categoryId">
                                            <option value="">Select Notes Category</option>
                                            <option value="4">Notes</option>
                                            <option value="5">Daily Reading</option>
                                            <option value="6">Joint Specific Reading</option>
                                            <option value="8">Convex Concave Rule for all Joints</option>
                                            <option value="7">Special Test</option>
                                            <option value="3">Books</option>
                                        </select>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        Name:
                                        <input type="text" id="caption" onChange={(e) => setCaption(e.target.value)}/>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        Upload Notes:
                                        <input type="file" accept=".pdf,.doc,.docx" id="file" onChange={(e) => setFile(e.target.files[0])}/>
                                    </label>
                                </div>
                                <div>
                                    <button type="submit"onChange={handleUploadDoc}>Upload Notes</button>
                                </div>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admin;
