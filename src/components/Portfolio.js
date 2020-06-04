import React, { Component } from 'react'
// import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Counters from './Counters';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Work from './Work';
import Blog from './Blog';
import TopHeaderSection from './TopHeaderSection/TopHeaderSection';



export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <TopHeaderSection/>
                <div id="colorlib-page">
                    
                
                    {/* <div className="container-wrap" > */}
                        <Sidebar/>

                        <div id = "colorlib-main">
                            <Home/>
                            <About/>
                            <Services/>
                            <Counters/>
                            <Skills/>
                            <Education/>
                            <Experience/>
                            <Work/>
                            <Blog/>
                        
                        </div>

                    {/* </div>  */}
                    {/* End container-wrap */}
                </div>
                    {/* End colorlib-page */}

                  
            </div>


   
        );
    }
}
