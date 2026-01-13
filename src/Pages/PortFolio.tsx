// Portfolio.jsx
import { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Tab, Tabs } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {
    Filter,
    Search,
    Eye,
    Globe,
    Code,
    ShieldCheck,
    Cloud,
    Database,
    Phone,
    Laptop,
    Award,
    Calendar,
    People,
    ArrowRight,
    ChevronRight,
    Star,
    CheckCircle
} from 'react-bootstrap-icons';
import '../Style/PortFolio.css';

const Portfolio = () => {
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const [showModal, setShowModal] = useState(false);

    // Project categories
    const categories = [
        { id: 'all', name: 'All Projects', icon: <Filter size={18} /> },
        { id: 'web-dev', name: 'Web Development', icon: <Globe size={18} /> },
        { id: 'mobile', name: 'Mobile Apps', icon: <Phone size={18} /> },
        { id: 'cloud', name: 'Cloud Solutions', icon: <Cloud size={18} /> },
        { id: 'security', name: 'Cybersecurity', icon: <ShieldCheck size={18} /> },
        { id: 'software', name: 'Custom Software', icon: <Code size={18} /> },
        { id: 'data', name: 'Data Analytics', icon: <Database size={18} /> }
    ];

    // Projects data
    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            category: 'web-dev',
            client: 'FashionHub Retail',
            description: 'Full-featured e-commerce platform with advanced inventory management and payment integration.',
            technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
            duration: '4 months',
            teamSize: '5 members',
            results: ['40% increase in sales', '99.9% uptime', '50% faster load times'],
            featured: true,
            liveUrl: 'https://fashionhub.example.com'
        },
        {
            id: 2,
            title: 'Healthcare Mobile App',
            category: 'mobile',
            client: 'MediCare Solutions',
            description: 'HIPAA-compliant mobile application for patient management and telemedicine services.',
            technologies: ['React Native', 'Firebase', 'Twilio', 'Stripe'],
            image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
            duration: '6 months',
            teamSize: '8 members',
            results: ['30k+ downloads', '4.8 star rating', '95% user retention'],
            featured: true,
            liveUrl: 'https://apps.apple.com/medi-care'
        },
        {
            id: 3,
            title: 'Cloud Migration',
            category: 'cloud',
            client: 'Global Finance Inc',
            description: 'Complete migration of legacy systems to AWS with enhanced security and scalability.',
            technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
            duration: '8 months',
            teamSize: '12 members',
            results: ['60% cost reduction', '200% performance boost', 'Zero downtime'],
            featured: false
        },
        {
            id: 4,
            title: 'Banking Security System',
            category: 'security',
            client: 'SecureBank International',
            description: 'Advanced cybersecurity solution with real-time threat detection and prevention.',
            technologies: ['Python', 'Machine Learning', 'Blockchain', 'SIEM'],
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop',
            duration: '10 months',
            teamSize: '15 members',
            results: ['99.9% threat detection', 'Zero breaches', 'ISO 27001 certified'],
            featured: true
        },
        {
            id: 5,
            title: 'ERP System',
            category: 'software',
            client: 'Manufacturing Corp',
            description: 'Custom Enterprise Resource Planning system for manufacturing operations.',
            technologies: ['.NET', 'SQL Server', 'Angular', 'Azure'],
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
            duration: '12 months',
            teamSize: '20 members',
            results: ['35% efficiency gain', 'Real-time analytics', 'Seamless integration'],
            featured: false
        },
        {
            id: 6,
            title: 'Data Analytics Platform',
            category: 'data',
            client: 'Market Insights Ltd',
            description: 'Big data analytics platform with predictive modeling and visualization.',
            technologies: ['Python', 'Apache Spark', 'Tableau', 'Kafka'],
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
            duration: '7 months',
            teamSize: '10 members',
            results: ['80% faster insights', 'Predictive accuracy 95%', 'Scalable to billions'],
            featured: true
        },
        {
            id: 7,
            title: 'EdTech Platform',
            category: 'web-dev',
            client: 'EduTech Academy',
            description: 'Interactive online learning platform with AI-powered recommendations.',
            technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Redis'],
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
            duration: '5 months',
            teamSize: '6 members',
            results: ['100k+ users', '85% course completion', 'Personalized learning'],
            featured: false
        },
        {
            id: 8,
            title: 'IoT Fleet Management',
            category: 'software',
            client: 'Logistics Plus',
            description: 'IoT-based fleet management system with real-time tracking and analytics.',
            technologies: ['IoT Sensors', 'Node.js', 'React Native', 'MongoDB'],
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop',
            duration: '9 months',
            teamSize: '14 members',
            results: ['25% fuel saving', 'Real-time tracking', 'Predictive maintenance'],
            featured: true
        }
    ];

    // Filter projects
    const filteredProjects = projects.filter(project => {
        const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Featured projects
    const featuredProjects = projects.filter(project => project.featured);

    // Open project details
    const openProjectDetails = (project: any) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    // Statistics
    const stats = [
        { number: '150+', label: 'Projects Completed', icon: <Award /> },
        { number: '50+', label: 'Happy Clients', icon: <People /> },
        { number: '10+', label: 'Years Experience', icon: <Calendar /> },
        { number: '99%', label: 'Client Satisfaction', icon: <Star /> }
    ];

    return (
        <div className="portfolio-page">
            {/* Hero Section */}
            <section className="portfolio-hero-section">
                <Container>
                    <Row className="align-items-center min-vh-80">
                        <Col lg={6} className="hero-content">
                            <h1 className="hero-title">
                                Our <span className="gradient-text">Portfolio</span>
                            </h1>
                            <p className="hero-description">
                                Discover our successful projects and innovative solutions that have
                                helped businesses transform and grow in the digital landscape.
                            </p>
                            <div className="hero-buttons">
                                <Button
                                    className="btn-primary-custom"
                                    onClick={() => navigate('/contact')}
                                >
                                    Start Your Project <ArrowRight className="ms-2" />
                                </Button>
                            </div>
                        </Col>
                        <Col lg={6} className="hero-image-col">
                            <div className="portfolio-hero-image">
                                <div className="floating-shape shape-1"></div>
                                <div className="floating-shape shape-2"></div>
                                <div className="main-hero-image">
                                    <div className="image-placeholder">
                                        <Laptop size={100} className="laptop-icon" color="#00d4ff" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Statistics Section */}
            <section className="stats-section py-5">
                <Container>
                    <Row className="g-4">
                        {stats.map((stat, index) => (
                            <Col lg={3} md={6} key={index}>
                                <div className="stat-card">
                                    <div className="stat-icon">
                                        {stat.icon}
                                    </div>
                                    <h3>{stat.number}</h3>
                                    <p>{stat.label}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Portfolio Filter & Search */}
            <section className="portfolio-controls py-5 bg-light">
                <Container>
                    <Row className="align-items-center mb-4">
                        <Col lg={4} className="mb-3 mb-lg-0">
                            <div className="search-box">
                                <Search size={20} className="search-icon" />
                                <input
                                    type="text"
                                    placeholder="Search projects..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="search-input"
                                />
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="filter-buttons">
                                {categories.map(category => (
                                    <button
                                        key={category.id}
                                        className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                                        onClick={() => setActiveFilter(category.id)}
                                    >
                                        <span className="filter-icon">{category.icon}</span>
                                        {category.name}
                                    </button>
                                ))}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="results-info">
                                Showing {filteredProjects.length} of {projects.length} projects
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Featured Projects */}
            {featuredProjects.length > 0 && (
                <section className="featured-projects-section py-5">
                    <Container>
                        <Row className="mb-5">
                            <Col lg={8} className="mx-auto text-center">
                                <h2 className="section-title">
                                    <span className="gradient-text">Featured</span> Projects
                                </h2>
                                <p className="section-subtitle">
                                    Showcasing our most innovative and successful work
                                </p>
                            </Col>
                        </Row>
                        <Row className="g-4">
                            {featuredProjects.slice(0, 3).map(project => (
                                <Col lg={4} md={6} key={project.id}>
                                    <Card className="featured-project-card">
                                        <div className="project-badge">Featured</div>
                                        <div
                                            className="project-image"
                                            style={{ backgroundImage: `url(${project.image})` }}
                                        >
                                            <div className="project-overlay">
                                                <Button
                                                    variant="light"
                                                    className="view-btn"
                                                    onClick={() => openProjectDetails(project)}
                                                >
                                                    <Eye size={20} className="me-2" />
                                                    View Details
                                                </Button>
                                            </div>
                                        </div>
                                        <Card.Body>
                                            <div className="project-category">
                                                {categories.find(c => c.id === project.category)?.name}
                                            </div>
                                            <Card.Title>{project.title}</Card.Title>
                                            <Card.Text>{project.description}</Card.Text>
                                            <div className="project-client">
                                                <strong>Client:</strong> {project.client}
                                            </div>
                                            <div className="project-tech">
                                                {project.technologies.slice(0, 3).map(tech => (
                                                    <span key={tech} className="tech-tag">{tech}</span>
                                                ))}
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
            )}

            {/* All Projects Grid */}
            <section className="projects-grid-section py-5">
                <Container>
                    <Row className="mb-5">
                        <Col>
                            <h2 className="section-title">
                                All <span className="gradient-text">Projects</span>
                            </h2>
                        </Col>
                    </Row>

                    {filteredProjects.length > 0 ? (
                        <Row className="g-4">
                            {filteredProjects.map(project => (
                                <Col lg={4} md={6} key={project.id}>
                                    <Card className="project-card">
                                        <div
                                            className="project-image"
                                            style={{ backgroundImage: `url(${project.image})` }}
                                        >
                                            <div className="project-overlay">
                                                <Button
                                                    variant="light"
                                                    className="view-btn"
                                                    onClick={() => openProjectDetails(project)}
                                                >
                                                    <Eye size={20} className="me-2" />
                                                    Quick View
                                                </Button>
                                            </div>
                                            {project.featured && (
                                                <div className="project-badge">Featured</div>
                                            )}
                                        </div>
                                        <Card.Body>
                                            <div className="project-category">
                                                {categories.find(c => c.id === project.category)?.name}
                                            </div>
                                            <Card.Title>{project.title}</Card.Title>
                                            <div className="project-meta">
                                                <span className="meta-item">
                                                    <Calendar size={14} className="me-1" />
                                                    {project.duration}
                                                </span>
                                                <span className="meta-item">
                                                    <People size={14} className="me-1" />
                                                    {project.teamSize}
                                                </span>
                                            </div>
                                            <div className="project-tech">
                                                {project.technologies.slice(0, 2).map(tech => (
                                                    <span key={tech} className="tech-tag">{tech}</span>
                                                ))}
                                                {project.technologies.length > 2 && (
                                                    <span className="tech-tag">+{project.technologies.length - 2}</span>
                                                )}
                                            </div>
                                            <Button
                                                variant="outline-primary"
                                                className="mt-3 w-100"
                                                onClick={() => openProjectDetails(project)}
                                            >
                                                View Case Study <ChevronRight className="ms-2" />
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    ) : (
                        <div className="no-results text-center py-5">
                            <h4>No projects found</h4>
                            <p>Try changing your search or filter criteria</p>
                            <Button
                                variant="outline-primary"
                                onClick={() => {
                                    setActiveFilter('all');
                                    setSearchQuery('');
                                }}
                            >
                                Clear Filters
                            </Button>
                        </div>
                    )}
                </Container>
            </section>

            {/* CTA Section */}
            <section className="portfolio-cta-section py-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8} className="text-center">
                            <Card className="cta-card">
                                <Card.Body>
                                    <h2 className="cta-title mb-4">
                                        Have a Project in Mind?
                                    </h2>
                                    <p className="cta-text mb-4">
                                        Let's discuss how we can help bring your ideas to life with
                                        our expertise and innovative solutions.
                                    </p>
                                    <div className="cta-buttons">
                                        <Button
                                            className="btn-primary-custom me-3"
                                            onClick={() => navigate('/contact')}
                                        >
                                            Start Your Project
                                        </Button>
                                        <Button
                                            variant="outline-primary"
                                            className="btn-outline-custom"
                                            onClick={() => navigate('/services')}
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

            {/* Project Details Modal */}
            {selectedProject && (
                <Modal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    size="lg"
                    centered
                    className="project-modal"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedProject.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal-project-image">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="img-fluid"
                            />
                        </div>

                        <Tabs defaultActiveKey="overview" className="mb-3">
                            <Tab eventKey="overview" title="Overview">
                                <div className="tab-content">
                                    <h5>Project Description</h5>
                                    <p>{selectedProject.description}</p>

                                    <h5 className="mt-4">Client</h5>
                                    <p>{selectedProject.client}</p>

                                    <h5 className="mt-4">Project Details</h5>
                                    <div className="project-details-grid">
                                        <div className="detail-item">
                                            <strong>Duration:</strong>
                                            <span>{selectedProject.duration}</span>
                                        </div>
                                        <div className="detail-item">
                                            <strong>Team Size:</strong>
                                            <span>{selectedProject.teamSize}</span>
                                        </div>
                                        <div className="detail-item">
                                            <strong>Category:</strong>
                                            <span>{categories.find(c => c.id === selectedProject.category)?.name}</span>
                                        </div>
                                    </div>
                                </div>
                            </Tab>

                            <Tab eventKey="technologies" title="Technologies">
                                <div className="tab-content">
                                    <h5>Technologies Used</h5>
                                    <div className="tech-list">
                                        {selectedProject.technologies.map((tech: string) => (
                                            <span key={tech} className="tech-badge">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </Tab>

                            <Tab eventKey="results" title="Results">
                                <div className="tab-content">
                                    <h5>Key Achievements</h5>
                                    <ul className="results-list">
                                        {selectedProject.results.map((result: string, index: number) => (
                                            <li key={index}>
                                                <CheckCircle size={16} className="me-2" color="#00d4ff" />
                                                {result}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Tab>
                        </Tabs>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Close
                        </Button>
                        {selectedProject.liveUrl && (
                            <Button
                                variant="primary"
                                onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                            >
                                <Globe size={16} className="me-2" />
                                Visit Live Site
                            </Button>
                        )}
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
};

export default Portfolio;