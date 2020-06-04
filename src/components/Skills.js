import React, { Component } from 'react'

export default class Skills extends Component {
    render() {
        return (
            <section className="colorlib-skills" data-section="skills">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">My Specialty</span>
                            <h2 className="colorlib-heading animate-box">My Skills</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                            <p>Currently, I'm focus to React JS framework but I already experience also those skills listed below. This is just my own ratings based what I see in myself and how confident I am using this languages or frameworks.</p>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="progress-wrap">
                                <h3>React JS</h3>
                                <div className="progress">
                                    <div className="progress-bar color-1" role="progressbar" aria-valuenow={8} aria-valuemin={0} aria-valuemax={10} style={{ width: '80%' }}>
                                        <span>8</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                            <div className="progress-wrap">
                                <h3>PHP</h3>
                                <div className="progress">
                                    <div className="progress-bar color-2" role="progressbar" aria-valuenow={8} aria-valuemin={0} aria-valuemax={10} style={{ width: '80%' }}>
                                        <span>8</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="progress-wrap">
                                <h3>HTML5</h3>
                                <div className="progress">
                                    <div className="progress-bar color-3" role="progressbar" aria-valuenow={9} aria-valuemin={0} aria-valuemax={10} style={{ width: '90%' }}>
                                        <span>9</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                            <div className="progress-wrap">
                                <h3>CSS3</h3>
                                <div className="progress">
                                    <div className="progress-bar color-4" role="progressbar" aria-valuenow={9} aria-valuemin={0} aria-valuemax={10} style={{ width: '90%' }}>
                                        <span>9</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="progress-wrap">
                                <h3>Java</h3>
                                <div className="progress">
                                    <div className="progress-bar color-5" role="progressbar" aria-valuenow={7} aria-valuemin={0} aria-valuemax={10} style={{ width: '70%' }}>
                                        <span>7</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                            <div className="progress-wrap">
                                <h3>SQL</h3>
                                <div className="progress">
                                    <div className="progress-bar color-6" role="progressbar" aria-valuenow={8} aria-valuemin={0} aria-valuemax={10} style={{ width: '80%' }}>
                                        <span>8</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="progress-wrap">
                                <h3>REST API</h3>
                                <div className="progress">
                                    <div className="progress-bar color-1" role="progressbar" aria-valuenow={8} aria-valuemin={0} aria-valuemax={10} style={{ width: '80%' }}>
                                        <span>8</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
