import React from "react";
import lecture1img from "../../Assets/img/lecture/lecture1ss.jpg";
import lecture2img from "../../Assets/img/lecture/lecture2ss.png";
import lecture3img from "../../Assets/img/lecture/lecture3ss.png";
import lecture4img from "../../Assets/img/lecture/lecture4ss.png";
import lecture5img from "../../Assets/img/lecture/lecture5ss.png";
import lecture6img from "../../Assets/img/lecture/lecture6ss.png";
import lecture7img from "../../Assets/img/lecture/lecture7ss.png";
import lecture8img from "../../Assets/img/lecture/lecture8ss.png";
import lecture9img from "../../Assets/img/lecture/lecture9ss.png";
import lecture10img from "../../Assets/img/lecture/lecture10ss.png";
import lecture11img from "../../Assets/img/lecture/lecture11ss.png";
import lecture12img from "../../Assets/img/lecture/lecture12ss.png";
import lecture13img from "../../Assets/img/lecture/lecture13ss.png";
import lecture14img from "../../Assets/img/lecture/lecture14ss.png";
import lecture15img from "../../Assets/img/lecture/lecture15ss.png";
import "../../Assets/css/RecordedLectures.css";

const RecordedLectures = () => {

    const openLinkInNewTab = () => {
        const linkUrl = 'https://drive.google.com/file/d/1TexmylPwJu0KtwOb_-oUJz5WR5kn811r/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openLinkInNewTab2 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1QevB7CBrQIFp4DMV6BjPhW_ThLLp5Sl1/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openLinkInNewTab3 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1SdfvzPMAddGRaMVqBosVIrYwEV99YXXY/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openLinkInNewTab4 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1WWAScEazItafeNMqSswW4YkCkv6DyeuM/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openLinkInNewTab5 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1RYiCFiZvGvKzUg0zL2cYh4p6gWN2Dxhg/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openLinkInNewTab6 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1swVZ_1Z1T47AsWRzLiMWux6K6YxKUFJ-/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openLinkInNewTab7 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1hAPVRUY_ErrjNv4rcV-Jv51FnqEvjyom/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openLinkInNewTab8 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1rILw4faQhNWfP0fKWsNW3sc_8kKqEG3p/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openLinkInNewTab9 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1Jb_EfE44RxhX-hZuR_Q7EemrpkqpP80D/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openLinkInNewTab10 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1PZFxiORCcPZY-kcqCSQELsUQqpk4Amr2/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openLinkInNewTab11 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1CtWGlUdF3cjk63dOrBjNTDLToSBwzP4g/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openLinkInNewTab12 = () => {
        const linkUrl = 'https://drive.google.com/file/d/18qMjzcmVth1BgGyM5m0KQ97fgTisncZq/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openLinkInNewTab13 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1ccn8RXKUWmuc6D0clO6p6cGWZf7FZKqF/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };
    const openLinkInNewTab14 = () => {
        const linkUrl = 'https://drive.google.com/file/d/106VMEPEn3jXoMHpm2TWX1gZHSnhTJAC3/view?usp=sharing';
        window.open(linkUrl, '_blank'); 
    };
    const openLinkInNewTab15 = () => {
        const linkUrl = 'https://drive.google.com/file/d/1NcCvhbzbJaKshyQCwCOw_UrytBjvRrYt/view?usp=sharing';
        window.open(linkUrl, '_blank');
    };

    return (
        <div className="lectures">
            <div className="lecture-image">
                <div class="rcard">
                    <div class="rcard-details">
                        <p class="text-title">Lecture 1(18-02-2024)</p>
                        <p class="text-body">
                            <img onClick={openLinkInNewTab} src={lecture1img} width={300} height={200} />
                            <button onClick={openLinkInNewTab} className="playButton">
                                ▶️
                            </button>
                        </p>
                    </div>
                    <button onClick={openLinkInNewTab} class="rcard-button">Revise ▶️</button>
                </div>
            </div>
            <div className="lecture-image">
                <div class="rcard">
                    <div class="rcard-details">
                        <p class="text-title">Lecture 2 (25-02-2024)</p>
                        <p class="text-body">
                            <img onClick={openLinkInNewTab2} src={lecture2img} width={300} height={200} />
                            <button onClick={openLinkInNewTab2} className="playButton">
                                ▶️
                            </button>
                        </p>
                    </div>
                    <button onClick={openLinkInNewTab2} class="rcard-button">Revise ▶️</button>
                </div>
            </div>
            <br></br>
            <div className="lecture-image">
                <div class="rcard">
                    <div class="rcard-details">
                        <p class="text-title">Lecture 3 (29-02-2024)</p>
                        <p class="text-body">
                            <img onClick={openLinkInNewTab3} src={lecture3img} width={300} height={200} />
                            <button onClick={openLinkInNewTab3} className="playButton">
                                ▶️
                            </button>
                        </p>
                    </div>
                    <button onClick={openLinkInNewTab3} class="rcard-button">Revise ▶️</button>
                </div>
            </div>
            <div className="lecture-image">
                <div class="rcard">
                    <div class="rcard-details">
                        <p class="text-title">Lecture 4 (07-03-2024)</p>
                        <p class="text-body">
                            <img onClick={openLinkInNewTab4} src={lecture4img} width={300} height={200} />
                            <button onClick={openLinkInNewTab4} className="playButton">
                                ▶️
                            </button>
                        </p>
                    </div>
                    <button onClick={openLinkInNewTab4} class="rcard-button">Revise ▶️</button>
                </div>
            </div>
            <div className="lecture-image">
                <div class="rcard">
                    <div class="rcard-details">
                        <p class="text-title">Lecture 5 (10-03-2024)</p>
                        <p class="text-body">
                            <img onClick={openLinkInNewTab5} src={lecture5img} width={300} height={200} />
                            <button onClick={openLinkInNewTab5} className="playButton">
                                ▶️
                            </button>
                        </p>
                    </div>
                    <button onClick={openLinkInNewTab5} class="rcard-button">Revise ▶️</button>
                </div>
            </div>
            <div className="lecture-image">
                <div class="rcard">
                    <div class="rcard-details">
                        <p class="text-title">Lecture 6 (14-03-2024)</p>
                        <p class="text-body">
                            <img onClick={openLinkInNewTab6} src={lecture6img} width={300} height={200} />
                            <button onClick={openLinkInNewTab6} className="playButton">
                                ▶️
                            </button>
                        </p>
                    </div>
                    <button onClick={openLinkInNewTab6} class="rcard-button">Revise ▶️</button>
                </div>
            </div>
            <div className="lecture-image">
                <div class="rcard">
                    <div class="rcard-details">
                        <p class="text-title">Lecture 7 (17-03-2024)</p>
                        <p class="text-body">
                            <img onClick={openLinkInNewTab7} src={lecture7img} width={300} height={200} />
                            <button onClick={openLinkInNewTab7} className="playButton">
                                ▶️
                            </button>
                        </p>
                    </div>
                    <button onClick={openLinkInNewTab7} class="rcard-button">Revise ▶️</button>
                </div>
            </div>
            <div className="lecture-image">
                <div class="rcard">
                    <div class="rcard-details">
                        <p class="text-title">Lecture 8 (21-03-2024)</p>
                        <p class="text-body">
                            <img onClick={openLinkInNewTab8} src={lecture8img} width={300} height={200} />
                            <button onClick={openLinkInNewTab8} className="playButton">
                                ▶️
                            </button>
                        </p>
                    </div>
                    <button onClick={openLinkInNewTab8} class="rcard-button">Revise ▶️</button>
                </div>
            </div>
            <div className="lecture-image">
                <div class="rcard">
                    <div class="rcard-details">
                        <p class="text-title">Lecture 9 (24-03-2024)</p>
                        <p class="text-body">
                            <img onClick={openLinkInNewTab9} src={lecture9img} width={300} height={200} />
                            <button onClick={openLinkInNewTab9} className="playButton">
                                ▶️
                            </button>
                        </p>
                    </div>
                    <button onClick={openLinkInNewTab9} class="rcard-button">Revise ▶️</button>
                </div>
            </div>
            <div className="lecture-image">
                <div class="rcard">
                    <div class="rcard-details">
                        <p class="text-title">Lecture 10 (28-03-2024)</p>
                        <p class="text-body">
                            <img onClick={openLinkInNewTab10} src={lecture10img} width={300} height={200} />
                            <button onClick={openLinkInNewTab10} className="playButton">
                                ▶️
                            </button>
                        </p>
                    </div>
                    <button onClick={openLinkInNewTab10} class="rcard-button">Revise ▶️</button>
                </div>
            </div>
            <div className="lecture-image">
                <div class="rcard">
                    <div class="rcard-details">
                        <p class="text-title">Lecture 11 (31-03-2024)</p>
                        <p class="text-body">
                            <img onClick={openLinkInNewTab11} src={lecture11img} width={300} height={200} />
                            <button onClick={openLinkInNewTab11} className="playButton">
                                ▶️
                            </button>
                        </p>
                    </div>
                    <button onClick={openLinkInNewTab11} class="rcard-button">Revise ▶️</button>
                </div>
            </div>
            <div className="lecture-image">
                <div class="rcard">
                    <div class="rcard-details">
                        <p class="text-title">Lecture 12 (04-04-2024)</p>
                        <p class="text-body">
                            <img onClick={openLinkInNewTab12} src={lecture12img} width={300} height={200} />
                            <button onClick={openLinkInNewTab12} className="playButton">
                                ▶️
                            </button>
                        </p>
                    </div>
                    <button onClick={openLinkInNewTab12} class="rcard-button">Revise ▶️</button>
                </div>
            </div>
            <div className="lecture-image">
                <div class="rcard">
                    <div class="rcard-details">
                        <p class="text-title">Lecture 13 (07-04-2024)</p>
                        <p class="text-body">
                            <img onClick={openLinkInNewTab13} src={lecture13img} width={300} height={200} />
                            <button onClick={openLinkInNewTab13} className="playButton">
                                ▶️
                            </button>
                        </p>
                    </div>
                    <button onClick={openLinkInNewTab13} class="rcard-button">Revise ▶️</button>
                </div>
            </div>
            <div className="lecture-image">
                <div class="rcard">
                    <div class="rcard-details">
                        <p class="text-title">Lecture 14 (11-04-2024)</p>
                        <p class="text-body">
                            <img onClick={openLinkInNewTab14} src={lecture14img} width={300} height={200} />
                            <button onClick={openLinkInNewTab14} className="playButton">
                                ▶️
                            </button>
                        </p>
                    </div>
                    <button onClick={openLinkInNewTab14} class="rcard-button">Revise ▶️</button>
                </div>
            </div>
            <div className="lecture-image">
                <div class="rcard">
                    <div class="rcard-details">
                        <p class="text-title">Lecture 15 (14-04-2024)</p>
                        <p class="text-body">
                            <img onClick={openLinkInNewTab15} src={lecture15img} width={300} height={200} />
                            <button onClick={openLinkInNewTab15} className="playButton">
                                ▶️
                            </button>
                        </p>
                    </div>
                    <button onClick={openLinkInNewTab15} class="rcard-button">Revise ▶️</button>
                </div>
            </div>
            
</div>


    )
}

export default RecordedLectures;