import React, { useState } from "react";


const JointSpecificReading = () => {

    const openJSR1 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1Bnz-gtIlPAIkMJoDQaCLKl788XYAGQrJ/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openJSR2 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1RMpaFq83sN2TbeGitM5miCDEvMQPimhE/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openJSR3 = () => {
        const linkUrl = 'https://drive.google.com/file/d/10I0cFf1XK891XXK3IyEiDVAAOIN9ESx2/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openJSR4 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1wi51FiUjMmBSv-ivwy32rQlhJHD0P2Dp/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openJSR5 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1OYuVzSYEASIMGGcSbr2epVFhmOvYuR_x/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };

    return (
        <div className="notes">
            <div className="col-lg-12 d-flex align-items-center justify-content-center notes">
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openJSR1}>
                        shoulder joint.pdf
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openJSR2}>
                        ankle joint.pdf
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openJSR3}>
                        hip joint.pdf
                    </div>
                </div>
            </div>
            <div className="col-lg-12 d-flex align-items-center justify-content-center notes">
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openJSR4}>
                        shoulder joint.pdf
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openJSR5}>
                        wrist joint.pdf
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JointSpecificReading;