import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2>Contact Us</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Get in Touch</h3>
                        <p><i className="fas fa-map-marker-alt"></i>Ca-50 P.C.Colony Kankarbagh Patna -800020</p>
                        <p><i className="fas fa-phone"></i> +91 6206048501</p>
                        <p><i className="fas fa-envelope"></i>ojaskumargupta@gmail.com</p>
                        <p><i className="fas fa-clock"></i> Mon-Sun:11:00 AM - 8:00 PM</p>
                    </div>
                    <div className="contact-form">
                        <form>
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <input type="tel" placeholder="Your Phone" />
                            <select>
                                <option value="">Select Class</option>
                                <option value="nursery">Nursery/KG</option>
                                <option value="1-5">Class 1-5</option>
                                <option value="6-8">Class 6-8</option>
                                <option value="9-10">Class 9-10</option>
                                <option value="11-12">Class 11-12</option>
                            </select>
                            <textarea placeholder="Your Message" rows="5"></textarea>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
