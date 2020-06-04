import React, { Component } from 'react'
import './TopHeaderSection.css';

export default class About extends Component {
    render() {
        const colorRed = {
            'color': 'red'
        }
        const colorWhite = {
            'color': '#f5fcff'
        }
        return (
            <div className = "header-wrap">
                <div className = "content">
                    <div className = "content-1">
                        <p>Phone : <span style = {colorRed}>+639 277 459 689</span></p>
                    </div>
                    <div className = "content-2">
                        <p>Email : <span style = {colorRed}>renzowensantillan@gmail.com</span></p>
                    </div>

                    <div className = "content-3">
                        <div className = "social-media-links">
                            
                            <div>
                                <a href="#" ><i style  = {colorWhite} class="fa fa-skype fa-2x" aria-hidden="true"></i></a>
                            </div>

                            <div>
                                <a href="#" ><i style  = {colorWhite} class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
                            </div>

                            <div>
                                <a href="#" ><i  style  = {colorWhite} class="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a>
                            </div>

                            <div>
                                <a href="#" ><i style  = {colorWhite} class="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                

            </div>
            
        )
    }
}