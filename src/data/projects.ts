export interface ProjectDetail {
    slug: string;
    title: string;
    imageUrl: string;
    screenshots: string[]; // Array of screenshot images
    overview: string;
    techStack: string[];
    features: string[];
    myRole: string[];
    liveDemo?: string;
    github?: string;
    documentation?: string;
}

export const projectsData: ProjectDetail[] = [
    {
        slug: 'grand-telar-residence',
        title: 'Website: Grand Telar Residence',
        imageUrl: '/grand1.png',
        screenshots: ['/grand1.png', '/grand1.png', '/grand1.png', '/grand1.png', '/grand1.png', '/grand1.png'], // Gunakan gambar yang sama atau tambahkan screenshot lain
        overview: 'A comprehensive real estate website showcasing premium residential properties. The platform provides detailed property information, virtual tours, and seamless contact integration for potential buyers.',
        techStack: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
        features: [
            'Interactive property showcase with high-quality images',
            'Responsive design optimized for all devices',
            'Smooth animations and transitions',
            'Contact form integration',
            'SEO optimized for better visibility'
        ],
        myRole: [
            'Full-stack development from concept to deployment',
            'UI/UX design and implementation',
            'Performance optimization',
            'Client communication and requirement gathering'
        ],
        liveDemo: 'https://grandtelarresidence.site/',
        github: 'https://github.com/yourusername/grand-telar',
        documentation: '#'
    },
    {
        slug: 'codetag-studio',
        title: 'Website: CodeTag Studio',
        imageUrl: '/porto2.png',
        screenshots: ['/porto2.png'],
        overview: 'A modern web development studio platform that helps businesses and individuals create stunning websites. CodeTag Studio offers comprehensive web solutions from design to deployment.',
        techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
        features: [
            'Portfolio showcase system',
            'Service catalog with detailed descriptions',
            'Client testimonials section',
            'Responsive and mobile-first design',
            'Fast page load times with optimized assets'
        ],
        myRole: [
            'Co-founder and lead developer',
            'Architecture design and implementation',
            'Brand identity and UI/UX design',
            'Project management and client relations'
        ],
        liveDemo: 'https://codetag-ten.vercel.app/',
        github: 'https://github.com/yourusername/codetag',
        documentation: '#'
    },
    {
        slug: 'jokiin-rush',
        title: 'Website: Jokiin Rush',
        imageUrl: '/porto3.png',
        screenshots: ['/porto3.png'],
        overview: 'An innovative platform connecting gamers with professional gaming services. Users can request assistance for various gaming tasks, from rank boosting to quest completion.',
        techStack: ['Next.js', 'React', 'Tailwind CSS', 'Firebase', 'TypeScript'],
        features: [
            'User authentication and profile management',
            'Service booking system',
            'Real-time order tracking',
            'Payment integration',
            'Rating and review system'
        ],
        myRole: [
            'Full-stack development',
            'Database design and implementation',
            'Payment gateway integration',
            'User experience optimization'
        ],
        liveDemo: 'https://jokirush-rsom.vercel.app/',
        github: 'https://github.com/yourusername/jokiin-rush',
        documentation: '#'
    },
    {
        slug: 'pemdes-sebet',
        title: 'Website: Pemerintah Desa Sebet',
        imageUrl: '/porto4.png',
        screenshots: ['/porto4.png'],
        overview: 'Official government website for Sebet Village, providing public information, administrative services, and community engagement features. The platform serves as a digital bridge between the government and citizens.',
        techStack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
        features: [
            'News and announcement management system',
            'Public service information portal',
            'Document request system',
            'Village profile and demographics',
            'Admin dashboard for content management'
        ],
        myRole: [
            'Backend development with Laravel',
            'Database architecture and optimization',
            'Admin panel development',
            'Integration with government data systems'
        ],
        liveDemo: 'https://pemdes-sebet.site/',
        github: 'https://github.com/yourusername/pemdes-sebet',
        documentation: '#'
    },
    {
        slug: 'cashvent',
        title: 'Website: Cashvent',
        imageUrl: '/porto51.png',
        screenshots: ['/porto51.png'],
        overview: 'A comprehensive financial management and event budgeting platform. Cashvent helps users plan, track, and manage expenses for events and projects with intuitive tools and real-time insights.',
        techStack: ['Laravel', 'Vue.js', 'MySQL', 'Chart.js', 'Bootstrap'],
        features: [
            'Expense tracking and categorization',
            'Budget planning tools',
            'Financial reports and analytics',
            'Multi-user collaboration',
            'Export data to various formats'
        ],
        myRole: [
            'Full-stack development',
            'Financial calculation logic implementation',
            'Data visualization with Chart.js',
            'User authentication and authorization'
        ],
        liveDemo: 'https://cashvent.site/',
        github: 'https://github.com/yourusername/cashvent',
        documentation: '#'
    },
    {
        slug: 'telkommerce',
        title: 'Website: Telkommerce',
        imageUrl: '/porto6.png',
        screenshots: ['/porto6.png', '/porto6.png', '/porto6.png'],
        overview: 'An e-commerce platform developed as a university project, featuring modern shopping cart functionality, product management, and secure checkout process.',
        techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Stripe'],
        features: [
            'Product catalog with search and filters',
            'Shopping cart functionality',
            'Secure payment processing',
            'Order history and tracking',
            'Admin dashboard for product management'
        ],
        myRole: [
            'Frontend development with Next.js',
            'Shopping cart logic implementation',
            'Payment gateway integration',
            'Responsive UI development'
        ],
        liveDemo: 'https://telkommerce-seven.vercel.app/',
        github: 'https://github.com/yourusername/telkommerce',
        documentation: '#'
    }
];
