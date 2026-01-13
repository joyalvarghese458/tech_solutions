// Contact.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert, Spinner } from 'react-bootstrap';
import {
    Telephone,
    Envelope,
    GeoAlt,
    Clock,
    Send,
    CheckCircle,
    Phone,
    Chat,
    Globe,
    ShieldCheck,
    ArrowRight,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Whatsapp,
    Map
} from 'react-bootstrap-icons';
import '../Style/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service: '',
        budget: ''
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        submitting: false,
        error: false,
        message: ''
    });

    // Contact methods
    const contactMethods = [
        {
            icon: <Telephone size={30} />,
            title: 'Call Us',
            details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
            action: 'tel:+15551234567',
            buttonText: 'Call Now',
            color: '#00d4ff'
        },
        {
            icon: <Envelope size={30} />,
            title: 'Email Us',
            details: ['info@techsolutions.com', 'support@techsolutions.com'],
            action: 'mailto:info@techsolutions.com',
            buttonText: 'Send Email',
            color: '#0088ff'
        },
        {
            icon: <Chat size={30} />,
            title: 'Live Chat',
            details: ['Available 24/7', 'Instant response'],
            action: '#chat',
            buttonText: 'Start Chat',
            color: '#4ecdc4'
        },
        {
            icon: <Whatsapp size={30} />,
            title: 'WhatsApp',
            details: ['Business hours: 9AM-6PM', 'Quick response'],
            action: 'https://wa.me/15551234567',
            buttonText: 'Message Us',
            color: '#25D366'
        }
    ];

    // Office locations
    const offices = [
        {
            city: 'San Francisco',
            address: '123 Tech Street, San Francisco, CA 94107',
            phone: '+1 (415) 555-0123',
            email: 'sf@techsolutions.com',
            hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
            image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop'
        },
        {
            city: 'New York',
            address: '456 Innovation Ave, New York, NY 10001',
            phone: '+1 (212) 555-0456',
            email: 'ny@techsolutions.com',
            hours: 'Mon-Fri: 8:00 AM - 7:00 PM',
            image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop'
        },
        {
            city: 'Remote Support',
            address: 'Available Worldwide',
            phone: '+1 (800) 555-0789',
            email: 'remote@techsolutions.com',
            hours: '24/7 Support',
            image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop'
        }
    ];

    // Services list
    const services = [
        'IT Consulting',
        'Cloud Solutions',
        'Cybersecurity',
        'Web Development',
        'Mobile Apps',
        'Software Development',
        'Data Analytics',
        'IT Support'
    ];

    // Budget ranges
    const budgetRanges = [
        '$5,000 - $10,000',
        '$10,000 - $25,000',
        '$25,000 - $50,000',
        '$50,000 - $100,000',
        '$100,000+',
        'Not Sure'
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus({ submitting: true, submitted: false, error: false, message: '' });

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // In production, you would send the data to your backend here
            console.log('Form submitted:', formData);

            setFormStatus({
                submitted: true,
                submitting: false,
                error: false,
                message: 'Thank you! Your message has been sent successfully. We will contact you within 24 hours.'
            });

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
                service: '',
                budget: ''
            });

        } catch (error) {
            setFormStatus({
                submitted: false,
                submitting: false,
                error: true,
                message: 'Sorry, there was an error submitting your message. Please try again later.'
            });
        }
    };

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero-section">
                <Container>
                    <Row className="align-items-center min-vh-80">
                        <Col lg={6} className="hero-content">
                            <h1 className="hero-title">
                                Get in <span className="gradient-text">Touch</span>
                            </h1>
                            <p className="hero-description">
                                Have questions about our services? Ready to start your next project?
                                Contact us today and let's build something amazing together.
                            </p>
                            <div className="hero-stats">
                                <Row>
                                    <Col xs={6} md={3}>
                                        <div className="stat-item">
                                            <h3>24/7</h3>
                                            <p>Support Available</p>
                                        </div>
                                    </Col>
                                    <Col xs={6} md={3}>
                                        <div className="stat-item">
                                            <h3>15 min</h3>
                                            <p>Response Time</p>
                                        </div>
                                    </Col>
                                    <Col xs={6} md={3}>
                                        <div className="stat-item">
                                            <h3>99%</h3>
                                            <p>Client Satisfaction</p>
                                        </div>
                                    </Col>
                                    <Col xs={6} md={3}>
                                        <div className="stat-item">
                                            <h3>Global</h3>
                                            <p>Team Coverage</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={6} className="hero-image-col">
                            <div className="contact-hero-image">
                                <div className="floating-shape shape-1"></div>
                                <div className="floating-shape shape-2"></div>
                                <div className="main-hero-image">
                                    <div className="image-placeholder">
                                        <Phone size={100} className="phone-icon" color="#00d4ff" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Contact Methods */}
            <section className="contact-methods-section py-5">
                <Container>
                    <Row className="mb-5">
                        <Col lg={8} className="mx-auto text-center">
                            <h2 className="section-title">
                                Choose Your <span className="gradient-text">Contact Method</span>
                            </h2>
                            <p className="section-subtitle">
                                Multiple ways to reach us. We're here to help!
                            </p>
                        </Col>
                    </Row>
                    <Row className="g-4">
                        {contactMethods.map((method, index) => (
                            <Col lg={3} md={6} key={index}>
                                <Card
                                    className="contact-method-card"
                                    style={{ '--method-color': method.color } as React.CSSProperties}
                                >
                                    <Card.Body className="text-center">
                                        <div className="method-icon">
                                            {method.icon}
                                        </div>
                                        <Card.Title>{method.title}</Card.Title>
                                        <div className="method-details">
                                            {method.details.map((detail, i) => (
                                                <p key={i} className="mb-1">{detail}</p>
                                            ))}
                                        </div>
                                        <Button
                                            href={method.action}
                                            className="method-btn mt-3"
                                            target={method.action.startsWith('http') ? '_blank' : undefined}
                                        >
                                            {method.buttonText} <ArrowRight className="ms-2" />
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Contact Form & Info */}
            <section className="contact-form-section py-5 bg-light">
                <Container>
                    <Row className="g-4">
                        {/* Contact Form */}
                        <Col lg={7}>
                            <Card className="contact-form-card">
                                <Card.Body>
                                    <h3 className="form-title mb-4">
                                        Send Us a <span className="gradient-text">Message</span>
                                    </h3>

                                    {formStatus.submitted && (
                                        <Alert variant="success" className="d-flex align-items-center">
                                            <CheckCircle size={24} className="me-3" />
                                            <div>{formStatus.message}</div>
                                        </Alert>
                                    )}

                                    {formStatus.error && (
                                        <Alert variant="danger">
                                            {formStatus.message}
                                        </Alert>
                                    )}

                                    <Form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Full Name *</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        required
                                                        placeholder="John Doe"
                                                        disabled={formStatus.submitting}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Email Address *</Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        required
                                                        placeholder="john@example.com"
                                                        disabled={formStatus.submitting}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Phone Number</Form.Label>
                                                    <Form.Control
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        placeholder="(123) 456-7890"
                                                        disabled={formStatus.submitting}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Subject *</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="subject"
                                                        value={formData.subject}
                                                        onChange={handleInputChange}
                                                        required
                                                        placeholder="How can we help you?"
                                                        disabled={formStatus.submitting}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Service Interested In</Form.Label>
                                                    <Form.Select
                                                        name="service"
                                                        value={formData.service}
                                                        onChange={handleInputChange}
                                                        disabled={formStatus.submitting}
                                                    >
                                                        <option value="">Select a service</option>
                                                        {services.map(service => (
                                                            <option key={service} value={service}>{service}</option>
                                                        ))}
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Project Budget</Form.Label>
                                                    <Form.Select
                                                        name="budget"
                                                        value={formData.budget}
                                                        onChange={handleInputChange}
                                                        disabled={formStatus.submitting}
                                                    >
                                                        <option value="">Select budget range</option>
                                                        {budgetRanges.map(budget => (
                                                            <option key={budget} value={budget}>{budget}</option>
                                                        ))}
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Form.Group className="mb-4">
                                            <Form.Label>Your Message *</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                rows={5}
                                                required
                                                placeholder="Tell us about your project or inquiry..."
                                                disabled={formStatus.submitting}
                                            />
                                        </Form.Group>

                                        <div className="privacy-notice mb-4">
                                            <ShieldCheck size={16} className="me-2" color="#00d4ff" />
                                            <small>
                                                Your information is secure. We'll never share your details with third parties.
                                            </small>
                                        </div>

                                        <Button
                                            type="submit"
                                            className="btn-submit w-100"
                                            disabled={formStatus.submitting}
                                        >
                                            {formStatus.submitting ? (
                                                <>
                                                    <Spinner
                                                        as="span"
                                                        animation="border"
                                                        size="sm"
                                                        role="status"
                                                        aria-hidden="true"
                                                        className="me-2"
                                                    />
                                                    Sending Message...
                                                </>
                                            ) : (
                                                <>
                                                    <Send size={20} className="me-2" />
                                                    Send Message
                                                </>
                                            )}
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Contact Information */}
                        <Col lg={5}>
                            <div className="contact-info-sidebar">
                                <Card className="info-card mb-4">
                                    <Card.Body>
                                        <h4 className="info-title mb-4">
                                            Contact <span className="gradient-text">Information</span>
                                        </h4>

                                        <div className="info-item">
                                            <div className="info-icon">
                                                <Envelope size={20} />
                                            </div>
                                            <div className="info-content">
                                                <h6>Email Address</h6>
                                                <a href="mailto:info@techsolutions.com">info@techsolutions.com</a>
                                                <a href="mailto:support@techsolutions.com">support@techsolutions.com</a>
                                            </div>
                                        </div>

                                        <div className="info-item">
                                            <div className="info-icon">
                                                <Telephone size={20} />
                                            </div>
                                            <div className="info-content">
                                                <h6>Phone Numbers</h6>
                                                <a href="tel:+15551234567">+1 (555) 123-4567</a>
                                                <a href="tel:+15559876543">+1 (555) 987-6543</a>
                                            </div>
                                        </div>

                                        <div className="info-item">
                                            <div className="info-icon">
                                                <GeoAlt size={20} />
                                            </div>
                                            <div className="info-content">
                                                <h6>Headquarters</h6>
                                                <p>123 Tech Street, San Francisco, CA 94107</p>
                                                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                                                    Open in Maps
                                                </a>
                                            </div>
                                        </div>

                                        <div className="info-item">
                                            <div className="info-icon">
                                                <Clock size={20} />
                                            </div>
                                            <div className="info-content">
                                                <h6>Business Hours</h6>
                                                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                                <p>Saturday: 10:00 AM - 4:00 PM</p>
                                                <p>Emergency Support: 24/7</p>
                                            </div>
                                        </div>

                                        <div className="social-links mt-4">
                                            <h6>Follow Us</h6>
                                            <div className="social-icons">
                                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                                    <Facebook size={20} />
                                                </a>
                                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                                    <Twitter size={20} />
                                                </a>
                                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                                    <Linkedin size={20} />
                                                </a>
                                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                                    <Instagram size={20} />
                                                </a>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>

                                <Card className="emergency-card">
                                    <Card.Body className="text-center">
                                        <div className="emergency-icon">
                                            <Phone size={30} />
                                        </div>
                                        <h5>Emergency Support</h5>
                                        <p className="emergency-phone">
                                            <a href="tel:+18005550789">1-800-555-0789</a>
                                        </p>
                                        <p className="small">Available 24/7 for critical issues</p>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Office Locations */}
            <section className="locations-section py-5">
                <Container>
                    <Row className="mb-5">
                        <Col lg={8} className="mx-auto text-center">
                            <h2 className="section-title">
                                Our <span className="gradient-text">Office Locations</span>
                            </h2>
                            <p className="section-subtitle">
                                Visit us at any of our locations worldwide
                            </p>
                        </Col>
                    </Row>
                    <Row className="g-4">
                        {offices.map((office, index) => (
                            <Col lg={4} md={6} key={index}>
                                <Card className="office-card">
                                    <div
                                        className="office-image"
                                        style={{ backgroundImage: `url(${office.image})` }}
                                    >
                                        <div className="office-badge">{office.city}</div>
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{office.city}</Card.Title>
                                        <div className="office-details">
                                            <p className="detail-item">
                                                <GeoAlt size={16} className="me-2" />
                                                {office.address}
                                            </p>
                                            <p className="detail-item">
                                                <Telephone size={16} className="me-2" />
                                                <a href={`tel:${office.phone.replace(/\D/g, '')}`}>{office.phone}</a>
                                            </p>
                                            <p className="detail-item">
                                                <Envelope size={16} className="me-2" />
                                                <a href={`mailto:${office.email}`}>{office.email}</a>
                                            </p>
                                            <p className="detail-item">
                                                <Clock size={16} className="me-2" />
                                                {office.hours}
                                            </p>
                                        </div>
                                        <div className="office-actions">
                                            <Button
                                                href={`mailto:${office.email}`}
                                                variant="outline-primary"
                                                className="w-100"
                                            >
                                                Email Office
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Map Section */}
            <section className="map-section py-5 bg-light">
                <Container>
                    <Row className="mb-5">
                        <Col lg={8} className="mx-auto text-center">
                            <h2 className="section-title">
                                Find Us on the <span className="gradient-text">Map</span>
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={8} className="mx-auto">
                            <Card className="map-card">
                                <Card.Body className="p-0">
                                    <div className="map-placeholder">
                                        <Map size={60} className="map-icon" />
                                        <h5 className="mt-3">Interactive Map</h5>
                                        <p>Our headquarters location in San Francisco</p>
                                        <Button
                                            href="https://goo.gl/maps/example"
                                            target="_blank"
                                            className="btn-primary-custom mt-3"
                                        >
                                            <Globe size={18} className="me-2" />
                                            Open in Google Maps
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* FAQ Section */}
            <section className="contact-faq-section py-5">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <h3 className="faq-title mb-4">
                                Contact <span className="gradient-text">FAQ</span>
                            </h3>
                            <div className="faq-list">
                                <div className="faq-item">
                                    <h5>What is your typical response time?</h5>
                                    <p>We respond to all inquiries within 15 minutes during business hours and within 2 hours outside business hours.</p>
                                </div>
                                <div className="faq-item">
                                    <h5>Do you offer free consultations?</h5>
                                    <p>Yes! We offer free 30-minute consultations for new clients to discuss their project requirements.</p>
                                </div>
                                <div className="faq-item">
                                    <h5>What information should I include in my inquiry?</h5>
                                    <p>Please include your project goals, timeline, budget range, and any specific requirements or challenges.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <Card className="support-card">
                                <Card.Body className="text-center">
                                    <div className="support-icon">
                                        <Chat size={40} />
                                    </div>
                                    <h4 className="mt-3">Need Immediate Help?</h4>
                                    <p className="mb-4">
                                        Our support team is ready to assist you with any questions or issues.
                                    </p>
                                    <div className="support-buttons">
                                        <Button
                                            href="tel:+18005550789"
                                            className="btn-primary-custom me-3"
                                        >
                                            <Phone size={18} className="me-2" />
                                            Call Support
                                        </Button>
                                        <Button
                                            href="#chat"
                                            variant="outline-primary"
                                        >
                                            <Chat size={18} className="me-2" />
                                            Live Chat
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Contact;