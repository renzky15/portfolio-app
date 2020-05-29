import React, { Component } from 'react'


export default class Home extends Component {
    render() {
        const sectionStyle = {
            backgroundImage: `url(/images/bg_test.jpg)`
        };

        const white_font = {
            color: "#fff"
        };
        return (
            <section id="colorlib-hero" className="js-fullheight" data-section="home">
                <div className="flexslider js-fullheight">
                    <ul className="slides">
                        <li style={sectionStyle}>
                            <div className="overlay" />
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                        <div className="slider-text-inner js-fullheight">
                                            <div className="desc">
                                                <h1 style = {white_font}>Howdy! <br />I'm Renz</h1>
                                                <h2 style = {white_font}>"Push the wall until it moves"</h2>
                                                <p><a className="btn btn-primary btn-learn" href = "https://drive.google.com/file/d/1qdC8G4h61XpffsHN9vEGn2-oRyZ0BJ90/view?usp=sharing">Download CV <i className="icon-download4" /></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li style={{ backgroundImage: 'url(images/bg_dev.jpg)' }}>
                            <div className="overlay" />
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                        <div className="slider-text-inner">
                                            <div className="desc">
                                                <h1 style = {white_font}>I'm <br />a Web Developer</h1>
                                                <p><a className="btn btn-primary btn-learn">View Portfolio <i className="icon-briefcase3" /></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

        )
    }
}
