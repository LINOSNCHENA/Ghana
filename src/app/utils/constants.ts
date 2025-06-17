//
//  TROOPERS INFORTECT CONSTANTS
//

type Website = {
    name: string;
    url: string;
};

export const whatsappNumber = "+233111923424";
export const COMP_MOBILE = whatsappNumber;
export const COMP_LOGO = "/logos/1.ico";
export const COMP_NAME = 'Tourism Desk – Sir Louis and Gao Company Limited'
export const COMP_EMAIL = 'tourism@gmail.com'
export const COMP_COPYRIGHT = new Date().getFullYear() + 'Tourism Desk – Sir Louis and Gao Company Limited. All rights reserved';
export const COMP_PAGE1 = 'Tourism Desk – Sir Louis and Gao Company Limited'

export const topWebsites: Website[] = [
    { name: "Advertisements", url: "Tourism Desk – Sir Louis and Gao Company Limited" },
    { name: "Wise-Pink", url: "https://hpink-finance.netlify.app/" },
    { name: "Money", url: "Tourism Desk – Sir Louis and Gao Company Limited" },
    { name: "Finance Tracker", url: "https://fintrack.com" },
    { name: "Lending System", url: "https://lendingsystem.com" },
    { name: "HR Management", url: "https://hrmanage.com" },
    { name: "E-commerce Dashboard", url: "https://ecomdash.com" },
    { name: "Marketing Suite", url: "https://marketingsuite.com" },
    { name: "Support Portal", url: "https://supportportal.com" },

];

export const pricingPlans = [
    {
        title: "Basic Website (1-3 pages)",
        price: "K3,000",
        features: [
            "Supports up to 100 users",
            "10 GB storage included"
        ],
        popular: false,
    },
    {
        title: "Business Website (5-10 pages)",
        price: "K5,000",
        features: [
            "Supports up to 100 users",
            "10 GB storage included"
        ],
        popular: false,
    },
    {
        title: "E-commerce Store",
        price: "K8,000 – K22,000",
        features: [
            "Supports 1,000+ users",
            "10 GB storage included"
        ],
        popular: false,
    },
    {
        title: "Custom Web Applications",
        price: "Starting from K15,000",
        features: [
            "Supports 1,000+ users",
            "10 GB storage included"
        ],
        popular: false,
    },
    {
        title: "Website Redesign & Upgrades",
        price: "Starting at K4,500",
        features: [
            "Supports 100+ users",
            "10 GB storage included"
        ],
        popular: true,
    },
    {
        title: "School Registration Systems",
        price: "Starting from K10,000",
        features: [
            "Supports 1,000+ users",
            "10 GB storage included"
        ],
        popular: false,
    },
];


export const pricingPlans2 = [
    {
        title: "Basic",
        price: "$19/mo",
        features: ["1 User", "10GB Storage"],
        popular: false,
    },
    {
        title: "Pro",
        price: "$49/mo",
        features: ["5 Users", "100GB Storage"],
        popular: true,
    },
    {
        title: "Enterprise",
        price: "Contact Us",
        features: ["Unlimited Users", "1TB Storage"],
        popular: false,
    },
];


export const services = [
    { title: "Business Websites & Blogs", description: "Professional websites tailored to your business needs." },
    { title: "E-commerce Stores", description: "Secure and scalable online stores with payment integration." },
    { title: "Custom Web Applications", description: "Build custom solutions to streamline your business processes." },
    { title: "Website Redesign & Upgrades", description: "Modernize and optimize your existing website." },
    { title: "SEO & Mobile Optimization", description: "Improve your website's visibility and performance." },
    { title: "School Registration Systems", description: "Efficient electronic registration systems for schools." },
];

export const specialists = [
    { name: "Marvin Nchena", role: "Senior Software Engineer", description: "Leads the design and development of scalable frontend and backend solutions, ensuring technical excellence and innovation." },
    { name: "Gabriel Sikazwe", role: "Marketing Officer", description: "Drives strategic marketing initiatives and fosters seamless collaboration between product development and user experience teams." },
    { name: "Webster Mwanza", role: "Product Officer", description: "Oversees the development of robust and secure web applications, focusing on delivering high-quality products that meet client needs." },
    { name: "Lukas Monde", role: "Senior Test Engineer", description: "Ensures software quality and reliability through comprehensive testing strategies and continuous process improvement." },
    { name: "Benson Mwale", role: "Junior Software Engineer", description: "Contributes to the development of secure and efficient web applications, supporting the team in delivering reliable solutions." },
    { name: "Mbala Mulenga", role: "Cyber Security Consultant", description: "Assists in building and maintaining secure web applications, with a commitment to best practices and continuous learning." },
    { name: "Mohammed Nasrat", role: "Software Engineer", description: "Develops and maintains robust web applications, ensuring security, performance, and scalability." },
    { name: "Nikolas Tembo", role: "Senior Software Engineer", description: "Specializes in architecting and implementing secure, high-performance web solutions tailored to client requirements." },
];

export const techStacks = [
    { title: "Frontend", technologies: "Angular, React, Vue.js, TypeScript, JavaScript, Tailwind CSS, Meteor, SpringBoot, Java, NodeJs, Kotlin" },
    { title: "Backend", technologies: "Node.js, Express.js, NestJS" },
    { title: "Databases", technologies: "PostgreSQL, MySQL, MongoDB" },
    { title: "Hosting & Deployment", technologies: "AWS, Vercel, DigitalOcean" },
    { title: "Support", technologies: "Twelve months free service for all product we offer" },
    { title: "Maintanance", technologies: "Management of existing systems" },
];


