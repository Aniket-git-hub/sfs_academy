import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Assets/css/Pdf.css";


const DailyReading = () => {
    const openDR1 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1pPfvHyIA0HMenA3bQnZB6snzhXcEBuaP/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR2 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1282VV-6IYHC3_o08kNHrPALjyhz4nyjb/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR3 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1ma5gVpdtceNZMHNqrghu_zpgi86sPSbg/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR4 = () => {
        const linkUrl = 'https://drive.google.com/file/d/17vX1Nz71XfEeJ5be1o4VDhPg1cVfJa4o/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR5 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1AOc9NTWWupgv96FxTylN04_sRB2JWN-w/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR6 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1hCMf9xlFmjjE_8kBY9xdpBJciG_w48go/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR7 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1QJVOjoC4G0nYcnIi1wrA2lbF8tXIPmev/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR8 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1lZxQETcJuy-Rq5ZuGugMMht_LVrU48_z/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR9 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1D3vozaaI6qbFxY10CDGMskWrAalNHAsw/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR10 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1ao7td5R3CoTaNud0f6gX-pjIVkEVpwv5/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR11 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1uLXlPoqDu5C_CAn8FioqAEL71ig3Tyd6/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR12 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1nXy-bvBLcP1LnnK47FHJLKZZqLJqijFI/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR13 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1Bk23rC1YEx6P2wBule2CByw75DcQ3fs3/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR14 = () => {
        const linkUrl = 'https://drive.google.com/file/d/172V_J0boLYdxacEF0AwS9B4g2y9TlFg0/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR15 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1rOiixGrynEcdhEHWJzATQmHgjObDzl0e/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR16 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1zHVFMONbyfAdnfNnrzohYhEi4IcXUMc_/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR17 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1JgdcSJfGt_2fVevlAIUdWd2CYtIq8QLy/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR18 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1F20i0Vi0ivAY567pC27fmQqT2VoHqAYu/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR19 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1J3FU6a7euhMuxEyqeJ9eYQqSIWct-9p4/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR20 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1SL6I5UmA6k5K4xmIoeEQbK7HReHUlWTf/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR21 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1--WIrFgvSj1D0bq7Y-hAWxfOIBLtF_ts/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR22 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1TwZltmxY3AHGc9cnFw5QOFGuWShpfxQW/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR23 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1vyItIW8cGr6LRYvSL2E8i1pr4FPEG22n/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR24 = () => {
        const linkUrl = 'https://drive.google.com/file/d/17I0JOZVu6ZvE1Zs5rlcE4mFIjrwTmCw1/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openDR25 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1FjQVfNRUpKK2IXR0MXtRaTknJiM_5TwW/view?usp=sharing';
        window.open(linkUrl, '_blank');
    }
    const openDR26 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1KRuSorl0t8wRPT9vJg1zEPj4z9zm2FRy/view?usp=sharing';
        window.open(linkUrl, '_blank');
    }
    const openDR27 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1StBxz3twWbWca6XfpUwNaa0S-6envok2/view?usp=sharing';
        window.open(linkUrl, '_blank');
    }
    const openDR28 = () => {
        const linkUrl = 'https://drive.google.com/file/d/17uNDx56mv9nzqIeIplqyJgkcVjSIwi_i/view?usp=sharing';
        window.open(linkUrl, '_blank');
    }
    const openDR29 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1EvOfvw692ONOiP_mZFajCl2MyGZ93V4b/view?usp=sharing';
        window.open(linkUrl, '_blank');
    }
    const openDR30 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1JGihs4MPqicdzysDAxZHRA5RhbvF4fta/view?usp=sharing';
        window.open(linkUrl, '_blank');
    }
    const openDR31 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1ysIqfDFRmaWw8FOvAjx09x1ViUVEoe7s/view?usp=sharing';
        window.open(linkUrl, '_blank');
    }
    const openDR32 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1Fk-5CowKrAVegpmagLEjYZp-OIynNFEa/view?usp=sharing';
        window.open(linkUrl, '_blank');
    }

    return (
        <div className="notes">
            <div className="col-lg-12 d-flex align-items-center justify-content-center notes">
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR1}>
                        (Day 1) Closed vs Open Kinematic exercises
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR2}>
                        (Day 1) Dermatomes, Myotomes, Reflexes
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR3}>
                        (Day 1) End Feel Magee 6th 24,25,35-37, 62
                    </div>
                </div>
            </div>
            <div className="col-lg-12 d-flex align-items-center justify-content-center notes">
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR4}>
                        (Day 2) Ligament tear
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR5}>
                        (Day 2) Types fo fractures Dutton 3rd 44-45
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR6}>
                        (Day 4) Kisner 7t h 321-326 soft tissue , injury &; repair management
                    </div>
                </div>
            </div>
            <div className="col-lg-12 d-flex align-items-center justify-content-center notes">
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR7}>
                        (Day 5) Kisner 7th 344-347 fibromylgia and myofacial pain syndrome
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR8}>
                        (Day 7) Kendall Shoulder 314-330 MMT shouder girdle
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR9}>
                        (Day 10) Circle of Willis and hemisphere
                    </div>
                </div>
            </div>
            <div className="col-lg-12 d-flex align-items-center justify-content-center notes">
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR10}>
                        (Day 12) Peripheral nerve injuries Kisner 7th 386-393
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR11}>
                        (Day 13) CRPS Kisner 7th 409-413
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR12}>
                        (Day 13) Incoordination O_Sullivan 6th 211-213
                    </div>
                </div>
            </div>
            <div className="col-lg-12 d-flex align-items-center justify-content-center notes">
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR13}>
                        (Day 14) Kisner 7th 389-393
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR14}>
                        (Day 14) MMT Elbow Kendall Elbow 286-294
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR15}>
                        (Day 17) Obstructive vs Restrictive O_Sullivan 6th 487-495
                    </div>
                </div>
            </div>
            <div className="col-lg-12 d-flex align-items-center justify-content-center notes">
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR16}>
                        (Day 19) Auscultation Hillegass 549-551
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR17}>
                        (Day 19) Cardiac physiology Hillegass 22, 42-44
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR18}>
                        (Day 19) Pulmonary Physiology Hillegass 9-11
                    </div>
                </div>
            </div>
            <div className="col-lg-12 d-flex align-items-center justify-content-center notes">
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR19}>
                        (Day 20) Kendall Wrist and Hand 282-285
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR20}>
                        DMD Umphred 554-568.pdf
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR21}>
                        Fibromyalgia.pdf
                    </div>
                </div>
            </div>
            <div className="col-lg-12 d-flex align-items-center justify-content-center notes">
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR22}>
                        GB Syndrome Umphred 542-552.pdf
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR23}>
                        IFT TherapyEd 2018 423.pdf
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR24}>
                        Kendall Hip 422-433.pdf
                    </div>
                </div>
            </div>
            <div className="col-lg-12 d-flex align-items-center justify-content-center notes">
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR25}>
                        Mensical Injuries Kisner 7th 824-830.pdf
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR26}>
                        Osullivan Stroke examination and intervention pg 667 to 695.pdf
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR27}>
                        Rheumatoid Arthritis.pdf
                    </div>
                </div>
            </div>
            <div className="col-lg-12 d-flex align-items-center justify-content-center notes">
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR28}>
                        septic Arthritis .pdf
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR29}>
                        Spina Bifida Umphred 419-427.pdf
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR30}>
                        Kisner 7th 1020-1027.pdf
                    </div>
                </div>
            </div>
            <div className="col-lg-12 d-flex align-items-center justify-content-center notes">
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR31}>
                        Lymphedema O_Sullivan 6th 588-590, 593-598.pdf
                    </div>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="card p-2 pdffile" onClick={openDR32}>
                        Osteoarthritis Kisner 7th 341-344.pdf
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DailyReading;