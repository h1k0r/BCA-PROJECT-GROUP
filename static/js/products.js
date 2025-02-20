// Product data
const products = [
    {
        id: 1,
        name: "Code Editor Pro",
        category: "development",
        price: 49.99,
        description: "Advanced code editor with syntax highlighting and intelligent code completion.",
        features: [
            "Multi-language support",
            "Smart code completion",
            "Git integration",
            "Custom themes"
        ],
        driveLink: "https://chat.whatsapp.com/DYWmygidJUSDNUERqjZoG8"
    },
    {
        id: 2,
        name: "E-commerce Platform Builder",
        category: "web",
        price: 79.99,
        description: "Complete e-commerce solution with shopping cart, payment integration, and inventory management.",
        features: [
            "Multi-vendor support",
            "Payment gateway integration",
            "Inventory tracking",
            "Order management"
        ],
        driveLink: "https://chat.whatsapp.com/DYWmygidJUSDNUERqjZoG8"
    },
    {
        id: 3,
        name: "Learning Management System",
        category: "education",
        price: 89.99,
        description: "Comprehensive LMS for creating and managing online courses and educational content.",
        features: [
            "Course creation tools",
            "Student progress tracking",
            "Quiz and assessment system",
            "Interactive content support"
        ],
        driveLink: "https://chat.whatsapp.com/DYWmygidJUSDNUERqjZoG8"
    },
    {
        id: 4,
        name: "Network Security Suite",
        category: "security",
        price: 99.99,
        description: "Advanced network security tools for vulnerability assessment and penetration testing.",
        features: [
            "Network scanning",
            "Vulnerability detection",
            "Penetration testing tools",
            "Security reporting"
        ],
        driveLink: "https://chat.whatsapp.com/DYWmygidJUSDNUERqjZoG8"
    },
    {
        id: 5,
        name: "AI Development Kit",
        category: "ai",
        price: 149.99,
        description: "Comprehensive AI and machine learning development toolkit with pre-trained models.",
        features: [
            "Image recognition",
            "Natural language processing",
            "Speech recognition",
            "Deep learning frameworks"
        ],
        driveLink: "https://chat.whatsapp.com/DYWmygidJUSDNUERqjZoG8"
    },
    {
        id: 6,
        name: "Game Development Studio",
        category: "gaming",
        price: 129.99,
        description: "Complete game development environment for 2D and 3D games.",
        features: [
            "2D/3D engine support",
            "Physics simulation",
            "Asset management",
            "Cross-platform deployment"
        ],
        driveLink: "https://chat.whatsapp.com/DYWmygidJUSDNUERqjZoG8"
    },
    {
        id: 7,
        name: "Security Scanner",
        category: "security",
        price: 39.99,
        description: "Comprehensive security scanning tool for web applications.",
        features: [
            "Vulnerability detection",
            "Real-time monitoring",
            "Detailed reports",
            "Automated fixes"
        ],
        driveLink: "https://chat.whatsapp.com/DYWmygidJUSDNUERqjZoG8"
    },
    {
        id: 8,
        name: "File Manager Ultra",
        category: "utility",
        price: 29.99,
        description: "Advanced file management system with powerful organization features.",
        features: [
            "Batch processing",
            "File encryption",
            "Cloud integration",
            "Advanced search"
        ],
        driveLink: "https://chat.whatsapp.com/DYWmygidJUSDNUERqjZoG8"
    },
    {
        id: 9,
        name: "Database Administrator Tool",
        category: "development",
        price: 59.99,
        description: "Professional database management and administration software.",
        features: [
            "Multiple database support",
            "Query optimization",
            "Backup and restore",
            "Performance monitoring"
        ],
        driveLink: "https://chat.whatsapp.com/DYWmygidJUSDNUERqjZoG8"
    },
    {
        id: 10,
        name: "Network Monitor Pro",
        category: "security",
        price: 44.99,
        description: "Advanced network monitoring and analysis tool.",
        features: [
            "Real-time traffic analysis",
            "Intrusion detection",
            "Bandwidth monitoring",
            "Alert system"
        ],
        driveLink: "https://chat.whatsapp.com/DYWmygidJUSDNUERqjZoG8"
    },
    {
        id: 11,
        name: "Online Course Platform",
        category: "education",
        price: 129.99,
        description: "Build your own online learning platform like Udemy with course creation, student management, and payment processing.",
        features: [
            "Course authoring tools",
            "Video content hosting",
            "Student progress tracking",
            "Payment integration"
        ],
        driveLink: "https://chat.whatsapp.com/DYWmygidJUSDNUERqjZoG8"
    },
    {
        id: 12,
        name: "Hospital Management System",
        category: "web",
        price: 199.99,
        description: "Comprehensive healthcare management solution for hospitals and clinics.",
        features: [
            "Patient records management",
            "Appointment scheduling",
            "Inventory tracking",
            "Billing system"
        ],
        driveLink: "https://chat.whatsapp.com/DYWmygidJUSDNUERqjZoG8"
    },
    {
        id: 13,
        name: "Real Estate Platform",
        category: "web",
        price: 149.99,
        description: "Feature-rich real estate listing and management platform for properties.",
        features: [
            "Property listings",
            "Virtual tours",
            "Agent portal",
            "Lead management"
        ],
        driveLink: "https://chat.whatsapp.com/DYWmygidJUSDNUERqjZoG8"
    },
    {
        id: 14,
        name: "Social Media Analytics",
        category: "ai",
        price: 89.99,
        description: "Advanced analytics and sentiment analysis tool for social media platforms.",
        features: [
            "Sentiment analysis",
            "Trend tracking",
            "Engagement metrics",
            "Report generation"
        ],
        driveLink: "https://chat.whatsapp.com/DYWmygidJUSDNUERqjZoG8"
    },
    {
        id: 15,
        name: "Virtual Science Lab",
        category: "education",
        price: 79.99,
        description: "Interactive virtual laboratory for science experiments and simulations.",
        features: [
            "3D experiments",
            "Physics simulations",
            "Chemistry reactions",
            "Biology models"
        ],
        driveLink: "https://chat.whatsapp.com/DYWmygidJUSDNUERqjZoG8"
    },
    {
        id: 16,
        name: "Fitness Tracking Platform",
        category: "web",
        price: 69.99,
        description: "Complete fitness and workout tracking system with progress monitoring.",
        features: [
            "Workout plans",
            "Progress tracking",
            "Nutrition logger",
            "Community features"
        ],
        driveLink: "https://chat.whatsapp.com/DYWmygidJUSDNUERqjZoG8"
    },
    {
        id: 17,
        name: "Smart Home Controller",
        category: "development",
        price: 159.99,
        description: "IoT-based smart home automation and control system.",
        features: [
            "Device management",
            "Automation rules",
            "Energy monitoring",
            "Security controls"
        ],
        driveLink: "https://chat.whatsapp.com/DYWmygidJUSDNUERqjZoG8"
    },
    {
        id: 18,
        name: "Job Portal System",
        category: "web",
        price: 139.99,
        description: "Complete job listing and recruitment management platform.",
        features: [
            "Job postings",
            "Resume parser",
            "Applicant tracking",
            "Interview scheduler"
        ],
        driveLink: "https://chat.whatsapp.com/DYWmygidJUSDNUERqjZoG8"
    },
    {
        id: 19,
        name: "Language Learning Suite",
        category: "education",
        price: 99.99,
        description: "Comprehensive language learning platform with interactive lessons.",
        features: [
            "Multiple languages",
            "Speech recognition",
            "Progress tracking",
            "Interactive exercises"
        ],
        driveLink: "https://chat.whatsapp.com/DYWmygidJUSDNUERqjZoG8"
    },
    {
        id: 20,
        name: "Video Streaming Platform",
        category: "web",
        price: 199.99,
        description: "Build your own video streaming service like Netflix.",
        features: [
            "Content management",
            "User subscriptions",
            "Video encoding",
            "Analytics dashboard"
        ],
        driveLink: "https://chat.whatsapp.com/DYWmygidJUSDNUERqjZoG8"
    },
    {
        id: 21,
        name: "Inventory Management System",
        category: "web",
        price: 149.99,
        description: "Complete inventory and stock management solution for businesses.",
        features: [
            "Stock tracking",
            "Order management",
            "Supplier management",
            "Reports generation"
        ],
        driveLink: "https://chat.whatsapp.com/DYWmygidJUSDNUERqjZoG8"
    },
    {
        id: 22,
        name: "Virtual Reality Game Engine",
        category: "gaming",
        price: 199.99,
        description: "Advanced VR game development engine with ready-to-use components.",
        features: [
            "VR physics engine",
            "3D model support",
            "Multi-platform export",
            "Asset marketplace"
        ],
        driveLink: "https://chat.whatsapp.com/DYWmygidJUSDNUERqjZoG8"
    }
];

// Function to create product card HTML
function createProductCard(product) {
    return `
        <div class="col-md-4 mb-4">
            <div class="card product-card h-100" onclick="window.location.href='product-detail.html?id=${product.id}'">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="badge bg-primary">${product.category}</span>
                        <h6 class="mb-0">$${product.price}</h6>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to display products
function displayProducts(productsToShow = products) {
    const productsGrid = document.getElementById('products-grid');
    if (productsGrid) {
        productsGrid.innerHTML = productsToShow.map(product => createProductCard(product)).join('');
    }

    const featuredProducts = document.getElementById('featured-products');
    if (featuredProducts) {
        // Show only first 3 products on homepage
        featuredProducts.innerHTML = productsToShow.slice(0, 3).map(product => createProductCard(product)).join('');
    }
}

// Function to display product detail
function displayProductDetail(productId) {
    const product = products.find(p => p.id === parseInt(productId));
    if (!product) return;

    const productDetail = document.getElementById('product-detail');
    if (productDetail) {
        productDetail.innerHTML = `
            <div class="row">
                <div class="col-md-6">
                    <h1>${product.name}</h1>
                    <p class="lead">${product.description}</p>
                    <h3>Features:</h3>
                    <ul class="list-group list-group-flush mb-4">
                        ${product.features.map(feature => `
                            <li class="list-group-item">${feature}</li>
                        `).join('')}
                    </ul>
                    <div class="d-flex align-items-center mb-4">
                        <h2 class="mb-0 me-3">$${product.price}</h2>
                        <span class="badge bg-primary">${product.category}</span>
                    </div>
                    <div class="alert alert-success">
                        <i class="fab fa-whatsapp me-2"></i>
                        Join our WhatsApp community to get instant access to this product and more!
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body text-center">
                            <i class="fas fa-laptop-code fa-5x mb-4"></i>
                            <h4>System Requirements</h4>
                            <ul class="list-unstyled">
                                <li>Windows 10/11 or macOS</li>
                                <li>4GB RAM minimum</li>
                                <li>500MB disk space</li>
                                <li>Internet connection</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Display products
    displayProducts();

    // Product detail page
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    if (productId) {
        displayProductDetail(productId);
    }

    // Search functionality
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    if (searchInput && searchButton) {
        const performSearch = () => {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredProducts = products.filter(product =>
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm)
            );
            displayProducts(filteredProducts);
        };

        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    // Category filter
    const categoryButtons = document.querySelectorAll('[data-category]');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.dataset.category;
            const filteredProducts = category === 'all'
                ? products
                : products.filter(product => product.category === category);
            displayProducts(filteredProducts);
        });
    });
});