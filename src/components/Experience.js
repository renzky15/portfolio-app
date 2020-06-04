import React, { Component } from 'react'

export default class Experience extends Component {
    render() {
        return (
            <section className="colorlib-experience" data-section="experience">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">Experience</span>
                            <h2 className="colorlib-heading animate-box">Work Experience</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="timeline-centered">
                                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-1">
                                            <i className="icon-pen2" />
                                        </div>
                                        <div className="timeline-label">
                                            <h2><a href="#">Software Engineer at Stacktrek</a> <span>May 2020 - Present</span></h2>
                                            <p>Good People. Lively work environment. Great Opportunity.</p>
                                        </div>
                                    </div>
                                </article>
                                <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-2">
                                            <i className="icon-pen2" />
                                        </div>
                                        <div className="timeline-label">
                                            <h2><a href="#">Front End Developer at V-System Pte. Ltd.</a> <span>February 2020 - April 2020</span></h2>
                                            <p>Good People. Lively work environment. Great Opportunity.</p>
                                        </div>
                                    </div>
                                </article>
                                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-3">
                                            <i className="icon-pen2" />
                                        </div>
                                        <div className="timeline-label">
                                            <h2><a href="#">Freelance Web Developer</a> <span>July 2019 - January 2020</span></h2>
                                            
                                        </div>
                                    </div>
                                </article>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
