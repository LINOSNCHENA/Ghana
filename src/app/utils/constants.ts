//
//  TROOPERS INFORTECT CONSTANTS
//

type Website = {
    name: string;
    url: string;
};

export const whatsappNumber = "+233559599892";
export const COMP_MOBILE = "+4917641848967";
export const COMP_LOGO = "/logos/1.ico";
export const COMP_LOGO_BIG = "/logos/1.jpg";
export const COMP_NAME = 'Tourism Desk – Sir Louis and Gao Company Limited'
export const COMP_EMAIL = 'chinaoffice@slghana.com'
export const COMP_EMAIL2 = 'chinaoffice@slghana.com'
export const COMP_SHORT = 'SLG'
export const COMP_COPYRIGHT = new Date().getFullYear() + 'Tourism Desk – Sir Louis and Gao Company Limited. All rights reserved';
export const COMP_PAGE1 = 'Tourism Desk – Sir Louis and Gao Company Limited'

export const topWebsites: Website[] = [
    { name: "Advertisements", url: "Tourism Desk – Sir Louis and Gao Company Ltd" },
    { name: "Wise-Pink", url: "https://hpink-finance.netlify.app/" },
    { name: "Money", url: "Tourism Desk – Sir Louis and Gao Company Ltd" },
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


export const services2 = [
    { title: "Business Websites & Blogs", description: "Professional websites tailored to your business needs." },
    { title: "E-commerce Stores", description: "Secure and scalable online stores with payment integration." },
    { title: "Custom Web Applications", description: "Build custom solutions to streamline your business processes." },
    { title: "Website Redesign & Upgrades", description: "Modernize and optimize your existing website." },
    { title: "SEO & Mobile Optimization", description: "Improve your website's visibility and performance." },
    { title: "School Registration Systems", description: "Efficient electronic registration systems for schools." },
];

export const services = {
    "For Chinese Nationals Visiting Ghana": [
        "Business Visa Assistance",
        "Company Registration (LLC, Rep Office)",
        "Mining Licenses and Lease Acquisition",
        "Real Estate and Property Acquisition",
    ],
    "For Ghanaians Going to China": [
        "Student Visa Application",
        "China Tourist & Business Visas",
        "Scholarship Application & Support",
    ],
    "Documents We Provide": [
        "Business & PU Invitation Letters",
        "Admission Letters to Chinese Universities",
        "Company Registration Certificates",
        "Mining and Real Estate Legal Documents",
    ],
    "Foreign Investments": ["Sir Louis and Gao serves as a trusted gateway for foreign investors seeking to enter the African minerals sector.We help international companies navigate:"
    ],

    "DRC Investments": ["Sir Louis and Gao serves as a trusted gateway for foreign investors seeking to enter the African minerals sector.We help international companies navigate:"
    ],

    "Ghana Investments": ["Sir Louis and Gao serves as a trusted gateway for foreign investors seeking to enter the African minerals sector.We help international companies navigate:"
    ],
    "Zambian Investments": ["Sir Louis and Gao serves as a trusted gateway for foreign investors seeking to enter the African minerals sector.We help international companies navigate:"
    ]
};


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



// export companyHistory = "Company Background: Sir Louis and Gao Company Limited

// Sir Louis and Gao Company Limited is a multinational enterprise strategically headquartered in Ghana and China, with operations and partnerships spanning across West, East, and Southern Africa.The company is a dynamic force in natural resource development, international trade facilitation, and cross - border investment consulting.

// ⸻

// ⛏ Mining & Minerals Division

// Sir Louis and Gao has established a solid reputation in the African mining sector, with active exploration, trading, and support operations in Ghana, Zambia, and the Democratic Republic of Congo(DRC).Our company is involved in both small - scale and industrial mining projects, offering technical, legal, and logistical support for global stakeholders.

// 🌍 Our Core Commodities:
// 	•	Gold – sourcing and export from Ghana and Zambia
// 	•	Gemstones – including emeralds, sapphires, and tourmaline
// 	•	Copper – copper ore, copper concentration, and copper cathode from Zambia
// 	•	Tin – small - scale tin mining and export facilitation
// 	•	Coltan(Columbite - Tantalite) – procurement and trade from the DRC

// We operate with full compliance under local mining laws and international due diligence guidelines(including the OECD framework), ensuring traceability, ethical sourcing, and investor protection.
// "


export const fotoNames = [

    '1. CEO of Sir Louis and Gao Company Limited Meets Formal President of Nigeria president Olusegun Obasanjo',
    '2. Acadamic Achievement',
    '3. Strategic Collaboration on Elecric Vehicle (EV) Manufacturing and Energy Stability in Nogeria',
    '4. Moffat',
    '5. Ghana Army meeting',

    '6. nIGERIAN meeting',
    '7. Meeting with former nigerian president oBASAnjo',
    '8. Graduation',
    '9. Meeting in ghama',
    '10. Moffat',


    '11. Ghana Army meeting',
    '12. nIGERIAN meeting',
    '13. Meeting with former nigerian president oBASAnjo',
    '14. Graduation',
    '15. Meeting in ghama',

    '16. Moffat',
    '17. Ghana Army meeting',
    '18. nIGERIAN meeting',
    '19. Meeting with former nigerian president oBASAnjo',
    '20. Graduation',

]