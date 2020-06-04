import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <title>Jackson Template</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content />
                <meta name="keywords" content />
                <meta name="author" content />
                {/* Facebook and Twitter integration */}
                <meta property="og:title" content />
                <meta property="og:image" content />
                <meta property="og:url" content />
                <meta property="og:site_name" content />
                <meta property="og:description" content />
                <meta name="twitter:title" content />
                <meta name="twitter:image" content />
                <meta name="twitter:url" content />
                <meta name="twitter:card" content />
                {/* Place favicon.ico and apple-touch-icon.png in the root directory */}
                <link rel="shortcut icon" href="favicon.ico" />
                <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700" rel="stylesheet" />
                <link href = "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel = "stylesheet" />
                {/* Animate.css */}
                <link rel="stylesheet" href="css/animate.css" />
                {/* Icomoon Icon Fonts*/}
                <link rel="stylesheet" href="css/icomoon.css" />
                {/* Bootstrap  */}
                <link rel="stylesheet" href="css/bootstrap.css" />
                {/* Flexslider  */}
                <link rel="stylesheet" href="css/flexslider.css" />
                {/* Flaticons  */}
                <link rel="stylesheet" href="fonts/flaticon/font/flaticon.css" />
                {/* Owl Carousel */}
                <link rel="stylesheet" href="css/owl.carousel.min.css" />
                <link rel="stylesheet" href="css/owl.theme.default.min.css" />
                {/* Theme style  */}
                <link rel="stylesheet" href="css/style.css" />
                {/* Modernizr JS */}
                {/* FOR IE9 below */}
                {/*[if lt IE 9]>
	
	<![endif]*/}
            </div>

        )
    }
}
