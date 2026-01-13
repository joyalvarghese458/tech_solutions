// About.jsx
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Button, 
  Tab,
  Tabs
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { 
  PeopleFill,
  Trophy,
  ClockHistory,
  HeartFill,
  LightbulbFill,
  ShieldFillCheck,
  Award,
} from 'react-bootstrap-icons';
import '../Style/About.css';


const About = () => {
      const navigate = useNavigate();

  // Team members data
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "SJ",
      experience: "15+ years"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "MC",
      experience: "12+ years"
    },
    {
      name: "Emma Wilson",
      role: "Head of Security",
      image: "EW",
      experience: "10+ years"
    },
    {
      name: "David Brown",
      role: "Lead Developer",
      image: "DB",
      experience: "8+ years"
    }
  ];

  // Values data
  const values = [
    {
      icon: <LightbulbFill size={30} />,
      title: "Innovation",
      description: "Constantly exploring new technologies and approaches"
    },
    {
      icon: <ShieldFillCheck size={30} />,
      title: "Integrity",
      description: "Honest and transparent in all our dealings"
    },
    {
      icon: <PeopleFill size={30} />,
      title: "Collaboration",
      description: "Working together for the best results"
    },
    {
      icon: <Trophy size={30} />,
      title: "Excellence",
      description: "Striving for the highest quality in everything we do"
    }
  ];

  // Milestones data
  const milestones = [
    { year: "2010", event: "Company Founded" },
    { year: "2012", event: "First Major Client" },
    { year: "2015", event: "Expanded to International Market" },
    { year: "2018", event: "Launched Cloud Division" },
    { year: "2020", event: "Opened Second Office" },
    { year: "2023", event: "Reached 500+ Projects" }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero-section">
        <Container>
          <Row className="align-items-center min-vh-80">
            <Col lg={6}>
              <h1 className="about-hero-title">
                About <span className="gradient-text">Our Company</span>
              </h1>
              <p className="about-hero-description">
                Founded in 2010, we've been at the forefront of IT innovation, 
                helping businesses transform their operations through cutting-edge 
                technology solutions.
              </p>
              <div className="hero-stats mt-4">
                <Row>
                  <Col xs={6} md={3}>
                    <div className="stat-item">
                      <h3>13+</h3>
                      <p>Years Experience</p>
                    </div>
                  </Col>
                  <Col xs={6} md={3}>
                    <div className="stat-item">
                      <h3>200+</h3>
                      <p>Happy Clients</p>
                    </div>
                  </Col>
                  <Col xs={6} md={3}>
                    <div className="stat-item">
                      <h3>500+</h3>
                      <p>Projects Completed</p>
                    </div>
                  </Col>
                  <Col xs={6} md={3}>
                    <div className="stat-item">
                      <h3>50+</h3>
                      <p>Team Members</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-hero-image">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="image-placeholder">
                  <PeopleFill size={80} className="people-icon" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section py-5">
        <Container>
          <Row className="g-4">
            <Col lg={6}>
              <Card className="mission-card h-100">
                <Card.Body>
                  <div className="card-icon">
                    <HeartFill size={40} />
                  </div>
                  <Card.Title>Our Mission</Card.Title>
                  <Card.Text>
                    To empower businesses with innovative technology solutions that drive 
                    growth, enhance efficiency, and create sustainable competitive advantages 
                    in the digital age.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6}>
              <Card className="vision-card h-100">
                <Card.Body>
                  <div className="card-icon">
                    <LightbulbFill size={40} />
                  </div>
                  <Card.Title>Our Vision</Card.Title>
                  <Card.Text>
                    To be the leading IT solutions provider globally, recognized for our 
                    commitment to excellence, innovation, and creating lasting value for 
                    our clients and communities.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Values Section */}
      <section className="values-section py-5 bg-dark">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title text-white">
                Our <span className="gradient-text">Core Values</span>
              </h2>
              <p className="text-light">
                These principles guide everything we do
              </p>
            </Col>
          </Row>
          <Row>
            {values.map((value, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <Card className="value-card h-100">
                  <Card.Body className="text-center">
                    <div className="value-icon">
                      {value.icon}
                    </div>
                    <Card.Title>{value.title}</Card.Title>
                    <Card.Text>{value.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Our Story Section */}
      <section className="story-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="section-title">
                Our <span className="gradient-text">Journey</span>
              </h2>
              <p className="mb-4">
                From a small startup to a leading IT solutions provider, our journey 
                has been marked by continuous growth and innovation.
              </p>
              
              <Tabs defaultActiveKey="history" className="story-tabs">
                <Tab eventKey="history" title="History">
                  <div className="tab-content">
                    <h4>Building Excellence Since 2010</h4>
                    <p>
                      Founded by Sarah Johnson with just three team members, we started 
                      as a small IT consulting firm. Through dedication and innovation, 
                      we've grown into a full-service technology partner.
                    </p>
                  </div>
                </Tab>
                <Tab eventKey="growth" title="Growth">
                  <div className="tab-content">
                    <h4>Strategic Expansion</h4>
                    <p>
                      We've expanded our services, opened new offices, and built a 
                      talented team of experts. Our client base has grown to include 
                      businesses of all sizes across various industries.
                    </p>
                  </div>
                </Tab>
                <Tab eventKey="future" title="Future">
                  <div className="tab-content">
                    <h4>Looking Ahead</h4>
                    <p>
                      We're committed to staying at the forefront of technology, 
                      exploring AI, machine learning, and sustainable tech solutions 
                      to serve our clients better.
                    </p>
                  </div>
                </Tab>
              </Tabs>
            </Col>
            <Col lg={6}>
              <div className="timeline">
                {milestones.map((milestone, index) => (
                  <div className="timeline-item" key={index}>
                    <div className="timeline-year">{milestone.year}</div>
                    <div className="timeline-content">
                      <h5>{milestone.event}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="team-section py-5 bg-dark">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title text-white">
                Meet Our <span className="gradient-text">Leadership Team</span>
              </h2>
              <p className="text-light">
                Experienced professionals dedicated to your success
              </p>
            </Col>
          </Row>
          <Row>
            {teamMembers.map((member, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <Card className="team-card">
                  <Card.Body className="text-center">
                    <div className="team-image">
                      <div className="image-circle">
                        {member.image}
                      </div>
                    </div>
                    <Card.Title className="mt-3">{member.name}</Card.Title>
                    <Card.Subtitle className="mb-2 gradient-text">
                      {member.role}
                    </Card.Subtitle>
                    <Card.Text>
                      <ClockHistory size={14} className="me-1" />
                      {member.experience} experience
                    </Card.Text>
                    <div className="team-social">
                      <span className="social-link">LinkedIn</span>
                      <span className="social-link">Twitter</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section py-5">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">
                Certifications & <span className="gradient-text">Awards</span>
              </h2>
              <p className="section-subtitle">
                Recognized for excellence in IT services
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {[
              "ISO 27001 Certified",
              "Microsoft Gold Partner",
              "AWS Advanced Partner",
              "Best IT Services 2022",
              "Innovation Excellence Award"
            ].map((cert, index) => (
              <Col md={4} key={index}>
                <Card className="cert-card">
                  <Card.Body className="text-center">
                    <Award size={40} className="mb-3" color="#00d4ff" />
                    <Card.Title>{cert}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <Card className="cta-card">
                <Card.Body>
                  <h2 className="cta-title mb-4">
                    Want to Learn More About Us?
                  </h2>
                  <p className="cta-text mb-4">
                    Schedule a meeting with our team to discuss how we can help 
                    your business achieve its technology goals.
                  </p>
                  <div className="cta-buttons">
                    <Button 
                                 onClick={() => navigate('/services')}

                      className="btn-primary-custom me-3"
                    >
                      Contact Us
                    </Button>
                    <Button 
                                  onClick={() => navigate('/services')}

                      variant="outline-primary"
                      className="btn-outline-custom"
                    >
                      View Services
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

export default About;