// Home.jsx
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  LightningCharge,
  GraphUp,
  CheckCircle,
  Headset,
  Globe,
  Server
} from 'react-bootstrap-icons';
import '../Style/Home.css';


const Home = () => {
  const navigate = useNavigate();
  // Services data
  const services = [
    {
      icon: <Server size={40} />,
      title: "Cloud Solutions",
      description: "Secure and scalable cloud infrastructure for your business needs"
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Cyber Security",
      description: "Advanced security solutions to protect your digital assets"
    },
    {
      icon: <LightningCharge size={40} />,
      title: "IT Consulting",
      description: "Expert guidance to optimize your technology investments"
    },
    {
      icon: <GraphUp size={40} />,
      title: "Data Analytics",
      description: "Transform data into actionable business insights"
    }
  ];

  // Clients data
  const clients = [
    { name: "Client A", logo: "CA" },
    { name: "Client B", logo: "CB" },
    { name: "Client C", logo: "CC" },
    { name: "Client D", logo: "CD" },
    { name: "Client E", logo: "CE" },
    { name: "Client F", logo: "CF" }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="hero-content">
              <h1 className="hero-title">
                Transforming Businesses with
                <span className="gradient-text"> Innovative IT Solutions</span>
              </h1>
              <p className="hero-description">
                We provide cutting-edge technology services that drive growth,
                enhance security, and optimize operations for businesses of all sizes.
              </p>
              <div className="hero-buttons">
                <Button
                  onClick={() => navigate('/services')}
                  className="btn-primary-custom me-3"
                >
                  Our Services <ArrowRight className="ms-2" />
                </Button>
                <Button
                  onClick={() => navigate('/services')}
                  variant="outline-light"
                  className="btn-outline-custom"
                >
                  Get Started
                </Button>
              </div>
              <div className="hero-stats mt-5">
                <Row>
                  <Col xs={6} md={3}>
                    <div className="stat-item">
                      <h3>500+</h3>
                      <p>Projects Delivered</p>
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
                      <h3>50+</h3>
                      <p>Team Experts</p>
                    </div>
                  </Col>
                  <Col xs={6} md={3}>
                    <div className="stat-item">
                      <h3>24/7</h3>
                      <p>Support Available</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={6} className="hero-image-col">
              <div className="hero-image">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
                <div className="main-hero-image">
                  {/* Placeholder for hero image - replace with actual image */}
                  <div className="image-placeholder">
                    <Globe size={100} className="globe-icon" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="services-section py-5">
        <Container>
          <Row className="mb-5">
            <Col lg={6} className="mx-auto text-center">
              <h2 className="section-title">
                Our <span className="gradient-text">Services</span>
              </h2>
              <p className="section-subtitle">
                Comprehensive IT solutions tailored to your business needs
              </p>
            </Col>
          </Row>
          <Row>
            {services.map((service, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <Card className="service-card h-100">
                  <Card.Body>
                    <div className="service-icon">
                      {service.icon}
                    </div>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                    <Link to="/services" className="service-link">
                      Learn More <ArrowRight className="ms-1" />
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section py-5 bg-dark">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="section-title text-white">
                Why Choose <span className="gradient-text">Us</span>
              </h2>
              <p className="text-light mb-4">
                We stand out with our commitment to excellence,
                innovative approach, and client-focused solutions.
              </p>
              <ul className="features-list">
                {[
                  "Expert Team with 10+ Years Experience",
                  "24/7 Technical Support",
                  "Customized Solutions",
                  "Competitive Pricing",
                  "Quick Deployment",
                  "Proactive Maintenance"
                ].map((feature, index) => (
                  <li key={index}>
                    <CheckCircle className="me-2" color="#00d4ff" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Col>
            <Col lg={6}>
              <Card className="featured-card">
                <Card.Body>
                  <Headset size={60} className="mb-3" color="#00d4ff" />
                  <h3>Ready to Transform Your IT Infrastructure?</h3>
                  <p>
                    Schedule a free consultation with our experts and discover
                    how we can help your business grow.
                  </p>
                  <Button
                    onClick={() => navigate('/services')}

                    className="btn-primary-custom mt-3"
                  >
                    Book Free Consultation
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Clients Section */}
      <section className="clients-section py-5">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">
                Trusted by <span className="gradient-text">Leading Companies</span>
              </h2>
              <p className="section-subtitle">
                We partner with businesses across various industries
              </p>
            </Col>
          </Row>
          <Row className="client-logos">
            {clients.map((client, index) => (
              <Col xs={4} md={2} className="text-center mb-4" key={index}>
                <div className="client-logo">
                  <div className="logo-placeholder">
                    {client.logo}
                  </div>
                  <p className="client-name mt-2">{client.name}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 className="cta-title mb-4">
                Ready to Take Your Business to the Next Level?
              </h2>
              <p className="cta-text mb-4">
                Contact us today for a free IT assessment and discover
                how our solutions can transform your operations.
              </p>
              <Button
                onClick={() => navigate('/services')}

                size="lg"
                className="btn-primary-custom"
              >
                Get Started Now
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;