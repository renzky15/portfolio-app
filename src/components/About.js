import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <section className="colorlib-about" data-section="about">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                <div className="col-md-12">
                                    <div className="about-desc">
                                        <span className="heading-meta">About Me</span>
                                        <h2 className="colorlib-heading">Who Am I?</h2>
                                        <p><strong>Hi I'm Renz Owen Santillan</strong> I have been creating real world systems to enhance my skills.
                                                    Our thesis project selected as best capstone project in our batch. I have experience working as a freelance web developer and created a small project.
                                                    The last project I created when I was a freelance developer is a POS system that can help the business process more efficient. As of now, I'm a Software Engineer in Stacktrek and this is a great oppurtunity to develop my skills.
                                        </p>
                                        <p>
                                            My strength is my ability to create and convert your business process into real world application or system. And also all humans has weaknesses too, difficulty in expressing and explaning my ideas is one of my weaknesses. Other weaknesses not yet been discovered lol.
                                        </p>

                                        <p>
                                           What would I rather do If I have free time or I'm stuck with an error ? First thing I will do is to play basketball (PC games or real basketball). Playing basketball is the only sport I'm inlove with and It will be my best stress reliever. Others is playing mobile games and cooking.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                                    <div className="services color-1">
                                        <span className="icon2"><i className="icon-bulb" /></span>
                                        <h3>Web Application</h3>
                                    </div>
                                </div>
                                <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                                    <div className="services color-2">
                                        <span className="icon2"><i className="icon-globe-outline" /></span>
                                        <h3>Web Design</h3>
                                    </div>
                                </div>
                                <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
                                    <div className="services color-3">
                                        <span className="icon2"><i className="icon-data" /></span>
                                        <h3>Database Administration</h3>
                                    </div>
                                </div>
                                <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                                    <div className="services color-4">
                                        <span className="icon2"><i className="icon-phone3" /></span>
                                        <h3>Android Development</h3>
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
