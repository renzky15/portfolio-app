import React, { Component } from 'react'

export default class Education extends Component {
    render() {
        return (
            <section className="colorlib-education" data-section="education">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">Education</span>
                            <h2 className="colorlib-heading animate-box">Education</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                            <div className="fancy-collapse-panel">
                                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                    
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingTwo">
                                            <h4 className="panel-title">
                                                <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Bachelor Degree of Information Technology
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                            <div className="panel-body">
                                                <p>University of Negros Occidental-Recoletos</p>
                                                <p>#51 Lizares St., Bacolod City, 6100 Negros Occidental</p>
                                            
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingThree">
                                            <h4 className="panel-title">
                                                <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    High School Secondary Education
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                            <div className="panel-body">
                                                <p>Ramon Torres Ma-ao Sugar Central National High School</p>
                                                <p>Brgy. Don Jorge L. Araneta, Bago City 6101, Negros Occidental</p>
                                            </div>
                                        </div>
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
