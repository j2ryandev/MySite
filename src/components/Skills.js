import React from 'react';

export default function Skills() {
    return (

        <>
            {/* Section Scills */}
            <section id="scills" className="section_scills wow fadeInRight" data-wow-delay=".7s">
                <div className="scills_wrapper">
                    <div className="container narrow">
                        <div className="scills_title">
                            <h3>Knowledge &amp; Skills</h3>
                        </div>
                        <div className="scills_about">
                            <p>For over 8 years I have been developing application, websites, headless cms, and consulting </p>
                        </div>
                    </div>
                    <div className="container narrow2">
                        <div className="fn_cs_progress_bar">
                            <div className="progress_item open" data-value={100}>
                                <div className="item_in">
                                    <h3 className="progress_title">JavaScript</h3>
                                    <span
                                        className="progress_percent"
                                        style={{ right: "0%" }}
                                    >
                                        100%
                                    </span>
                                    <div className="bg_wrap">
                                        <div className="progress_bg" style={{ width: "100%" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="progress_item open" data-value={100}>
                                <div className="item_in">
                                    <h3 className="progress_title">HTML5 &amp; CSS3</h3>
                                    <span
                                        className="progress_percent"
                                        style={{ right: "0%" }}
                                    >
                                        100%
                                    </span>
                                    <div className="bg_wrap">
                                        <div className="progress_bg" style={{ width: "100%" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="progress_item open" data-value={98}>
                                <div className="item_in">
                                    <h3 className="progress_title">ReactJS/Redux/TypeScript</h3>
                                    <span
                                        className="progress_percent"
                                        style={{ right: "2%" }}
                                    >
                                        98%
                                    </span>
                                    <div className="bg_wrap">
                                        <div className="progress_bg" style={{ width: "98%" }} />
                                    </div>
                                </div>
                            </div>

                            <div className="progress_item open" data-value={98}>
                                <div className="item_in">
                                    <h3 className="progress_title">Angular 2,7,10,13</h3>
                                    <span
                                        className="progress_percent"
                                        style={{ right: "2%" }}
                                    >
                                        98%
                                    </span>
                                    <div className="bg_wrap">
                                        <div className="progress_bg" style={{ width: "98%" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="progress_item open" data-value={98}>
                                <div className="item_in">
                                    <h3 className="progress_title">nodeJS</h3>
                                    <span
                                        className="progress_percent"
                                        style={{ right: "2%" }}
                                    >
                                        98%
                                    </span>
                                    <div className="bg_wrap">
                                        <div className="progress_bg" style={{ width: "98%" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="progress_item open" data-value={95}>
                                <div className="item_in">
                                    <h3 className="progress_title">C#/ASP.NET/.NET Core</h3>
                                    <span
                                        className="progress_percent"
                                        style={{ right: "5%" }}
                                    >
                                        95%
                                    </span>
                                    <div className="bg_wrap">
                                        <div className="progress_bg" style={{ width: "95%" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="progress_item open" data-value={95}>
                                <div className="item_in">
                                    <h3 className="progress_title">PostgreSQL, mySQL, noSQL, GraphQL</h3>
                                    <span
                                        className="progress_percent"
                                        style={{ right: "5%" }}
                                    >
                                        95%
                                    </span>
                                    <div className="bg_wrap">
                                        <div className="progress_bg" style={{ width: "95%" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Section Scills */}
        </>);
}
