// Careers.jsx
import { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Modal, Accordion, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {
    Briefcase,
    People,
    Award,
    Heart,
    CurrencyDollar,
    Clock,
    Map,
    Book,
    Cpu,
    Globe,
    ArrowRight,
    ChevronRight,
    Star,
    Calendar,
    FileText,
    Send,
    ShieldCheck
} from 'react-bootstrap-icons';
import '../Style/Careers.css';

interface JobOpening {
    id: number;
    title: string;
    category: string;
    type: string;
    location: string;
    remote: boolean;
    experience: string;
    salary: string;
    description: string;
    responsibilities: string[];
    requirements: string[];
    postedDate: string;
    urgent: boolean;
}

const Careers = () => {
    const navigate = useNavigate();
    const [showApplicationModal, setShowApplicationModal] = useState(false);
    const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
    const [applicationForm, setApplicationForm] = useState({
        name: '',
        email: '',
        phone: '',
        position: '',
        resume: null,
        coverLetter: '',
        linkedin: '',
        portfolio: ''
    });
    const [activeTab, setActiveTab] = useState('all');

    // Job categories
    const jobCategories = [
        { id: 'all', name: 'All Positions', count: 8 },
        { id: 'tech', name: 'Technology', count: 4 },
        { id: 'design', name: 'Design', count: 2 },
        { id: 'business', name: 'Business', count: 2 },
        { id: 'internship', name: 'Internships', count: 1 }
    ];

    // Job openings data
    const jobOpenings = [
        {
            id: 1,
            title: 'Senior Frontend Developer',
            category: 'tech',
            type: 'Full-time',
            location: 'San Francisco, CA',
            remote: true,
            experience: '5+ years',
            salary: '$120,000 - $160,000',
            description: 'We are looking for an experienced Frontend Developer to join our team and help build cutting-edge web applications.',
            responsibilities: [
                'Develop responsive web applications using React.js',
                'Collaborate with UX/UI designers',
                'Optimize applications for maximum speed and scalability',
                'Write clean, maintainable code'
            ],
            requirements: [
                '5+ years experience with React.js',
                'Strong knowledge of JavaScript ES6+',
                'Experience with Redux or Context API',
                'Familiarity with modern frontend build tools',
                'Excellent problem-solving skills'
            ],
            postedDate: '2024-01-15',
            urgent: true
        },
        {
            id: 2,
            title: 'UI/UX Designer',
            category: 'design',
            type: 'Full-time',
            location: 'Remote',
            remote: true,
            experience: '3+ years',
            salary: '$80,000 - $110,000',
            description: 'Create beautiful and intuitive user experiences for our enterprise software solutions.',
            responsibilities: [
                'Design user interfaces for web and mobile applications',
                'Create wireframes, prototypes, and mockups',
                'Conduct user research and usability testing',
                'Collaborate with development team'
            ],
            requirements: [
                '3+ years of UI/UX design experience',
                'Proficiency in Figma or Sketch',
                'Strong portfolio of design projects',
                'Understanding of user-centered design principles',
                'Excellent communication skills'
            ],
            postedDate: '2024-01-20',
            urgent: false
        },
        {
            id: 3,
            title: 'Cloud Solutions Architect',
            category: 'tech',
            type: 'Full-time',
            location: 'New York, NY',
            remote: false,
            experience: '7+ years',
            salary: '$140,000 - $180,000',
            description: 'Design and implement scalable cloud infrastructure solutions for our clients.',
            responsibilities: [
                'Design cloud architecture solutions',
                'Lead cloud migration projects',
                'Optimize cloud costs and performance',
                'Ensure security and compliance'
            ],
            requirements: [
                'AWS/Azure/GCP certification',
                '7+ years cloud experience',
                'Strong understanding of DevOps',
                'Experience with containerization',
                'Excellent client-facing skills'
            ],
            postedDate: '2024-01-18',
            urgent: true
        },
        {
            id: 4,
            title: 'Business Development Manager',
            category: 'business',
            type: 'Full-time',
            location: 'Chicago, IL',
            remote: true,
            experience: '5+ years',
            salary: '$90,000 - $130,000 + Commission',
            description: 'Drive business growth and build strategic partnerships in the IT services sector.',
            responsibilities: [
                'Identify new business opportunities',
                'Build and maintain client relationships',
                'Prepare proposals and presentations',
                'Achieve sales targets'
            ],
            requirements: [
                '5+ years in IT sales/business development',
                'Proven track record of meeting targets',
                'Strong negotiation skills',
                'Excellent presentation skills',
                'Bachelors degree in Business or related field'
            ],
            postedDate: '2024-01-22',
            urgent: false
        },
        {
            id: 5,
            title: 'Backend Developer (Node.js)',
            category: 'tech',
            type: 'Full-time',
            location: 'Remote',
            remote: true,
            experience: '4+ years',
            salary: '$100,000 - $140,000',
            description: 'Build robust and scalable backend services for our enterprise applications.',
            responsibilities: [
                'Develop RESTful APIs',
                'Design and implement databases',
                'Write unit and integration tests',
                'Collaborate with frontend developers'
            ],
            requirements: [
                '4+ years Node.js experience',
                'Strong knowledge of MongoDB/PostgreSQL',
                'Experience with microservices architecture',
                'Understanding of DevOps practices',
                'Strong problem-solving skills'
            ],
            postedDate: '2024-01-25',
            urgent: true
        },
        {
            id: 6,
            title: 'Product Manager',
            category: 'business',
            type: 'Full-time',
            location: 'San Francisco, CA',
            remote: true,
            experience: '6+ years',
            salary: '$130,000 - $170,000',
            description: 'Lead product strategy and development for our enterprise software solutions.',
            responsibilities: [
                'Define product vision and strategy',
                'Create product roadmaps',
                'Work with cross-functional teams',
                'Analyze market and customer needs'
            ],
            requirements: [
                '6+ years product management experience',
                'Experience in SaaS/B2B software',
                'Strong analytical skills',
                'Excellent communication skills',
                'Technical background preferred'
            ],
            postedDate: '2024-01-23',
            urgent: false
        },
        {
            id: 7,
            title: 'DevOps Engineer',
            category: 'tech',
            type: 'Full-time',
            location: 'Remote',
            remote: true,
            experience: '4+ years',
            salary: '$110,000 - $150,000',
            description: 'Build and maintain our CI/CD pipelines and cloud infrastructure.',
            responsibilities: [
                'Manage cloud infrastructure',
                'Implement CI/CD pipelines',
                'Ensure system security',
                'Monitor system performance'
            ],
            requirements: [
                '4+ years DevOps experience',
                'Strong knowledge of AWS/Azure',
                'Experience with Docker and Kubernetes',
                'CI/CD tools experience',
                'Scripting skills (Bash, Python)'
            ],
            postedDate: '2024-01-28',
            urgent: false
        },
        {
            id: 8,
            title: 'Software Engineer Intern',
            category: 'internship',
            type: 'Internship',
            location: 'San Francisco, CA',
            remote: false,
            experience: 'Student',
            salary: '$25 - $35/hour',
            description: 'Summer internship opportunity for aspiring software engineers.',
            responsibilities: [
                'Assist with software development projects',
                'Learn about modern development practices',
                'Participate in team meetings',
                'Complete assigned coding tasks'
            ],
            requirements: [
                'Currently pursuing Computer Science degree',
                'Basic programming knowledge',
                'Strong desire to learn',
                'Good communication skills',
                'Available for 12-week program'
            ],
            postedDate: '2024-01-30',
            urgent: true
        }
    ];

    // Employee benefits
    const benefits = [
        {
            icon: <CurrencyDollar size={30} />,
            title: 'Competitive Salary',
            description: 'Above industry average compensation packages'
        },
        {
            icon: <Heart size={30} />,
            title: 'Health & Wellness',
            description: 'Comprehensive medical, dental, and vision insurance'
        },
        {
            icon: <Award size={30} />,
            title: 'Career Growth',
            description: 'Training programs and promotion opportunities'
        },
        {
            icon: <Clock size={30} />,
            title: 'Flexible Hours',
            description: 'Flexible working hours and remote work options'
        },
        {
            icon: <Book size={30} />,
            title: 'Learning Budget',
            description: '$2,000 annual budget for courses and conferences'
        },
        {
            icon: <Globe size={30} />,
            title: 'Remote Work',
            description: 'Work from anywhere in the world options'
        },
        {
            icon: <Cpu size={30} />,
            title: 'Tech Setup',
            description: 'Latest MacBook Pro or equivalent hardware'
        },
        {
            icon: <People size={30} />,
            title: 'Team Events',
            description: 'Regular team building activities and company retreats'
        }
    ];

    // Company culture features
    const cultureFeatures = [
        {
            title: 'Innovation First',
            description: 'We encourage experimentation and new ideas'
        },
        {
            title: 'Collaborative Environment',
            description: 'Open communication and teamwork are core values'
        },
        {
            title: 'Work-Life Balance',
            description: 'We value your time outside of work'
        },
        {
            title: 'Diversity & Inclusion',
            description: 'Equal opportunities for everyone'
        }
    ];

    // Filter jobs
    const filteredJobs = jobOpenings.filter(job => {
        return activeTab === 'all' || job.category === activeTab;
    });

    // Open application modal
    const openApplicationModal = (job: any) => {
        setSelectedJob(job);
        setApplicationForm(prev => ({
            ...prev,
            position: job.title
        }));
        setShowApplicationModal(true);
    };

    // Handle form input change
    const handleInputChange = (e: any) => {
        const { name, value, files } = e.target;
        setApplicationForm(prev => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    };

    // Handle form submission
    const handleSubmitApplication = (e: any) => {
        e.preventDefault();
        // Handle application submission
        console.log('Application submitted:', applicationForm);
        // Reset form
        setApplicationForm({
            name: '',
            email: '',
            phone: '',
            position: '',
            resume: null,
            coverLetter: '',
            linkedin: '',
            portfolio: ''
        });
        setShowApplicationModal(false);
        alert('Thank you for your application! We will review it shortly.');
    };

    // FAQ items
    const faqItems = [
        {
            question: 'What is the interview process like?',
            answer: 'Our interview process typically includes: 1) Initial screening call, 2) Technical assessment, 3) Team interview, 4) Final interview with leadership.'
        },
        {
            question: 'Do you offer remote work options?',
            answer: 'Yes, most positions offer remote work options. We have a hybrid work model with flexibility for employees.'
        },
        {
            question: 'What is the typical timeline for hiring?',
            answer: 'The hiring process usually takes 2-4 weeks from initial application to offer.'
        },
        {
            question: 'Do you provide relocation assistance?',
            answer: 'Yes, we offer relocation assistance for certain positions and locations.'
        },
        {
            question: 'What benefits do interns receive?',
            answer: 'Interns receive competitive pay, mentorship, learning opportunities, and potential full-time offers.'
        }
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className="careers-page">
            {/* Hero Section */}
            <section className="careers-hero-section">
                <Container>
                    <Row className="align-items-center min-vh-80">
                        <Col lg={6} className="hero-content">
                            <h1 className="hero-title">
                                Build Your <span className="gradient-text">Career</span> With Us
                            </h1>
                            <p className="hero-description">
                                Join a team of innovators, creators, and problem-solvers.
                                We're building the future of technology, and we want you to be part of it.
                            </p>
                            <div className="hero-buttons">
                                <Button
                                    className="btn-primary-custom me-3"
                                    onClick={() => scrollToSection('open-positions')}
                                >
                                    View Open Positions <ArrowRight className="ms-2" />
                                </Button>
                                <Button
                                    variant="outline-light"
                                    className="btn-outline-custom"
                                    onClick={() => scrollToSection('benefits')}
                                >
                                    Our Benefits
                                </Button>
                            </div>
                        </Col>
                        <Col lg={6} className="hero-image-col">
                            <div className="careers-hero-image">
                                <div className="floating-shape shape-1"></div>
                                <div className="floating-shape shape-2"></div>
                                <div className="main-hero-image">
                                    <div className="image-placeholder">
                                        <Briefcase size={100} className="briefcase-icon" color="#00d4ff" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Why Join Us */}
            <section className="why-join-section py-5 bg-light">
                <Container>
                    <Row className="mb-5">
                        <Col lg={8} className="mx-auto text-center">
                            <h2 className="section-title">
                                Why <span className="gradient-text">Join Our Team</span>
                            </h2>
                            <p className="section-subtitle">
                                We offer more than just a job - we offer a career path with growth opportunities
                            </p>
                        </Col>
                    </Row>
                    <Row className="g-4">
                        {cultureFeatures.map((feature, index) => (
                            <Col lg={3} md={6} key={index}>
                                <Card className="culture-card">
                                    <Card.Body className="text-center">
                                        <div className="culture-number">{index + 1}</div>
                                        <Card.Title>{feature.title}</Card.Title>
                                        <Card.Text>{feature.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Employee Benefits */}
            <section id="benefits" className="benefits-section py-5">
                <Container>
                    <Row className="mb-5">
                        <Col lg={8} className="mx-auto text-center">
                            <h2 className="section-title">
                                Employee <span className="gradient-text">Benefits</span>
                            </h2>
                            <p className="section-subtitle">
                                We take care of our team with comprehensive benefits and perks
                            </p>
                        </Col>
                    </Row>
                    <Row className="g-4">
                        {benefits.map((benefit, index) => (
                            <Col lg={3} md={6} key={index}>
                                <Card className="benefit-card">
                                    <Card.Body className="text-center">
                                        <div className="benefit-icon">
                                            {benefit.icon}
                                        </div>
                                        <Card.Title>{benefit.title}</Card.Title>
                                        <Card.Text>{benefit.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Job Categories */}
            <section className="categories-section py-5 bg-dark">
                <Container>
                    <Row className="mb-5">
                        <Col lg={8} className="mx-auto text-center">
                            <h2 className="section-title text-white">
                                Explore <span className="gradient-text">Job Categories</span>
                            </h2>
                        </Col>
                    </Row>
                    <Row className="g-3">
                        {jobCategories.map(category => (
                            <Col lg={2} md={4} sm={6} key={category.id}>
                                <div
                                    className={`category-card ${activeTab === category.id ? 'active' : ''}`}
                                    onClick={() => setActiveTab(category.id)}
                                >
                                    <h5>{category.name}</h5>
                                    <div className="job-count">{category.count} Positions</div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Job Openings */}
            <section id="open-positions" className="jobs-section py-5">
                <Container>
                    <Row className="mb-5 align-items-center">
                        <Col lg={6}>
                            <h2 className="section-title mb-0">
                                Open <span className="gradient-text">Positions</span>
                            </h2>
                        </Col>
                        <Col lg={6} className="text-lg-end">
                            <div className="jobs-count">
                                Showing {filteredJobs.length} of {jobOpenings.length} positions
                            </div>
                        </Col>
                    </Row>

                    <div className="jobs-list">
                        {filteredJobs.map(job => (
                            <Card key={job.id} className="job-card mb-4">
                                <Card.Body>
                                    <Row className="align-items-center">
                                        <Col lg={8}>
                                            <div className="job-header">
                                                {job.urgent && <Badge bg="danger" className="urgent-badge">Urgent</Badge>}
                                                <h4 className="job-title">{job.title}</h4>
                                                <div className="job-meta">
                                                    <span className="meta-item">
                                                        <Briefcase size={14} className="me-1" />
                                                        {job.type}
                                                    </span>
                                                    <span className="meta-item">
                                                        <Map size={14} className="me-1" />
                                                        {job.location}
                                                        {job.remote && <span className="remote-tag">Remote</span>}
                                                    </span>
                                                    <span className="meta-item">
                                                        <Star size={14} className="me-1" />
                                                        {job.experience}
                                                    </span>
                                                    <span className="meta-item">
                                                        <CurrencyDollar size={14} className="me-1" />
                                                        {job.salary}
                                                    </span>
                                                    <span className="meta-item">
                                                        <Calendar size={14} className="me-1" />
                                                        Posted: {job.postedDate}
                                                    </span>
                                                </div>
                                                <p className="job-description">{job.description}</p>
                                            </div>
                                        </Col>
                                        <Col lg={4} className="text-lg-end">
                                            <Button
                                                className="btn-primary-custom"
                                                onClick={() => openApplicationModal(job)}
                                            >
                                                Apply Now <ChevronRight className="ms-2" />
                                            </Button>
                                            <Button
                                                variant="outline-primary"
                                                className="mt-2 w-100"
                                                onClick={() => openApplicationModal(job)}
                                            >
                                                <FileText size={16} className="me-2" />
                                                Quick Apply
                                            </Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>

                    {filteredJobs.length === 0 && (
                        <div className="no-jobs text-center py-5">
                            <h4>No positions available in this category</h4>
                            <p>Check back soon or explore other categories</p>
                            <Button
                                variant="outline-primary"
                                onClick={() => setActiveTab('all')}
                            >
                                View All Positions
                            </Button>
                        </div>
                    )}
                </Container>
            </section>

            {/* FAQ Section */}
            <section className="faq-section py-5 bg-light">
                <Container>
                    <Row className="mb-5">
                        <Col lg={8} className="mx-auto text-center">
                            <h2 className="section-title">
                                Frequently Asked <span className="gradient-text">Questions</span>
                            </h2>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            <Accordion className="careers-faq">
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

            {/* Application CTA */}
            <section className="application-cta py-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8} className="text-center">
                            <Card className="cta-card">
                                <Card.Body>
                                    <h2 className="cta-title mb-4">
                                        Don't See Your Perfect Role?
                                    </h2>
                                    <p className="cta-text mb-4">
                                        We're always looking for talented individuals.
                                        Send us your resume and we'll contact you when a matching position opens.
                                    </p>
                                    <div className="cta-buttons">
                                        <Button
                                            className="btn-primary-custom me-3"
                                            onClick={() => {
                                                setSelectedJob(null);
                                                setShowApplicationModal(true);
                                            }}
                                        >
                                            Submit General Application
                                        </Button>
                                        <Button
                                            variant="outline-primary"
                                            className="btn-outline-custom"
                                            onClick={() => navigate('/contact')}
                                        >
                                            Contact Recruiting Team
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Application Modal */}
            <Modal
                show={showApplicationModal}
                onHide={() => setShowApplicationModal(false)}
                size="lg"
                centered
                className="application-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {selectedJob ? `Apply for: ${selectedJob.title}` : 'General Application'}
                    </Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmitApplication}>
                    <Modal.Body>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Full Name *</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={applicationForm.name}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="John Doe"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email Address *</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={applicationForm.email}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="john@example.com"
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
                                        value={applicationForm.phone}
                                        onChange={handleInputChange}
                                        placeholder="(123) 456-7890"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Position *</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="position"
                                        value={applicationForm.position}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Desired position"
                                        readOnly={!!selectedJob}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Label>Resume/CV *</Form.Label>
                            <Form.Control
                                type="file"
                                name="resume"
                                onChange={handleInputChange}
                                accept=".pdf,.doc,.docx"
                                required
                            />
                            <Form.Text className="text-muted">
                                Accepted formats: PDF, DOC, DOCX (Max: 5MB)
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Cover Letter</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="coverLetter"
                                value={applicationForm.coverLetter}
                                onChange={handleInputChange}
                                rows={4}
                                placeholder="Tell us why you're interested in this position..."
                            />
                        </Form.Group>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>LinkedIn Profile</Form.Label>
                                    <Form.Control
                                        type="url"
                                        name="linkedin"
                                        value={applicationForm.linkedin}
                                        onChange={handleInputChange}
                                        placeholder="https://linkedin.com/in/yourprofile"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Portfolio/GitHub</Form.Label>
                                    <Form.Control
                                        type="url"
                                        name="portfolio"
                                        value={applicationForm.portfolio}
                                        onChange={handleInputChange}
                                        placeholder="https://github.com/yourprofile"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="privacy-notice">
                            <ShieldCheck size={16} className="me-2" />
                            <small>Your information is secure and will only be used for recruitment purposes.</small>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowApplicationModal(false)}>
                            Cancel
                        </Button>
                        <Button type="submit" className="btn-primary-custom">
                            <Send size={16} className="me-2" />
                            Submit Application
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    );
};

export default Careers;