import React from 'react';
import care_img_1 from "../assets/care_img_1.jpg";
import care_img_2 from "../assets/care_img_2.jpg";
import care_img_3 from "../assets/care_img_3.jpg";
import sustainability_img_1 from "../assets/sustainability_img_1.jpg";
import community_connection_img_1 from "../assets/community_connection_img_1.jpg";
import simplicity_img_1 from "../assets/simplicity_img_1.jpg";

export default function About() {
    return (
        <div className="about-container">
            <h1>Our Mission & Values</h1>
            <p>FlowerPlant is a community dedicated to bringing nature into every home.</p>
            
            <div className="values-grid">
                <div className="value-item">
                    <h3>Care</h3>
                    <p>When we care about the environment, we care about ourselves</p>
                    <div className="images-container">
                    <img
                        src={care_img_1}
                        alt="care about plants image 1"
                        style={{ width: '300px', height: 'auto' }} />
                    <img
                        src={care_img_3}
                        alt="care about plants image 3"
                    style={{ width: '300px', height: 'auto' }} />
                    <img
                        src={care_img_2}
                        alt="care about plants image 2"
                        style={{ width: '300px', height: 'auto' }} />
                    </div>
                </div>
                <div className="value-item">
                    <h3>Sustainability</h3>
                    <p>Plants are the lungs of our planet.<br />
                        We promote eco-friendly gardening, mindful consumption, and a deep respect for nature.</p>
                    <img src={sustainability_img_1} alt="sustainability image" style={{width: 'auto', height: '500px'}} />
                </div>
                <div className="value-item">
                    <h3>Community & Connection</h3>
                    <p>FlowerPlant is a space where beginners learn from experts.<br />
                        We value the sharing of experiences for all nature lovers.</p>
                    <img src={community_connection_img_1} alt="community and connection image" style={{width: 'auto', height: '500px'}} />
                </div>
                <div className="value-item">
                    <h3>Simplicity & Accessibility</h3>
                    <p>Plant care shouldn’t be complicated.<br /> We strive to make botanical information structured and accessible to everyone.</p>
                    <img src={simplicity_img_1} alt="simplicity image about herbs information" style={{width: 'auto', height: '500px'}} />
                </div>
            </div>
        </div>
    );
}