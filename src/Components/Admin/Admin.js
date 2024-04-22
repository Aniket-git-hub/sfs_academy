import React, { useState } from 'react';
import NavbarItems from "../utilities/NavbarItems";
import Footer from "../utilities/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Assets/css/Admin.css";
import logo from "../../Assets/img/SFS Academy Logo (14).png";

const Admin = () => {
    const [contentType, setContentType] = useState('videos');
    const [selectedCategory, setSelectedCategory] = useState('');

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
                                        <select value={selectedCategory} onChange={handleCategoryChange}>
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
                                        Name:
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
                                        <select value={selectedCategory} onChange={handleCategoryChange}>
                                            <option value="">Select Notes Category</option>
                                            <option value="notes">Notes</option>
                                            <option value="dailyReading">Daily Reading</option>
                                            <option value="jointSpecificReading">Joint Specific Reading</option>
                                            <option value="convexConcaveRuleforallJoints">Convex Concave Rule for all Joints</option>
                                            <option value="specialTest">Special Test</option>
                                            <option value="books">Books</option>
                                        </select>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        Name:
                                        <input type="text" />
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        Upload Notes:
                                        <input type="file" accept=".pdf,.doc,.docx" />
                                    </label>
                                </div>
                                <div>
                                    <button type="submit">Upload Notes</button>
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
