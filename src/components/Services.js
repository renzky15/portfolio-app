import React, { Component } from 'react'

export default class Services extends Component {
    render() {
        return (
            <section className="colorlib-services" data-section="services">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">What I do?</span>
                            <h2 className="colorlib-heading">Here are some of my expertise</h2>
                        </div>
                    </div>
                    <div className="row row-pt-md">
                        <div className="col-md-4 text-center animate-box">
                            <div className="services color-1">
                                <span className="icon">
                                    <i className="icon-bulb" />
                                </span>
                                <div className="desc">
                                    <h3>Web Application</h3>
                                    <p>Let's build something new!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="services color-2">
                                <span className="icon">
                                    <i className="icon-data" />
                                </span>
                                <div className="desc">
                                    <h3>Database Administration</h3>
                                    <p>Data is the key.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="services color-5">
                                <span className="icon">
                                    <i className="icon-phone3" />
                                </span>
                                <div className="desc">
                                    <h3>Android Development</h3>
                                    <p>Let's create more exciting apps.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            

        )
    }
}
