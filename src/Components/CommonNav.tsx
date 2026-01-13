import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Navbar,
  Nav,
  Container,
  Modal,
  Form,
  Button,
  Row,
  Col
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Navbar.css';

function CompanyNavbar() {
  const navigate = useNavigate(); // Add this hook
  const [expanded, setExpanded] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    projectType: '',
    timeline: '',
    email: '',
    phone: '',
    company: '',
    description: ''
  });

  const companyName = "TechSolutions Inc.";

  const handleNavSelect = (selectedKey: any) => {
    console.log(`Selected: ${selectedKey}`);
    setExpanded(false);
    // Navigate based on selected key
    switch (selectedKey) {
      case 'home':
        navigate('/');
        break;
      case 'about':
        navigate('/about');
        break;
      case 'services':
        navigate('/services');
        break;
      case 'portfolio':
        navigate('/portfolio');
        break;
      case 'careers':
        navigate('/careers');
        break;
      case 'contact':
        navigate('/contact');
        break;
      default:
        navigate('/');
    }
  };

  const handleQuoteInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setQuoteForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote request submitted:', quoteForm);
    alert('Thank you! We will contact you with a quote within 24 hours.');
    setShowQuoteModal(false);
    setQuoteForm({
      projectType: '',
      timeline: '',
      email: '',
      phone: '',
      company: '',
      description: ''
    });
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className="company-navbar"
    >
      <Container fluid>
        {/* Company Name on the left */}
        <Navbar.Brand
          onClick={() => navigate('/')} // Change href to onClick
          className="company-name d-flex align-items-center"
          style={{ cursor: 'pointer' }}
        >
          <div className="company-logo-placeholder">
            <span className="logo-text">TS</span>
          </div>
          <div className="company-name-text">
            {companyName}
          </div>
        </Navbar.Brand>

        {/* Mobile Menu Toggle */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler"
        />

        {/* Navigation Links on the right */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto"
            onSelect={handleNavSelect}
          >
            <Nav.Item>
              <Nav.Link
                className="nav-link-custom"
                eventKey="home"
              >
                HOME
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                className="nav-link-custom"
                eventKey="about"
              >
                ABOUT
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                className="nav-link-custom"
                eventKey="services"
              >
                SERVICES
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                className="nav-link-custom"
                eventKey="portfolio"
              >
                PORTFOLIO
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                className="nav-link-custom"
                eventKey="careers"
              >
                CAREERS
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                className="nav-link-custom"
                eventKey="contact"
              >
                CONTACT
              </Nav.Link>
            </Nav.Item>

            {/* CTA Button */}
            <Nav.Item className="ms-lg-2 mt-2 mt-lg-0">
              <Nav.Link
                className="nav-cta-button"
                onClick={() => setShowQuoteModal(true)}
              >
                GET QUOTE
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Quote Request Modal */}
      <Modal
        show={showQuoteModal}
        onHide={() => setShowQuoteModal(false)}
        centered
        size="lg"
      >
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title>Request a Free Quote</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitQuote}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Project Type *</Form.Label>
                  <Form.Select
                    name="projectType"
                    value={quoteForm.projectType}
                    onChange={handleQuoteInputChange}
                    required
                  >
                    <option value="">Select Project Type</option>
                    <option value="website">Website Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="cloud">Cloud Services</option>
                    <option value="consulting">IT Consulting</option>
                    <option value="security">Cybersecurity</option>
                    <option value="software">Custom Software</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Timeline *</Form.Label>
                  <Form.Select
                    name="timeline"
                    value={quoteForm.timeline}
                    onChange={handleQuoteInputChange}
                    required
                  >
                    <option value="">Select Timeline</option>
                    <option value="urgent">Urgent (1-2 weeks)</option>
                    <option value="standard">Standard (1-3 months)</option>
                    <option value="flexible">Flexible (3+ months)</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address *</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={quoteForm.email}
                    onChange={handleQuoteInputChange}
                    placeholder="your@email.com"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={quoteForm.phone}
                    onChange={handleQuoteInputChange}
                    placeholder="(123) 456-7890"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                name="company"
                value={quoteForm.company}
                onChange={handleQuoteInputChange}
                placeholder="Your Company Name"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Project Description *</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={quoteForm.description}
                onChange={handleQuoteInputChange}
                rows={4}
                placeholder="Briefly describe your project requirements..."
                required
              />
            </Form.Group>

            <div className="d-grid">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="btn-primary-custom"
              >
                Get Free Quote
              </Button>
            </div>

            <div className="text-center mt-3">
              <small className="text-muted">
                We'll contact you within 24 hours with a detailed quote
              </small>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Navbar>
  );
}

export default CompanyNavbar;