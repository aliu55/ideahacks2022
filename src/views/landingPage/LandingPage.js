import React from "react";
import './LandingPage.css'
import { motion } from "framer-motion"
// import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom";

const LandingPage = () =>{
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1],
        }}
        transition={{
          duration: 0.8,
        }}
        className="user-card">

            {/* <Navbar className = "bar">
                <Navbar.Brand href="/venushacks" className = "nav-title">Be well</Navbar.Brand>
            </Navbar> */}

            <section className="top-panel">
                <div className="top-panel-container">
                    <div>
                        <h1 className="top-panel-title">Sprout <span>Route</span></h1>
                        <p className="top-panel-description">SprouteRoute encourages you to explore the outdoors more by notifying you the perfect time to go for a walk. Based on your preferences, we will curate the perfect opportunity for you to go outside for a nice refreshing walk!
                        </p>
                        <Link to="/select"><button type="button" className="portfolio-button">start here</button></Link>
                    </div>
                </div>
            </section>

        </motion.div>
    )
};

export default LandingPage;