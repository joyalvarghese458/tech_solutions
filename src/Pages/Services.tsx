import React, { useState, type JSX } from 'react';
import { Container, Row, Col, Card, Button, Tab, Tabs, Accordion } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {
  Cloud,
  ShieldCheck,
  Laptop,
  Database,
  Wifi,
  Phone,
  Code,
  Server,
  GraphUp,
  Gear,
  Tools,
  CheckCircle,
  ArrowRight,
  Clock,
  Headset,
  Award
} from 'react-bootstrap-icons';
import '../Style/Services.css';

type ServiceCategoryId = 'it-infrastructure' | 'cloud-solutions' | 'cybersecurity' | 'software-dev';

interface ServiceDetail {
  title: string;
  description: string;
  features: string[];
  icon: JSX.Element;
  price: string;
}

const Services: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<ServiceCategoryId>('it-infrastructure');

  // Services categories
  const serviceCategories: {
    id: ServiceCategoryId;
    icon: JSX.Element;
    title: string;
    description: string;
  }[] = [
      {
        id: 'it-infrastructure',
        icon: <Server size={30} />,
        title: 'IT Infrastructure',
        description: 'Robust and scalable infrastructure solutions'
      },
      {
        id: 'cloud-solutions',
        icon: <Cloud size={30} />,
        title: 'Cloud Solutions',
        description: 'Secure cloud migration and management'
      },
      {
        id: 'cybersecurity',
        icon: <ShieldCheck size={30} />,
        title: 'Cybersecurity',
        description: 'Complete digital protection services'
      },
      {
        id: 'software-dev',
        icon: <Code size={30} />,
        title: 'Software Development',
        description: 'Custom software solutions'
      }
    ];

  // Detailed services typed as a record keyed by ServiceCategoryId
  const detailedServices: Record<ServiceCategoryId, ServiceDetail[]> = {
    'it-infrastructure': [
      {
        title: 'Network Setup & Management',
        description: 'Complete network infrastructure design, installation, and ongoing management.',
        features: ['Network Design', 'Hardware Installation', '24/7 Monitoring', 'Performance Optimization'],
        icon: <Wifi size={40} />,
        price: 'Starting at $999/mo'
      },
      {
        title: 'Server Management',
        description: 'Professional server setup, maintenance, and optimization services.',
        features: ['Server Setup', 'Regular Maintenance', 'Security Updates', 'Backup Solutions'],
        icon: <Server size={40} />,
        price: 'Starting at $1,499/mo'
      },
      {
        title: 'IT Support & Help Desk',
        description: '24/7 technical support and help desk services for your organization.',
        features: ['24/7 Support', 'Remote Assistance', 'On-site Support', 'Quick Response'],
        icon: <Headset size={40} />,
        price: 'Starting at $799/mo'
      }
    ],
    'cloud-solutions': [
      {
        title: 'Cloud Migration',
        description: 'Seamless migration of your infrastructure to secure cloud platforms.',
        features: ['Strategy Planning', 'Data Migration', 'Testing', 'Training'],
        icon: <Cloud size={40} />,
        price: 'Custom Pricing'
      },
      {
        title: 'Cloud Management',
        description: 'Complete management and optimization of your cloud infrastructure.',
        features: ['Monitoring', 'Cost Optimization', 'Security Management', 'Performance Tuning'],
        icon: <Gear size={40} />,
        price: 'Starting at $1,299/mo'
      },
      {
        title: 'Hybrid Cloud Solutions',
        description: 'Integration of on-premise and cloud infrastructure for optimal performance.',
        features: ['Hybrid Setup', 'Data Sync', 'Security Integration', 'Scalability'],
        icon: <Database size={40} />,
        price: 'Starting at $2,499/mo'
      }
    ],
    'cybersecurity': [
      {
        title: 'Security Assessment',
        description: 'Comprehensive security audit and vulnerability assessment.',
        features: ['Vulnerability Scan', 'Penetration Testing', 'Risk Analysis', 'Security Report'],
        icon: <ShieldCheck size={40} />,
        price: 'Starting at $2,999'
      },
      {
        title: 'Managed Security',
        description: '24/7 security monitoring and threat detection services.',
        features: ['Threat Detection', 'Incident Response', 'Security Updates', 'Compliance'],
        icon: <ShieldCheck size={40} />,
        price: 'Starting at $1,999/mo'
      },
      {
        title: 'Data Protection',
        description: 'Complete data encryption and protection solutions.',
        features: ['Data Encryption', 'Access Control', 'Backup Solutions', 'Recovery Plans'],
        icon: <Database size={40} />,
        price: 'Starting at $1,499/mo'
      }
    ],
    'software-dev': [
      {
        title: 'Custom Software Development',
        description: 'Tailored software solutions for your specific business needs.',
        features: ['Requirements Analysis', 'UI/UX Design', 'Development', 'Testing'],
        icon: <Code size={40} />,
        price: 'Custom Project-based'
      },
      {
        title: 'Web Application Development',
        description: 'Modern web applications with responsive design and robust functionality.',
        features: ['Frontend Development', 'Backend Development', 'Database Design', 'Deployment'],
        icon: <Laptop size={40} />,
        price: 'Starting at $5,999'
      },
      {
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile applications for iOS and Android.',
        features: ['iOS Development', 'Android Development', 'App Store Deployment', 'Maintenance'],
        icon: <Phone size={40} />,
        price: 'Starting at $8,999'
      }
    ]
  };

  // Process steps
  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We discuss your requirements and business goals',
      icon: <Headset size={24} />
    },
    {
      number: '02',
      title: 'Planning',
      description: 'We create a detailed project plan and strategy',
      icon: <GraphUp size={24} />
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Our experts implement the solution',
      icon: <Tools size={24} />
    },
    {
      number: '04',
      title: 'Support',
      description: 'Ongoing support and maintenance',
      icon: <ShieldCheck size={24} />
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: 'How long does it take to implement your services?',
      answer: 'Implementation time varies based on the service. Standard IT infrastructure setup takes 2-4 weeks, while custom software development can take 3-6 months.'
    },
    {
      question: 'Do you offer 24/7 support?',
      answer: 'Yes, we provide 24/7 technical support for all our managed services. Emergency support is available within 15 minutes response time.'
    },
    {
      question: 'Can you work with our existing infrastructure?',
      answer: 'Absolutely! We specialize in integrating with existing systems and can optimize your current infrastructure while adding new capabilities.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve businesses across all industries including healthcare, finance, retail, manufacturing, and technology sectors.'
    },
    {
      question: 'Do you offer custom solutions?',
      answer: 'Yes, we specialize in creating custom-tailored solutions that perfectly fit your unique business requirements and processes.'
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero-section">
        <Container>
          <Row className="align-items-center min-vh-80">
            <Col lg={6} className="hero-content">
              <h1 className="hero-title">
                Professional <span className="gradient-text">IT Services</span>
              </h1>
              <p className="hero-description">
                Comprehensive IT solutions tailored to drive your business forward.
                From infrastructure to cybersecurity, we've got you covered.
              </p>
              <div className="hero-buttons">
                <Button
                  className="btn-primary-custom me-3"
                  onClick={() => navigate('/contact')}
                >
                  Get Free Consultation
                </Button>
                <Button
                  variant="outline-light"
                  className="btn-outline-custom"
                  onClick={() => navigate('/contact')}
                >
                  Request Quote
                </Button>
              </div>
            </Col>
            <Col lg={6} className="hero-image-col">
              <div className="services-hero-image">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="main-hero-image">
                  <div className="image-placeholder">
                    <Gear size={100} className="gear-icon" color="#00d4ff" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Categories */}
      <section className="categories-section py-5">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">
                Our <span className="gradient-text">Service Categories</span>
              </h2>
              <p className="section-subtitle">
                Explore our comprehensive range of IT services
              </p>
            </Col>
          </Row>

          <Tabs
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k as ServiceCategoryId)}
            className="service-categories-tabs mb-5"
          >
            {serviceCategories.map((category) => (
              <Tab
                key={category.id}
                eventKey={category.id}
                title={
                  <div className="category-tab">
                    <div className="category-icon">
                      {category.icon}
                    </div>
                    <div className="category-text">
                      <h6>{category.title}</h6>
                      <small>{category.description}</small>
                    </div>
                  </div>
                }
              />
            ))}
          </Tabs>

          {/* Services Grid */}
          <Row className="services-grid">
            {detailedServices[activeTab]?.map((service, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <Card className="service-detail-card h-100">
                  <Card.Body>
                    <div className="service-icon">
                      {service.icon}
                    </div>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>

                    <div className="service-features mb-3">
                      <h6>Key Features:</h6>
                      <ul>
                        {service.features.map((feature, i) => (
                          <li key={i}>
                            <CheckCircle size={14} className="me-2" color="#00d4ff" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="service-price">
                      <span className="price-tag">{service.price}</span>
                    </div>

                    <div className="service-actions">
                      <Button
                        variant="outline-primary"
                        className="btn-service"
                        onClick={() => navigate('/contact')}
                      >
                        Learn More <ArrowRight className="ms-2" />
                      </Button>
                      <Button
                        className="btn-primary-custom ms-2"
                        onClick={() => navigate('/contact')}
                      >
                        Get Started
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Why Choose Our Services */}
      <section className="why-services-section py-5 bg-dark">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title text-white">
                Why Choose <span className="gradient-text">Our Services</span>
              </h2>
            </Col>
          </Row>

          <Row className="g-4">
            <Col lg={3} md={6} className="mb-4">
              <Card className="benefit-card">
                <Card.Body className="text-center">
                  <Award size={40} className="mb-3" color="#00d4ff" />
                  <h5>Certified Experts</h5>
                  <p>Our team holds industry-leading certifications and 10+ years of experience</p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6} className="mb-4">
              <Card className="benefit-card">
                <Card.Body className="text-center">
                  <Clock size={40} className="mb-3" color="#00d4ff" />
                  <h5>24/7 Support</h5>
                  <p>Round-the-clock technical support with 15-minute emergency response</p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6} className="mb-4">
              <Card className="benefit-card">
                <Card.Body className="text-center">
                  <ShieldCheck size={40} className="mb-3" color="#00d4ff" />
                  <h5>Enterprise Security</h5>
                  <p>Military-grade security protocols to protect your valuable data</p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6} className="mb-4">
              <Card className="benefit-card">
                <Card.Body className="text-center">
                  <GraphUp size={40} className="mb-3" color="#00d4ff" />
                  <h5>Proven Results</h5>
                  <p>99% client satisfaction rate with measurable ROI for our services</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Process */}
      <section className="process-section py-5">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">
                Our <span className="gradient-text">Process</span>
              </h2>
              <p className="section-subtitle">
                A systematic approach to delivering exceptional results
              </p>
            </Col>
          </Row>

          <Row className="process-steps">
            {processSteps.map((step, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <div className="process-step">
                  <div className="step-number">{step.number}</div>
                  <div className="step-icon">
                    {step.icon}
                  </div>
                  <h5>{step.title}</h5>
                  <p>{step.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-5 bg-dark">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title text-white">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <p className="text-light">
                Find answers to common questions about our services
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={10}>
              <Accordion defaultActiveKey="0" className="services-faq">
                {faqItems.map((item, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>
                      {item.question}
                    </Accordion.Header>
                    <Accordion.Body>
                      {item.answer}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <Card className="cta-card">
                <Card.Body>
                  <h2 className="cta-title mb-4">
                    Ready to Transform Your IT Infrastructure?
                  </h2>
                  <p className="cta-text mb-4">
                    Contact us today for a free consultation and discover how our
                    services can drive your business growth.
                  </p>
                  <div className="cta-buttons">
                    <Button
                      className="btn-primary-custom me-3"
                      onClick={() => navigate('/contact')}
                    >
                      Get Free Consultation
                    </Button>
                    <Button
                      variant="outline-primary"
                      className="btn-outline-custom"
                      onClick={() => navigate('/contact')}
                    >
                      View Pricing
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

export default Services;