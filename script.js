/**
 * Furniture Hub Ayodhya - Web Interactions
 */

// Product Data
const products = [
    {
        id: 7,
        name: "Premium Wooden Shoeracks",
        description: "Elegant and spacious shoerack designs to keep your footwear organized while adding value to your home decor.",
        images: ["img/shoerack1.jpeg", "img/shoerack2.jpeg", "img/shoerack3.jpeg", "img/shoerack4.jpeg", "img/shoerack5.jpeg"],
        badge: "New",
        category: "shoeracks",
        isFeatured: false
    },
    {
        id: 8,
        name: "Modern Floating Wall Shelf",
        description: "Minimalist and stylish wall shelf for displaying books, plants, and decorative items. Maximizes space and adds a modern touch.",
        image: "img/wall shelf1.jpeg",
        badge: "Trending",
        category: "wallshelves",
        isFeatured: false
    },
    {
        id: 9,
        name: "Classic Wooden Wall Shelf",
        description: "Sturdy wooden crafted wall shelf with a premium finish. Perfect for elegant storage solutions in your living room or study.",
        image: "img/wall shelf2.jpeg",
        badge: "",
        category: "wallshelves",
        isFeatured: false
    },
    {
        id: 10,
        name: "Multipurpose Tiered Wall Shelf",
        description: "Versatile tiered wall shelf offering a unique design to display your favorite decor, books, and plants with ease.",
        images: ["img/wall shelf3a.jpeg", "img/wall shelf3b.jpeg", "img/wall shelf3c.jpeg"],
        badge: "New",
        category: "wallshelves",
        isFeatured: false
    },
    {
        id: 11,
        name: "Premium Upholstered Bed",
        description: "Luxurious bed with premium upholstery for maximum comfort and an elegant bedroom style.",
        image: "img/bed1jpeg.jpeg",
        badge: "New",
        category: "beds",
        isFeatured: true
    },
    {
        id: 12,
        name: "Modern Storage Bed",
        description: "Sleek and highly functional bed featuring spacious under-bed storage to keep your room organized.",
        images: ["img/bed2a.jpeg", "img/bed2b.jpeg", "img/bed2c.jpeg"],
        badge: "Trending",
        category: "beds",
        isFeatured: false
    },
    {
        id: 13,
        name: "Elegant Glass Center Table",
        description: "A stunning center table featuring a high-quality glass top and a durable foundation to complement your living space.",
        image: "img/center table1.jpeg",
        badge: "",
        category: "tables",
        isFeatured: false
    },
    {
        id: 14,
        name: "Versatile Kitchen Shelf",
        description: "Practical kitchen shelf designed to store spices, utensils, and other essentials, keeping your kitchen organized.",
        image: "img/kitchen shelf.jpeg",
        badge: "Utility",
        category: "others",
        isFeatured: false
    },
    {
        id: 15,
        name: "Compact Shoe Rack",
        description: "A minimalist shoe rack designed to fit into tight entryways while holding all your daily footwear.",
        image: "img/shoe rack 1.jpeg",
        badge: "",
        category: "shoeracks",
        isFeatured: false
    },
    {
        id: 16,
        name: "Luxury L-Shape Sofa",
        description: "Spacious L-shape sofa offering ultimate comfort and a modern aesthetic perfect for large living rooms.",
        images: ["img/sofa1a.jpeg", "img/sofa1bjpeg.jpeg"],
        badge: "Premium",
        category: "sofas",
        isFeatured: true
    },
    {
        id: 17,
        name: "Classic Leatherette Sofa",
        description: "A stylish sofa made with high-quality artificial leather that is easy to clean and adds character to your home.",
        image: "img/sofa2.jpeg",
        badge: "",
        category: "sofas",
        isFeatured: false
    },
    {
        id: 18,
        name: "Ergonomic Study Table",
        description: "A functional study table with clean lines, perfect for home offices and students requiring a dedicated workspace.",
        images: ["img/study table1a.jpeg", "img/study table1b.jpeg"],
        badge: "Popular",
        category: "tables",
        isFeatured: false
    },
    {
        id: 19,
        name: "Spacious Multi-Door Wardrobe",
        description: "A large wardrobe featuring multiple compartments, hanging spaces, and drawers for all your storage needs.",
        images: ["img/wardrobe1a.jpeg", "img/wardrobe1b.jpeg", "img/wardrobe1c.jpeg"],
        badge: "Spacious",
        category: "wardrobes",
        isFeatured: true
    }
];

// WhatsApp Number
const WA_NUMBER = "919653062736";

// DOM Elements
document.addEventListener("DOMContentLoaded", () => {
    // Get base path for assets (images)
    const urlParams = new URLSearchParams(window.location.search);
    const categoryQuery = urlParams.get('category');
    const isInSubfolder = window.location.pathname.includes('/category/');
    const basePath = isInSubfolder ? '../' : '';

    // Set Page Title if category
    if (categoryQuery) {
        const titleEl = document.getElementById("category-page-title");
        if (titleEl) {
            titleEl.textContent = categoryQuery.charAt(0).toUpperCase() + categoryQuery.slice(1) + " Collection";
        }
    }

    // 1. Generate Products (Filter by category if present, or featured if on home page)
    const isHomePage = !categoryQuery && document.getElementById("home");

    if (categoryQuery) {
        const filtered = products.filter(p => p.category === categoryQuery);
        renderProducts(filtered, basePath);
    } else if (isHomePage) {
        const featured = products.filter(p => p.isFeatured);
        renderProducts(featured, basePath);
    } else {
        renderProducts(products, basePath);
    }

    // 2. Set Current Year in Footer
    const yearEl = document.getElementById("current-year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // 3. Mobile Menu Toggle
    initMobileMenu();

    // 4. Scroll Animations
    initScrollAnimations();

    // 5. Navbar Background Change on Scroll
    initStickyNavbar();

    // 6. Search Functionality
    initSearch();
});

/**
 * Render product cards dynamically
 */
function renderProducts(productsToRender = products, basePath = '') {
    const productContainer = document.getElementById("product-container");
    if (!productContainer) return;

    if (productsToRender.length === 0) {
        productContainer.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-light);">
                <i class="fa-solid fa-box-open" style="font-size: 3rem; margin-bottom: 15px; color: #ddd;"></i>
                <h3 style="color: var(--text-dark); margin-bottom: 10px;">No products found</h3>
                <p>Try adjusting your search terms.</p>
            </div>
        `;
        return;
    }

    let html = "";

    productsToRender.forEach(product => {
        // Pre-fill WhatsApp Message
        const message = `Hello, I am interested in ${product.name} from Furniture Hub Ayodhya.`;
        const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

        const badgeHtml = product.badge ? `<span class="product-badge">${product.badge}</span>` : "";

        // Handle images array (carousel) or single image
        let imageHtml = "";

        if (product.images && product.images.length > 0) {
            // It has multiple images, create a simple CSS scroll snap carousel structure
            let carouselItems = "";
            let indicators = "";

            product.images.forEach((img, idx) => {
                carouselItems += `<img src="${basePath}${img}" alt="${product.name} View ${idx + 1}" loading="lazy" class="carousel-img">`;
                indicators += `<div class="carousel-dot ${idx === 0 ? 'active' : ''}" data-idx="${idx}"></div>`;
            });

            imageHtml = `
                <div class="product-carousel" id="carousel-${product.id}">
                    <button class="carousel-nav prev" aria-label="Previous image"><i class="fa-solid fa-chevron-left"></i></button>
                    <div class="carousel-track">
                        ${carouselItems}
                    </div>
                    <button class="carousel-nav next" aria-label="Next image"><i class="fa-solid fa-chevron-right"></i></button>
                    <div class="carousel-indicators">
                        ${indicators}
                    </div>
                </div>
            `;
        } else {
            imageHtml = `<img src="${basePath}${product.image}" alt="${product.name}" loading="lazy">`;
        }

        html += `
            <div class="product-card fade-in">
                <div class="product-image">
                    ${badgeHtml}
                    ${imageHtml}
                </div>
                <div class="product-content">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-desc">${product.description}</p>
                    <div class="product-action">
                        <a href="${waLink}" target="_blank" class="btn btn-whatsapp">
                            <i class="fa-brands fa-whatsapp"></i> Send Enquiry
                        </a>
                    </div>
                </div>
            </div>
        `;
    });

    productContainer.innerHTML = html;

    // Initialize carousels if any were added
    initCarousels();
}

/**
 * Initialize Mobile Menu
 */
function initMobileMenu() {
    const openBtn = document.querySelector(".mobile-menu-btn");
    const closeBtn = document.querySelector(".close-menu-btn");
    const overlay = document.querySelector(".mobile-menu-overlay");
    const mobileLinks = document.querySelectorAll(".mobile-link");

    if (openBtn && closeBtn && overlay) {
        openBtn.addEventListener("click", () => {
            overlay.classList.add("active");
            document.body.style.overflow = "hidden"; // Prevent scrolling
        });

        closeBtn.addEventListener("click", closeMenu);

        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener("click", closeMenu);
        });
    }

    function closeMenu() {
        overlay.classList.remove("active");
        document.body.style.overflow = "auto";
    }
}

/**
 * Scroll reveal animations
 */
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in, .about-text, .about-image');

    // Add base class to non-dynamic elements
    document.querySelectorAll('.about-text, .about-image').forEach(el => {
        if (!el.classList.contains('fade-in')) {
            el.classList.add('fade-in');
        }
    });

    const revealOnScroll = function () {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        fadeElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);

    // Trigger once on load
    setTimeout(revealOnScroll, 100);
}

/**
 * Sticky Navbar styling on scroll
 */
function initStickyNavbar() {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
            navbar.style.padding = "10px 0";
        } else {
            navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
            navbar.style.padding = "15px 0";

            // Revert inline style to let CSS handle it
            if (window.innerWidth > 768) {
                navbar.style.padding = "";
            }
        }
    });
}

/**
 * Initialize Search Functionality
 */
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const mobileSearchInput = document.getElementById('mobileSearchInput');

    function filterProducts(query) {
        const lowerQuery = query.toLowerCase().trim();
        const filtered = products.filter(p =>
            p.name.toLowerCase().includes(lowerQuery) ||
            p.description.toLowerCase().includes(lowerQuery)
        );
        
        // Pass basePath to renderProducts during search as well
        const isInSubfolder = window.location.pathname.includes('/category/');
        const basePath = isInSubfolder ? '../' : '';
        renderProducts(filtered, basePath);

        // Re-apply visible class to new elements to display them properly
        setTimeout(() => {
            const newCards = document.querySelectorAll('#product-container .product-card');
            newCards.forEach(el => el.classList.add('visible'));
        }, 50);
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => filterProducts(e.target.value));
    }

    if (mobileSearchInput) {
        mobileSearchInput.addEventListener('input', (e) => filterProducts(e.target.value));
    }
}

/**
 * Initialize Image Carousels
 */
function initCarousels() {
    const carousels = document.querySelectorAll('.product-carousel');

    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const nextButton = carousel.querySelector('.carousel-nav.next');
        const prevButton = carousel.querySelector('.carousel-nav.prev');
        const dots = carousel.querySelectorAll('.carousel-dot');

        if (!track || !nextButton || !prevButton || !dots.length) return;

        let currentIndex = 0;
        const totalImages = dots.length;

        // Update carousel position
        const updateCarousel = () => {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;

            // Update dots
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === currentIndex);
            });
        };

        // Next button click
        nextButton.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent navigating if inside a link
            currentIndex = (currentIndex + 1) % totalImages;
            updateCarousel();
        });

        // Prev button click
        prevButton.addEventListener('click', (e) => {
            e.preventDefault();
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            updateCarousel();
        });

        // Dot click
        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                e.preventDefault();
                currentIndex = parseInt(dot.getAttribute('data-idx'));
                updateCarousel();
            });
        });
    });
}
