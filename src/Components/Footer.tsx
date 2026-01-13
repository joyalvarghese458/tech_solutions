// Footer.jsx
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Youtube,
    Telephone,
    Envelope,
    GeoAlt,
    Clock,
    Send,
    ArrowRight,
    ShieldCheck,
    Award,
    Heart
} from 'react-bootstrap-icons';
import '../Style/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Quick links
    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' }
    ];

    // Services links
    const servicesLinks = [
        { name: 'IT Infrastructure', path: '/services#infrastructure' },
        { name: 'Cloud Solutions', path: '/services#cloud' },
        { name: 'Cybersecurity', path: '/services#security' },
        { name: 'Software Development', path: '/services#software' },
        { name: 'IT Consulting', path: '/services#consulting' },
        { name: 'Data Analytics', path: '/services#analytics' }
    ];

    // Social media links
    const socialLinks = [
        { icon: <Facebook size={20} />, url: 'https://facebook.com', name: 'Facebook' },
        { icon: <Twitter size={20} />, url: 'https://twitter.com', name: 'Twitter' },
        { icon: <Linkedin size={20} />, url: 'https://linkedin.com', name: 'LinkedIn' },
        { icon: <Instagram size={20} />, url: 'https://instagram.com', name: 'Instagram' },
        { icon: <Youtube size={20} />, url: 'https://youtube.com', name: 'YouTube' }
    ];

    // Contact info
    const contactInfo = [
        { icon: <Telephone size={18} />, text: '+1 (555) 123-4567', link: 'tel:+15551234567' },
        { icon: <Envelope size={18} />, text: 'info@techsolutions.com', link: 'mailto:info@techsolutions.com' },
        { icon: <GeoAlt size={18} />, text: '123 Tech Street, San Francisco, CA 94107', link: 'https://maps.google.com' },
        { icon: <Clock size={18} />, text: 'Mon - Fri: 9:00 AM - 6:00 PM', link: null }
    ];

    const handleNewsletterSubmit = (e: any) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Newsletter subscription submitted');
    };

    return (
        <footer className="footer">
            {/* Main Footer */}
            <div className="footer-main py-5">
                <Container>
                    <Row>
                        {/* Company Info */}
                        <Col lg={4} md={6} className="mb-4">
                            <div className="footer-about">
                                <h3 className="footer-logo">
                                    Tech<span className="gradient-text">Solutions</span>
                                </h3>
                                <p className="footer-description">
                                    Leading IT solutions provider with over 10 years of experience
                                    in delivering cutting-edge technology services to businesses worldwide.
                                </p>
                                <div className="trust-badges">
                                    <div className="trust-badge">
                                        <ShieldCheck size={20} className="me-2" />
                                        <span>ISO 27001 Certified</span>
                                    </div>
                                    <div className="trust-badge">
                                        <Award size={20} className="me-2" />
                                        <span>Microsoft Gold Partner</span>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        {/* Quick Links */}
                        <Col lg={2} md={6} className="mb-4">
                            <h5 className="footer-heading">Quick Links</h5>
                            <ul className="footer-links">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.path} className="footer-link">
                                            <ArrowRight size={12} className="me-2" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Col>

                        {/* Services */}
                        <Col lg={2} md={6} className="mb-4">
                            <h5 className="footer-heading">Our Services</h5>
                            <ul className="footer-links">
                                {servicesLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.path} className="footer-link">
                                            <ArrowRight size={12} className="me-2" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Col>

                        {/* Newsletter & Contact */}
                        <Col lg={4} md={6} className="mb-4">
                            <div className="footer-newsletter">
                                <h5 className="footer-heading">Stay Updated</h5>
                                <p className="newsletter-text">
                                    Subscribe to our newsletter for the latest tech insights and updates.
                                </p>
                                <Form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter your email"
                                            required
                                            className="newsletter-input"
                                        />
                                    </Form.Group>
                                    <Button type="submit" className="btn-newsletter w-100">
                                        <Send size={18} className="me-2" />
                                        Subscribe
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>

                    {/* Contact Info Row */}
                    <Row className="mt-4">
                        <Col lg={4} md={6} className="mb-3">
                            <div className="contact-info">
                                <h6 className="contact-heading">Contact Information</h6>
                                <div className="contact-details">
                                    {contactInfo.map((info, index) => (
                                        <div key={index} className="contact-item">
                                            <span className="contact-icon">{info.icon}</span>
                                            {info.link ? (
                                                <a href={info.link} className="contact-link">
                                                    {info.text}
                                                </a>
                                            ) : (
                                                <span className="contact-text">{info.text}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Col>

                        {/* Social Media */}
                        <Col lg={4} md={6} className="mb-3">
                            <div className="social-section">
                                <h6 className="social-heading">Follow Us</h6>
                                <div className="social-icons">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-icon"
                                            aria-label={social.name}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </Col>

                        {/* Security Badges */}
                        <Col lg={4} md={6} className="mb-3">
                            <div className="security-badges">
                                <h6 className="security-heading">Security & Trust</h6>
                                <div className="badges-container">
                                    <div className="security-badge">
                                        <div className="badge-icon">🔒</div>
                                        <span>SSL Secured</span>
                                    </div>
                                    <div className="security-badge">
                                        <div className="badge-icon">🛡️</div>
                                        <span>GDPR Compliant</span>
                                    </div>
                                    <div className="security-badge">
                                        <div className="badge-icon">⭐</div>
                                        <span>Trusted Partner</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom py-4">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} className="mb-3 mb-md-0">
                            <div className="copyright">
                                <p className="mb-0">
                                    &copy; {currentYear} TechSolutions Inc. All rights reserved.
                                </p>
                                <p className="mb-0">
                                    Made with <Heart size={14} className="mx-1" color="#ff6b6b" /> by TechSolutions Team
                                </p>
                            </div>
                        </Col>

                        <Col md={6}>
                            <div className="footer-legal">
                                <div className="legal-links">
                                    <Link to="/privacy-policy" className="legal-link">
                                        Privacy Policy
                                    </Link>
                                    <Link to="/terms-of-service" className="legal-link">
                                        Terms of Service
                                    </Link>
                                    <Link to="/cookie-policy" className="legal-link">
                                        Cookie Policy
                                    </Link>
                                    <Link to="/sitemap" className="legal-link">
                                        Sitemap
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Back to Top Button */}
            <button
                className="back-to-top"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Back to top"
            >
                ↑
            </button>
        </footer>
    );
};

export default Footer;