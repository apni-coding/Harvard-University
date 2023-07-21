import React from 'react'
import "./Footer.scss";
export default function Footer() {
    return (
        <>
            <footer>
                <div className="topmain">
                    <div className="footertop">
                        <h2>Security & Brand </h2>
                        <ul>
                            <li>Report Copyright Infringement</li>
                            <li>Report Security Issue</li>
                            <li>Trademark Notice</li>
                        </ul>
                    </div>

                    <div className="footertop">
                        <h2>Website</h2>
                        <ul>
                            <li>Accessiblility</li>
                            <li>Digital Accessibliity</li>
                            <li>Privacy Statement</li>
                        </ul>
                    </div>

                    <div className="footertop">

                        <h2>Get In Touch</h2>
                        <ul>
                            <li>Contact Harvard</li>
                            <li>Maps & Directions</li>
                            <li>Jobs</li>
                        </ul>
                    </div>
                </div>
                <div className="bottom">
                    <p>&#169; 2023 The President and Fellows of Harvard College</p>
                    <div className="logo">
                    <img src="https://www.harvard.edu/wp-content/themes/core/assets/img/theme/branding-assets/footer-logo.svg" alt="logo" />
                    </div>
                    <div className="socaillink">
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>YouTube</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}
