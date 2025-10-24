// =============================================================================
// City Events Guide - Main JavaScript File
// Comprehensive JavaScript with English comments
// Handles all dynamic functionality, translations, and user interactions
// =============================================================================

// ===== TRANSLATION DATA FOR BILINGUAL SUPPORT =====
// Contains all text content in both Arabic and English
const translations = {
    ar: {
        // Navigation
        home: "الرئيسية",
        events: "الفعاليات",
        about: "من نحن",
        contact: "اتصل بنا",
        language: "English",

        // Hero Section
        heroTitle: "اكتشف عالم الفعاليات المثير في مدينتك",
        heroSubtitle: "انغمس في تجربة فريدة مع دليلنا الشامل لأهم الفعاليات الثقافية، الرياضية، والفنية. احجز تذكرتك الآن وكن جزءاً من اللحظات الاستثنائية.",
        browseEvents: "استعرض الفعاليات",
        featuredEvents: "الفعاليات المميزة",
        activeEvents: "فعالية نشطة",
        activeUsers: "مستخدم نشط",
        eventOrganizers: "منظم فعاليات",

        // Categories Section
        categoriesTitle: "فئات الفعاليات",
        cultural: "ثقافية",
        entertainment: "ترفيهية",
        sports: "رياضية",
        educational: "تعليمية",
        culturalDesc: "محاضرات، ندوات، معارض فنية وتراثية",
        entertainmentDesc: "حفلات، عروض مسرحية، فعاليات ترفيهية",
        sportsDesc: "مسابقات، ماراثون، بطولات وأنشطة رياضية",
        educationalDesc: "ورش عمل، دورات تدريبية، مؤتمرات",

        // Featured Events Section
        featuredTitle: "الفعاليات المميزة",
        viewAll: "عرض الكل",
        free: "مجاني",
        details: "التفاصيل",
        book: "حجز",

        // Statistics Section
        eventsCount: "فعالية",
        organizersCount: "منظم",
        participantsCount: "مشارك",
        citiesCount: "مدينة",

        // Footer
        footerTitle: "دليل فعاليات المدينة",
        footerText: "منصة شاملة تتيح لك اكتشاف أفضل الفعاليات في مدينتك. نحن نعمل على جمع كل ما تحتاجه من معلومات حول الفعاليات القادمة في مكان واحد.",
        quickLinks: "روابط سريعة",
        eventCategories: "فئات الفعاليات",
        contactUs: "اتصل بنا",
        rights: "جميع الحقوق محفوظة",

        // Other Pages
        allEvents: "الفعاليات",
        discoverEvents: "اكتشف جميع الفعاليات القادمة في مدينتك. استخدم الفلاتر للعثور على الفعاليات التي تهمك.",
        ourStory: "قصتنا",
        ourTeam: "فريق العمل",
        ourPartners: "شركاؤنا",
        sendMessage: "أرسل لنا رسالة",
        fullName: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        subject: "الموضوع",
        message: "الرسالة",
        send: "إرسال الرسالة",
        ourLocation: "موقعنا على الخريطة",

        // Booking Form
        booking: "حجز تذكرة",
        eventName: "اسم الفعالية",
        ticketCount: "عدد التذاكر",
        cancel: "إلغاء",
        confirmBooking: "تأكيد الحجز",
        bookingSuccess: "تم حجز التذاكر بنجاح!",

        // General Elements
        all: "الكل",
        similarEvents: "فعاليات مشابهة",
        noSimilarEvents: "لا توجد فعاليات مشابهة حالياً.",
        eventNotFound: "الفعالية غير موجودة",
        eventIdMissing: "معرف الفعالية غير موجود",
        backToEvents: "العودة إلى قائمة الفعاليات"
    },
    en: {
        // Navigation
        home: "Home",
        events: "Events",
        about: "About",
        contact: "Contact",
        language: "العربية",

        // Hero Section
        heroTitle: "Discover Exciting Events in Your City",
        heroSubtitle: "Immerse yourself in a unique experience with our comprehensive guide to the most important cultural, sports, and artistic events. Book your ticket now and be part of exceptional moments.",
        browseEvents: "Browse Events",
        featuredEvents: "Featured Events",
        activeEvents: "Active Events",
        activeUsers: "Active Users",
        eventOrganizers: "Event Organizers",

        // Categories Section
        categoriesTitle: "Event Categories",
        cultural: "Cultural",
        entertainment: "Entertainment",
        sports: "Sports",
        educational: "Educational",
        culturalDesc: "Lectures, seminars, artistic and heritage exhibitions",
        entertainmentDesc: "Concerts, theatrical shows, entertainment events",
        sportsDesc: "Competitions, marathon, tournaments and sports activities",
        educationalDesc: "Workshops, training courses, conferences",

        // Featured Events Section
        featuredTitle: "Featured Events",
        viewAll: "View All",
        free: "Free",
        details: "Details",
        book: "Book",

        // Statistics Section
        eventsCount: "Events",
        organizersCount: "Organizers",
        participantsCount: "Participants",
        citiesCount: "Cities",

        // Footer
        footerTitle: "City Events Guide",
        footerText: "A comprehensive platform that allows you to discover the best events in your city. We work to gather all the information you need about upcoming events in one place.",
        quickLinks: "Quick Links",
        eventCategories: "Event Categories",
        contactUs: "Contact Us",
        rights: "All rights reserved",

        // Other Pages
        allEvents: "Events",
        discoverEvents: "Discover all upcoming events in your city. Use filters to find events that interest you.",
        ourStory: "Our Story",
        ourTeam: "Our Team",
        ourPartners: "Our Partners",
        sendMessage: "Send us a Message",
        fullName: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        subject: "Subject",
        message: "Message",
        send: "Send Message",
        ourLocation: "Our Location on Map",

        // Booking Form
        booking: "Book Ticket",
        eventName: "Event Name",
        ticketCount: "Number of Tickets",
        cancel: "Cancel",
        confirmBooking: "Confirm Booking",
        bookingSuccess: "Tickets booked successfully!",

        // General Elements
        all: "All",
        similarEvents: "Similar Events",
        noSimilarEvents: "No similar events currently.",
        eventNotFound: "Event Not Found",
        eventIdMissing: "Event ID Missing",
        backToEvents: "Back to Events List"
    }
};

// ===== EVENTS DATA - SAMPLE DATABASE =====
// In a real application, this data would come from a backend API
// Each event contains bilingual content for both Arabic and English
const eventsData = [
    {
        id: 1,
        title: {
            ar: "مهرجان الموسيقى العالمية",
            en: "World Music Festival"
        },
        category: {
            ar: "ترفيهية",
            en: "Entertainment"
        },
        date: "2025-10-15",
        time: "19:00",
        location: {
            ar: "مسرح المدينة",
            en: "City Theater"
        },
        price: 75,
        image: "/assets/img/audience-1853662_1280.jpg",
        description: {
            ar: "استمتع بأمسية موسيقية رائعة مع أشهر الفنانين العالميين في حفلة لا تُنسى.",
            en: "Enjoy a wonderful musical evening with the most famous international artists in an unforgettable concert."
        },
        organizer: {
            ar: "شركة الفنون العالمية",
            en: "Global Arts Company"
        },
        capacity: 500,
        booked: 320
    },
    {
        id: 2,
        title: {
            ar: "معرض الفنون التشكيلية",
            en: "Fine Arts Exhibition"
        },
        category: {
            ar: "ثقافية",
            en: "Cultural"
        },
        date: "2025-10-20",
        time: "10:00",
        location: {
            ar: "قصر الثقافة",
            en: "Culture Palace"
        },
        price: 25,
        image: "/assets/img/events-carousel-15.jpg",
        description: {
            ar: "معرض يضم مجموعة متنوعة من الأعمال الفنية التشكيلية لفنانين محليين وعالميين.",
            en: "An exhibition featuring a variety of fine art works by local and international artists."
        },
        organizer: {
            ar: "جمعية الفنون التشكيلية",
            en: "Fine Arts Association"
        },
        capacity: 200,
        booked: 150
    },
    {
        id: 3,
        title: {
            ar: "ماراثون المدينة السنوي",
            en: "Annual City Marathon"
        },
        category: {
            ar: "رياضية",
            en: "Sports"
        },
        date: "2025-11-05",
        time: "06:00",
        location: {
            ar: "الواجهة البحرية",
            en: "Waterfront"
        },
        price: 0,
        image: "/assets/img/gettyimages-1446478773-612x612.jpg",
        description: {
            ar: "انضم إلى آلاف المشاركين في ماراثون المدينة السنوي لمسافات مختلفة تناسب جميع المستويات.",
            en: "Join thousands of participants in the annual city marathon with different distances suitable for all levels."
        },
        organizer: {
            ar: "نادي الرياضة المجتمعي",
            en: "Community Sports Club"
        },
        capacity: 3000,
        booked: 2150
    },
    {
        id: 4,
        title: {
            ar: "مؤتمر التكنولوجيا والابتكار",
            en: "Technology and Innovation Conference"
        },
        category: {
            ar: "تعليمية",
            en: "Educational"
        },
        date: "2025-10-25",
        time: "09:00",
        location: {
            ar: "مركز المؤتمرات الدولي",
            en: "International Conference Center"
        },
        price: 150,
        image: "/assets/img/iStock-901570896.jpg",
        description: {
            ar: "مؤتمر يضم خبراء التكنولوجيا والابتكار لمناقشة أحدث التطورات في المجال الرقمي.",
            en: "A conference featuring technology and innovation experts to discuss the latest developments in the digital field."
        },
        organizer: {
            ar: "مجموعة الابتكار التقني",
            en: "Technical Innovation Group"
        },
        capacity: 800,
        booked: 650
    },
    {
        id: 5,
        title: {
            ar: "عرض مسرحي: أحلام المدينة",
            en: "Theatrical Show: City Dreams"
        },
        category: {
            ar: "ترفيهية",
            en: "Entertainment"
        },
        date: "2025-11-10",
        time: "20:30",
        location: {
            ar: "المسرح الوطني",
            en: "National Theater"
        },
        price: 60,
        image: "/assets/img/pexels-wolfgang-1002140-2747449.jpg",
        description: {
            ar: "عرض مسرحي مميز يجمع بين الدراما والكوميديا في قصة تعكس واقع المجتمع المعاصر.",
            en: "A distinctive theatrical show combining drama and comedy in a story that reflects contemporary society."
        },
        organizer: {
            ar: "فرقة المسرح الحديث",
            en: "Modern Theater Troupe"
        },
        capacity: 400,
        booked: 280
    },
    {
        id: 6,
        title: {
            ar: "ورشة عمل التسويق الرقمي",
            en: "Digital Marketing Workshop"
        },
        category: {
            ar: "تعليمية",
            en: "Educational"
        },
        date: "2025-10-18",
        time: "14:00",
        location: {
            ar: "مركز التدريب المتقدم",
            en: "Advanced Training Center"
        },
        price: 100,
        image: "/assets/img/common-corporate-events.jpg",
        description: {
            ar: "ورشة عملية تقدم استراتيجيات فعالة للتسويق الرقمي وتحسين ظهور العلامات التجارية.",
            en: "A practical workshop offering effective strategies for digital marketing and improving brand visibility."
        },
        organizer: {
            ar: "أكاديمية التسويق الرقمي",
            en: "Digital Marketing Academy"
        },
        capacity: 50,
        booked: 42
    }
];

// ===== PAGE TRANSITIONS AND LOADING SCREEN MANAGEMENT =====
// Handles loading screen display and page transition effects
function initPageTransitions() {
    // Hide loading screen after page is fully loaded
    window.addEventListener('load', function () {
        setTimeout(function () {
            const loadingScreen = document.getElementById('loading-screen');
            if (loadingScreen) {
                // Add fade-out class to trigger CSS animation
                loadingScreen.classList.add('fade-out');

                // Remove loading screen from DOM after animation completes
                setTimeout(function () {
                    loadingScreen.remove();
                    document.body.classList.add('page-loaded');
                }, 500);
            }
        }, 2000); // Show loading screen for 2 seconds for better UX
    });

    // Add click effects to all interactive elements
    document.querySelectorAll('.btn, .nav-link, .language-toggle, .dark-mode-toggle').forEach(element => {
        element.addEventListener('click', function (e) {
            // Add scale down effect on click for better feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);

            // Handle navigation links with smooth transitions
            if (this.classList.contains('nav-link') && this.getAttribute('href') && !this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const href = this.getAttribute('href');

                // Add page transition effect before navigation
                document.body.classList.remove('page-loaded');
                document.body.classList.add('page-transition');

                // Navigate after transition completes
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    });
}

// ===== ACTIVE NAVIGATION MANAGEMENT =====
// Updates the active state of navigation links based on current page
function updateActiveNav() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    // Loop through all navigation links
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');

        // Check if this link corresponds to current page
        if (linkHref === currentPage ||
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage.includes(linkHref.replace('.html', '')) && linkHref !== 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ===== MAIN APPLICATION INITIALIZATION =====
// Initializes all systems when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
});

function initializeApp() {
    // Initialize all core systems
    initLanguageSystem();      // Language switching functionality
    initDarkMode();            // Dark/light mode toggle
    initCounters();            // Animated statistics counters
    initScrollToTop();         // Scroll to top button
    initNavbarOnScroll();      // Navbar behavior on scroll
    initPageTransitions();     // Page transitions and loading screen
    updateActiveNav();         // Active navigation highlighting

    // Initialize page-specific functionality based on current page
    if (document.getElementById('featuredEventsContainer')) {
        loadFeaturedEvents();  // Homepage featured events
    }

    if (document.getElementById('eventsContainer')) {
        loadAllEvents();       // Events page - all events
        initEventFilters();    // Events page - category filters
    }

    if (document.getElementById('eventDetails')) {
        loadEventDetails();    // Individual event page
    }

    if (document.getElementById('contactForm')) {
        initContactForm();     // Contact page form
    }

    if (document.getElementById('bookingForm')) {
        initBookingForm();     // Booking modal form
    }
}

// ===== LANGUAGE SYSTEM MANAGEMENT =====
// Handles bilingual support and language switching
function initLanguageSystem() {
    // Get all language toggle buttons
    const languageToggles = document.querySelectorAll('#languageToggle');

    // Add click event listeners to all language toggle buttons
    languageToggles.forEach(toggle => {
        toggle.addEventListener('click', toggleLanguage);
    });

    // Get saved language preference or default to Arabic
    const savedLanguage = localStorage.getItem('language') || 'ar';
    setLanguage(savedLanguage);
}

// Toggle between Arabic and English languages
function toggleLanguage() {
    const currentLanguage = document.documentElement.lang;
    const newLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    setLanguage(newLanguage);
}

// Apply language settings to the entire page
function setLanguage(language) {
    // Update HTML document attributes for language and text direction
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';

    // Save language preference to localStorage for persistence
    localStorage.setItem('language', language);

    // Update all UI elements with translated text
    updateUIForLanguage(language);

    // Update language toggle button text
    updateLanguageButton(language);

    // Reload dynamic content that depends on language
    reloadDynamicContent();
}

// Update all translatable UI elements with current language
function updateUIForLanguage(language) {
    const t = translations[language];

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            element.textContent = t[key];
        }
    });

    // Update form placeholders with translated text
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            element.placeholder = t[key];
        }
    });

    // Update element titles with translated text
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        if (t[key]) {
            element.title = t[key];
        }
    });
}

// Update language toggle button text
function updateLanguageButton(language) {
    const buttons = document.querySelectorAll('#languageToggle');

    buttons.forEach(button => {
        if (button) {
            const textSpan = button.querySelector('span');
            if (textSpan) {
                textSpan.textContent = translations[language].language;
            }
        }
    });
}

// Reload dynamic content that depends on language
function reloadDynamicContent() {
    const currentLanguage = document.documentElement.lang;

    // Reload featured events with current language
    if (document.getElementById('featuredEventsContainer')) {
        loadFeaturedEvents();
    }

    // Reload all events with current language
    if (document.getElementById('eventsContainer')) {
        loadAllEvents();
    }

    // Reload event details with current language
    if (document.getElementById('eventDetails')) {
        loadEventDetails();
    }
}

// ===== DARK MODE FUNCTIONALITY =====
// Handles dark/light mode switching and persistence
function initDarkMode() {
    // Get all dark mode toggle buttons
    const darkModeToggles = document.querySelectorAll('#darkModeToggle');

    // Add click event listeners to all dark mode toggle buttons
    darkModeToggles.forEach(toggle => {
        toggle.addEventListener('click', toggleDarkMode);
    });

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        enableDarkMode();
    }
    // Check system preference if no user preference is saved
    else if (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        enableDarkMode();
    }
}

// Toggle between dark and light modes
function toggleDarkMode() {
    if (document.body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

// Enable dark mode and update UI
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
    updateDarkModeIcon(true);
}

// Disable dark mode and update UI
function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
    updateDarkModeIcon(false);
}

// Update dark mode toggle icon based on current mode
function updateDarkModeIcon(isDarkMode) {
    const icons = document.querySelectorAll('#darkModeToggle i');

    icons.forEach(icon => {
        if (icon) {
            if (isDarkMode) {
                icon.className = 'fas fa-sun'; // Sun icon for dark mode
            } else {
                icon.className = 'fas fa-moon'; // Moon icon for light mode
            }
        }
    });
}

// ===== ANIMATED COUNTERS =====
// Creates counting animation for statistics
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        // Get target number from data-count attribute
        const target = +counter.getAttribute('data-count');
        const increment = target / 200; // Calculate increment for smooth animation
        let current = 0;

        // Recursive function to update counter value
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.innerText = Math.ceil(current);
                setTimeout(updateCounter, 10); // Continue animation
            } else {
                counter.innerText = target; // Ensure exact target value
            }
        };

        // Use Intersection Observer to start animation when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target); // Stop observing after animation starts
                }
            });
        });

        observer.observe(counter);
    });
}

// ===== SCROLL TO TOP BUTTON =====
// Handles show/hide and functionality of scroll to top button
function initScrollToTop() {
    const scrollButton = document.getElementById('scrollToTop');

    if (scrollButton) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollButton.classList.add('show');
            } else {
                scrollButton.classList.remove('show');
            }
        });

        // Smooth scroll to top when button is clicked
        scrollButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ===== NAVBAR SCROLL BEHAVIOR =====
// Adds/removes scrolled class based on scroll position
function initNavbarOnScroll() {
    const navbar = document.querySelector('.custom-navbar');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}

// ===== FEATURED EVENTS LOADING =====
// Loads and displays featured events on homepage
function loadFeaturedEvents() {
    const container = document.getElementById('featuredEventsContainer');
    const currentLanguage = document.documentElement.lang;

    // Get first 3 events as featured events
    const featuredEvents = eventsData.slice(0, 3);

    // Clear container before adding new content
    container.innerHTML = '';

    // Create and append event cards for each featured event
    featuredEvents.forEach(event => {
        const eventDate = new Date(event.date);

        // Month names in both languages
        const monthNames = currentLanguage === 'ar' ?
            ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"] :
            ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        // Create event card HTML with dynamic content
        const eventCard = `
            <div class="col-lg-4 col-md-6">
                <div class="card event-card h-100">
                    <div class="event-image position-relative">
                        <img src="${event.image}" class="card-img-top" alt="${event.title[currentLanguage]}">
                        <div class="event-date">
                            <div class="day">${eventDate.getDate()}</div>
                            <div class="month">${monthNames[eventDate.getMonth()]}</div>
                        </div>
                    </div>
                    <div class="card-body event-body d-flex flex-column">
                        <span class="event-category">${event.category[currentLanguage]}</span>
                        <h5 class="event-title">${event.title[currentLanguage]}</h5>
                        <p class="event-location">
                            <i class="fas fa-map-marker-alt"></i> ${event.location[currentLanguage]}
                        </p>
                        <div class="mt-auto">
                            <div class="d-flex justify-content-between align-items-center">
                                <span class="event-price">${event.price === 0 ? translations[currentLanguage].free : event.price + (currentLanguage === 'ar' ? ' ر.س' : ' SAR')}</span>
                                <a href="event.html?id=${event.id}" class="btn btn-primary btn-sm">${translations[currentLanguage].details}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        container.innerHTML += eventCard;
    });
}

// ===== ALL EVENTS LOADING =====
// Loads and displays all events on events page
function loadAllEvents() {
    const container = document.getElementById('eventsContainer');
    const currentLanguage = document.documentElement.lang;

    // Clear container before adding new content
    container.innerHTML = '';

    // Create and append event cards for all events
    eventsData.forEach(event => {
        const eventDate = new Date(event.date);

        // Month names in both languages
        const monthNames = currentLanguage === 'ar' ?
            ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"] :
            ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        // Create event card HTML with dynamic content
        const eventCard = `
            <div class="col-lg-4 col-md-6 mb-4" data-category="${event.category.en}">
                <div class="card event-card h-100">
                    <div class="event-image position-relative">
                        <img src="${event.image}" class="card-img-top" alt="${event.title[currentLanguage]}">
                        <div class="event-date">
                            <div class="day">${eventDate.getDate()}</div>
                            <div class="month">${monthNames[eventDate.getMonth()]}</div>
                        </div>
                    </div>
                    <div class="card-body event-body d-flex flex-column">
                        <span class="event-category">${event.category[currentLanguage]}</span>
                        <h5 class="event-title">${event.title[currentLanguage]}</h5>
                        <p class="event-location">
                            <i class="fas fa-map-marker-alt"></i> ${event.location[currentLanguage]}
                        </p>
                        <div class="mt-auto">
                            <div class="d-flex justify-content-between align-items-center">
                                <span class="event-price">${event.price === 0 ? translations[currentLanguage].free : event.price + (currentLanguage === 'ar' ? ' ر.س' : ' SAR')}</span>
                                <div>
                                    <a href="event.html?id=${event.id}" class="btn btn-primary btn-sm">${translations[currentLanguage].details}</a>
                                    <button class="btn btn-outline-primary btn-sm ms-2 book-btn" data-event-id="${event.id}">${translations[currentLanguage].book}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        container.innerHTML += eventCard;
    });

    // Add event listeners to booking buttons
    document.querySelectorAll('.book-btn').forEach(button => {
        button.addEventListener('click', function () {
            const eventId = this.getAttribute('data-event-id');
            openBookingModal(eventId);
        });
    });
}

// ===== EVENT FILTERS INITIALIZATION =====
// Handles category filtering on events page
function initEventFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const eventsContainer = document.getElementById('eventsContainer');
    const currentLanguage = document.documentElement.lang;

    // Add click event listeners to all filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Get filter category from data attribute
            const filter = this.getAttribute('data-filter');

            // Get all event cards
            const eventCards = eventsContainer.querySelectorAll('.col-lg-4');

            // Show/hide event cards based on filter
            eventCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ===== EVENT DETAILS PAGE =====
// Loads and displays individual event details
function loadEventDetails() {
    // Get event ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id');
    const currentLanguage = document.documentElement.lang;

    if (eventId) {
        // Find event by ID
        const event = eventsData.find(e => e.id == eventId);

        if (event) {
            const eventDate = new Date(event.date);

            // Month names in both languages
            const monthNames = currentLanguage === 'ar' ?
                ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"] :
                ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            const eventDetails = document.getElementById('eventDetails');

            // Create event details HTML with all event information
            eventDetails.innerHTML = `
                <div class="row">
                    <div class="col-lg-8">
                        <div class="event-image mb-4">
                            <img src="${event.image}" class="img-fluid rounded-3" alt="${event.title[currentLanguage]}">
                        </div>
                        <h1 class="mb-3">${event.title[currentLanguage]}</h1>
                        <div class="d-flex flex-wrap gap-2 mb-4">
                            <span class="badge-custom">${event.category[currentLanguage]}</span>
                            <span class="badge bg-secondary">${event.organizer[currentLanguage]}</span>
                        </div>
                        <p class="lead">${event.description[currentLanguage]}</p>
                        
                        <h4 class="mt-5 mb-3">${translations[currentLanguage].similarEvents}</h4>
                        <div class="row" id="similarEvents">
                            <!-- Similar events will be loaded here by JavaScript -->
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card event-info-card sticky-top">
                            <div class="card-body">
                                <h5 class="card-title">${currentLanguage === 'ar' ? 'معلومات الفعالية' : 'Event Information'}</h5>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <span><i class="fas fa-calendar-alt me-2"></i> ${currentLanguage === 'ar' ? 'التاريخ' : 'Date'}</span>
                                        <span>${eventDate.getDate()} ${monthNames[eventDate.getMonth()]} ${eventDate.getFullYear()}</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <span><i class="fas fa-clock me-2"></i> ${currentLanguage === 'ar' ? 'الوقت' : 'Time'}</span>
                                        <span>${event.time}</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <span><i class="fas fa-map-marker-alt me-2"></i> ${currentLanguage === 'ar' ? 'الموقع' : 'Location'}</span>
                                        <span>${event.location[currentLanguage]}</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <span><i class="fas fa-ticket-alt me-2"></i> ${currentLanguage === 'ar' ? 'السعر' : 'Price'}</span>
                                        <span>${event.price === 0 ? translations[currentLanguage].free : event.price + (currentLanguage === 'ar' ? ' ر.س' : ' SAR')}</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <span><i class="fas fa-users me-2"></i> ${currentLanguage === 'ar' ? 'المقاعد' : 'Seats'}</span>
                                        <span>${event.booked} / ${event.capacity}</span>
                                    </li>
                                </ul>
                                <div class="d-grid gap-2 mt-4">
                                    <button class="btn btn-primary btn-lg" id="bookEventBtn" data-event-id="${event.id}">
                                        <i class="fas fa-ticket-alt me-2"></i> ${currentLanguage === 'ar' ? 'احجز تذكرتك الآن' : 'Book Your Ticket Now'}
                                    </button>
                                    <button class="btn btn-outline-primary" id="shareEventBtn">
                                        <i class="fas fa-share-alt me-2"></i> ${currentLanguage === 'ar' ? 'مشاركة الفعالية' : 'Share Event'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // Load similar events in the same category
            loadSimilarEvents(event.id, event.category.en);

            // Add event listeners to action buttons
            document.getElementById('bookEventBtn').addEventListener('click', function () {
                openBookingModal(event.id);
            });

            document.getElementById('shareEventBtn').addEventListener('click', function () {
                shareEvent(event);
            });
        } else {
            // Event not found - show error message
            const t = translations[currentLanguage];
            document.getElementById('eventDetails').innerHTML = `
                <div class="alert alert-danger text-center">
                    <h4>${t.eventNotFound}</h4>
                    <p>${currentLanguage === 'ar' ? 'عذراً، لم نتمكن من العثور على الفعالية المطلوبة.' : 'Sorry, we could not find the requested event.'}</p>
                    <a href="events.html" class="btn btn-primary">${t.backToEvents}</a>
                </div>
            `;
        }
    } else {
        // Event ID missing - show warning message
        const t = translations[currentLanguage];
        document.getElementById('eventDetails').innerHTML = `
            <div class="alert alert-warning text-center">
                <h4>${t.eventIdMissing}</h4>
                <p>${currentLanguage === 'ar' ? 'يرجى التأكد من الرابط والمحاولة مرة أخرى.' : 'Please check the link and try again.'}</p>
                <a href="events.html" class="btn btn-primary">${t.backToEvents}</a>
            </div>
        `;
    }
}

// ===== SIMILAR EVENTS LOADING =====
// Loads and displays events similar to the current event
function loadSimilarEvents(currentEventId, category) {
    const similarEventsContainer = document.getElementById('similarEvents');
    const currentLanguage = document.documentElement.lang;

    // Find events in the same category, excluding the current event
    const similarEvents = eventsData.filter(event =>
        event.id != currentEventId && event.category.en === category
    ).slice(0, 3); // Limit to 3 similar events

    // Clear container before adding new content
    similarEventsContainer.innerHTML = '';

    if (similarEvents.length > 0) {
        // Create and append similar event cards
        similarEvents.forEach(event => {
            const eventDate = new Date(event.date);

            // Month names in both languages
            const monthNames = currentLanguage === 'ar' ?
                ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"] :
                ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            // Create similar event card HTML
            const eventCard = `
                <div class="col-md-4">
                    <div class="card h-100">
                        <img src="${event.image}" class="card-img-top" alt="${event.title[currentLanguage]}" height="150" style="object-fit: cover;">
                        <div class="card-body">
                            <h6 class="card-title">${event.title[currentLanguage]}</h6>
                            <p class="card-text small">
                                <i class="fas fa-calendar-alt me-1"></i> ${eventDate.getDate()} ${monthNames[eventDate.getMonth()]}
                                <br>
                                <i class="fas fa-map-marker-alt me-1"></i> ${event.location[currentLanguage]}
                            </p>
                            <a href="event.html?id=${event.id}" class="btn btn-outline-primary btn-sm">${translations[currentLanguage].details}</a>
                        </div>
                    </div>
                </div>
            `;

            similarEventsContainer.innerHTML += eventCard;
        });
    } else {
        // No similar events found - show message
        similarEventsContainer.innerHTML = `
            <div class="col-12">
                <p class="text-muted text-center">${translations[currentLanguage].noSimilarEvents}</p>
            </div>
        `;
    }
}

// ===== BOOKING MODAL FUNCTIONALITY =====
// Opens booking modal for a specific event
function openBookingModal(eventId) {
    const event = eventsData.find(e => e.id == eventId);
    const currentLanguage = document.documentElement.lang;

    if (event) {
        // Pre-fill event name in booking form
        document.getElementById('eventName').value = event.title[currentLanguage];

        // Update modal text based on current language
        document.querySelector('#bookingModal .modal-title').textContent = translations[currentLanguage].booking;
        document.querySelector('label[for="eventName"]').textContent = translations[currentLanguage].eventName;
        document.querySelector('label[for="ticketCount"]').textContent = translations[currentLanguage].ticketCount;
        document.querySelector('label[for="fullName"]').textContent = translations[currentLanguage].fullName;
        document.querySelector('label[for="email"]').textContent = translations[currentLanguage].email;
        document.querySelector('label[for="phone"]').textContent = translations[currentLanguage].phone;
        document.querySelector('.btn-secondary').textContent = translations[currentLanguage].cancel;
        document.querySelector('#confirmBooking').textContent = translations[currentLanguage].confirmBooking;

        // Show booking modal using Bootstrap
        const bookingModal = new bootstrap.Modal(document.getElementById('bookingModal'));
        bookingModal.show();
    }
}

// ===== BOOKING FORM INITIALIZATION =====
// Handles booking form submission and validation
function initBookingForm() {
    document.getElementById('confirmBooking').addEventListener('click', function () {
        const form = document.getElementById('bookingForm');
        const eventName = document.getElementById('eventName').value;
        const ticketCount = document.getElementById('ticketCount').value;
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const currentLanguage = document.documentElement.lang;

        // Validate form before submission
        if (form.checkValidity()) {
            // In a real application, this data would be sent to a server
            // For demo purposes, we'll just show a success message

            // Hide booking modal
            const bookingModal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
            bookingModal.hide();

            // Show success message
            showAlert(translations[currentLanguage].bookingSuccess, 'success');

            // Reset form for next use
            form.reset();
        } else {
            // Show browser validation messages
            form.reportValidity();
        }
    });
}

// ===== EVENT SHARING FUNCTIONALITY =====
// Handles sharing events via Web Share API or fallback
function shareEvent(event) {
    const currentLanguage = document.documentElement.lang;

    // Check if Web Share API is supported
    if (navigator.share) {
        // Use native share dialog
        navigator.share({
            title: event.title[currentLanguage],
            text: event.description[currentLanguage],
            url: window.location.href,
        })
            .then(() => console.log('Event shared successfully'))
            .catch((error) => console.log('Error sharing event:', error));
    } else {
        // Fallback: Copy link to clipboard
        navigator.clipboard.writeText(window.location.href)
            .then(() => {
                showAlert(currentLanguage === 'ar' ? 'تم نسخ رابط الفعالية إلى الحافظة' : 'Event link copied to clipboard', 'info');
            })
            .catch(err => {
                console.error('Failed to copy link: ', err);
            });
    }
}

// ===== CONTACT FORM INITIALIZATION =====
// Handles contact form submission and validation
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const currentLanguage = document.documentElement.lang;

    // Update form labels based on current language
    if (contactForm) {
        document.querySelector('label[for="firstName"]').textContent = currentLanguage === 'ar' ? 'الاسم الأول' : 'First Name';
        document.querySelector('label[for="lastName"]').textContent = currentLanguage === 'ar' ? 'الاسم الأخير' : 'Last Name';
        document.querySelector('label[for="email"]').textContent = translations[currentLanguage].email;
        document.querySelector('label[for="phone"]').textContent = translations[currentLanguage].phone;
        document.querySelector('label[for="subject"]').textContent = translations[currentLanguage].subject;
        document.querySelector('label[for="message"]').textContent = translations[currentLanguage].message;

        // Update subject options based on language
        const subjectSelect = document.getElementById('subject');
        if (subjectSelect) {
            subjectSelect.innerHTML = `
                <option value="" selected disabled>${currentLanguage === 'ar' ? 'اختر الموضوع' : 'Select Subject'}</option>
                <option value="استفسار عام">${currentLanguage === 'ar' ? 'استفسار عام' : 'General Inquiry'}</option>
                <option value="مقترح">${currentLanguage === 'ar' ? 'مقترح' : 'Suggestion'}</option>
                <option value="شكوى">${currentLanguage === 'ar' ? 'شكوى' : 'Complaint'}</option>
                <option value="تعاون">${currentLanguage === 'ar' ? 'تعاون' : 'Cooperation'}</option>
                <option value="فعالية">${currentLanguage === 'ar' ? 'إضافة فعالية' : 'Add Event'}</option>
                <option value="آخر">${currentLanguage === 'ar' ? 'آخر' : 'Other'}</option>
            `;
        }

        // Update submit button text
        document.querySelector('button[type="submit"]').textContent = translations[currentLanguage].send;
    }

    // Handle form submission
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const currentLanguage = document.documentElement.lang;

        // Validate form before submission
        if (this.checkValidity()) {
            // In a real application, this data would be sent to a server
            // For demo purposes, we'll just show a success message
            showAlert(currentLanguage === 'ar' ? 'تم إرسال رسالتك بنجاح! سنقوم بالرد عليك في أقرب وقت ممكن.' : 'Your message has been sent successfully! We will respond to you as soon as possible.', 'success');

            // Reset form for next use
            this.reset();
        } else {
            // Show browser validation messages
            this.reportValidity();
        }
    });
}

// ===== UTILITY FUNCTIONS =====

// Display alert messages to user
function showAlert(message, type) {
    // Create alert element
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

    // Add alert to page
    document.body.appendChild(alertDiv);

    // Auto-remove alert after 5 seconds
    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.parentNode.removeChild(alertDiv);
        }
    }, 5000);
}